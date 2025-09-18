import mongoose from "mongoose";
import Joi from "joi";
import Booking from "../models/booking.model.js";
import Library from "../models/library.model.js";
import stripe from "../utils/stripe.js";

/**
 * Validation schemas
 */
const checkInSchema = Joi.object({
  libraryId: Joi.string().required()
});

const checkOutSchema = Joi.object({
  bookingId: Joi.string().required()
});

/**
 * Helper: compute amount (in paisa) based on start & end and library hourlyRate
 * Billing policy: per-minute billing, round up to nearest minute.
 */
const computeAmountInPaisa = (start, end, hourlyRate) => {
  const ms = end.getTime() - start.getTime();
  const minutes = Math.ceil(ms / (1000 * 60)); // charge per minute
  const perMinuteRupees = hourlyRate / 60;
  const totalRupees = perMinuteRupees * minutes;
  const amountPaisa = Math.round(totalRupees * 100); // paisa
  return { minutes, totalRupees, amountPaisa };
};

/**
 * CHECK-IN: student arrives and checks in -> create booking (or update existing) with startTime = now
 * Steps:
 * 1. validate
 * 2. check role student
 * 3. decrement availableSeats atomically
 * 4. create booking with startTime = now and status confirmed
 */
export const checkIn = async (req, res) => {
  const { error, value } = checkInSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  if (req.user.role !== "student")
    return res.status(403).json({ error: "Only students can check in" });

  const { libraryId } = value;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // Atomically decrement availableSeats if > 0
    const lib = await Library.findOneAndUpdate(
      { _id: libraryId, availableSeats: { $gt: 0 } },
      { $inc: { availableSeats: -1 } },
      { new: true, session }
    );

    if (!lib) {
      await session.abortTransaction();
      return res.status(400).json({ error: "No seats available or invalid library" });
    }

    // Create booking with startTime now
    const booking = await Booking.create(
      [{
        studentId: req.user._id,
        libraryId,
        startTime: new Date(),
        status: "confirmed"
      }],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({ message: "Checked in", booking: booking[0] });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.error(err);
    return res.status(500).json({ error: "Server error during check-in" });
  }
};

/**
 * CHECK-OUT: student leaves -> set endTime = now, compute amount and charge user's saved card
 * Steps:
 * 1. validate
 * 2. load booking, ensure it belongs to student and is confirmed
 * 3. compute amount
 * 4. create stripe PaymentIntent off_session with saved payment method (confirm)
 * 5. update booking: endTime, status completed, amountCharged
 * 6. increment library.availableSeats
 * If payment fails: set booking.status = "payment_failed" and increment availableSeats
 */
export const checkOut = async (req, res) => {
  const { error, value } = checkOutSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  if (req.user.role !== "student")
    return res.status(403).json({ error: "Only students can check out" });

  const { bookingId } = value;

  // Find booking
  const booking = await Booking.findById(bookingId);
  if (!booking) return res.status(404).json({ error: "Booking not found" });
  if (!booking.studentId.equals(req.user._id))
    return res.status(403).json({ error: "Not your booking" });
  if (booking.status !== "confirmed")
    return res.status(400).json({ error: `Booking status must be 'confirmed' to check out. Current: ${booking.status}` });

  const endTime = new Date();
  const startTime = booking.startTime;
  if (!startTime) return res.status(400).json({ error: "Booking has no start time" });

  // Get library to know hourlyRate
  const lib = await Library.findById(booking.libraryId);
  if (!lib) return res.status(404).json({ error: "Library not found" });

  // Compute amount
  const { minutes, totalRupees, amountPaisa } = computeAmountInPaisa(startTime, endTime, lib.hourlyRate);

  // Ensure student has stripeCustomerId and defaultPaymentMethod
  if (!req.user.stripeCustomerId || !req.user.defaultPaymentMethod) {
    // free the seat and mark payment_failed so admin can follow up; but better to prompt student to add card
    booking.endTime = endTime;
    booking.status = "payment_failed";
    booking.amountCharged = 0;
    await booking.save();
    // increment availableSeats
    await Library.findByIdAndUpdate(lib._id, { $inc: { availableSeats: 1 } });
    return res.status(400).json({ error: "No saved payment method. Please add DOLA card before checkout." });
  }

  // Try charging off-session
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountPaisa, // in paisa for INR
      currency: process.env.CURRENCY || "inr",
      customer: req.user.stripeCustomerId,
      payment_method: req.user.defaultPaymentMethod,
      off_session: true,
      confirm: true,
      description: `DOLA charge for booking ${booking._id} (${minutes} minutes)`
    });

    // Payment succeeded
    booking.endTime = endTime;
    booking.status = "completed";
    booking.amountCharged = amountPaisa;
    await booking.save();

    // Free up seat
    await Library.findByIdAndUpdate(lib._id, { $inc: { availableSeats: 1 } });

    return res.json({
      message: "Checkout successful and charged",
      charged: amountPaisa,
      minutes,
      totalRupees
    });
  } catch (err) {
    console.error("Stripe charge error:", err);

    // Payment failed; mark booking payment_failed and free seat
    booking.endTime = endTime;
    booking.status = "payment_failed";
    booking.amountCharged = 0;
    await booking.save();

    await Library.findByIdAndUpdate(lib._id, { $inc: { availableSeats: 1 } });

    // If error requires action, inform client to take action
    if (err && err.code === "authentication_required") {
      return res.status(402).json({
        error: "Authentication required for payment. Please ask user to re-authenticate payment method.",
        stripe_error: err.raw ? err.raw.message : err.message
      });
    }

    return res.status(402).json({ error: "Payment failed during charging card", detail: err.message });
  }
};

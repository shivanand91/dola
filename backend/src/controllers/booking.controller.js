import mongoose from "mongoose";
import stripe from "../utils/stripe.js";
import Booking from "../models/booking.model.js";
import Library from "../models/library.model.js";

/**
 * compute amount in paisa (INR)
 * per-minute billing, round up to minute
 */
const computeAmountInPaisa = (start, end, hourlyRate) => {
  const ms = end.getTime() - start.getTime();
  const minutes = Math.max(1, Math.ceil(ms / (1000 * 60)));
  const perMinuteRupees = hourlyRate / 60;
  const totalRupees = perMinuteRupees * minutes;
  const paisa = Math.round(totalRupees * 100);
  return { minutes, totalRupees, paisa };
};

/**
 * CHECK-IN
 */
export const checkIn = async (req, res) => {
  if (req.user.role !== "student") return res.status(403).json({ error: "Only students can check in" });

  const { libraryId } = req.body;
  if (!libraryId) return res.status(400).json({ error: "libraryId required" });

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const lib = await Library.findOneAndUpdate(
      { _id: libraryId, availableSeats: { $gt: 0 } },
      { $inc: { availableSeats: -1 } },
      { new: true, session }
    );

    if (!lib) {
      await session.abortTransaction();
      return res.status(400).json({ error: "No seats available or invalid library" });
    }

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
    throw err;
  }
};

/**
 * CHECK-OUT
 */
export const checkOut = async (req, res) => {
  if (req.user.role !== "student") return res.status(403).json({ error: "Only students can check out" });

  const { bookingId } = req.body;
  if (!bookingId) return res.status(400).json({ error: "bookingId required" });

  const booking = await Booking.findById(bookingId);
  if (!booking) return res.status(404).json({ error: "Booking not found" });
  if (!booking.studentId.equals(req.user._id)) return res.status(403).json({ error: "Not your booking" });
  if (booking.status !== "confirmed") return res.status(400).json({ error: `Booking must be 'confirmed' to check out (current: ${booking.status})` });

  const lib = await Library.findById(booking.libraryId);
  if (!lib) return res.status(404).json({ error: "Library not found" });

  const endTime = new Date();
  const startTime = booking.startTime;
  if (!startTime) return res.status(400).json({ error: "Booking has no startTime" });

  const { minutes, totalRupees, paisa } = computeAmountInPaisa(startTime, endTime, lib.hourlyRate);

  // Ensure payment method saved
  if (!req.user.stripeCustomerId || !req.user.defaultPaymentMethod) {
    // free seat and mark payment_failed
    booking.endTime = endTime;
    booking.status = "payment_failed";
    await booking.save();
    await Library.findByIdAndUpdate(lib._id, { $inc: { availableSeats: 1 } });
    return res.status(400).json({ error: "No saved payment method. Add a card before checkout." });
  }

  try {
    const pi = await stripe.paymentIntents.create({
      amount: paisa,
      currency: process.env.CURRENCY || "inr",
      customer: req.user.stripeCustomerId,
      payment_method: req.user.defaultPaymentMethod,
      off_session: true,
      confirm: true,
      description: `DOLA booking ${booking._id} (${minutes} min)`
    });

    // success
    booking.endTime = endTime;
    booking.status = "completed";
    booking.amountCharged = paisa;
    await booking.save();

    await Library.findByIdAndUpdate(lib._id, { $inc: { availableSeats: 1 } });

    return res.json({ message: "Checkout successful", minutes, amountRupees: (paisa/100).toFixed(2) });
  } catch (err) {
    // Payment failed (e.g., authentication_required)
    console.error("Stripe error:", err);

    booking.endTime = endTime;
    booking.status = "payment_failed";
    await booking.save();

    await Library.findByIdAndUpdate(lib._id, { $inc: { availableSeats: 1 } });

    if (err && err.code === "authentication_required") {
      return res.status(402).json({
        error: "Authentication required for payment. Student must re-authenticate payment method.",
        stripe_error: err.raw ? err.raw.message : err.message
      });
    }

    return res.status(402).json({ error: "Payment failed", detail: err.message });
  }
};

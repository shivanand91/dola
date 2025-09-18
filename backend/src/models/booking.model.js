import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  libraryId: { type: mongoose.Schema.Types.ObjectId, ref: "Library", required: true },
  startTime: { type: Date },
  endTime: { type: Date },
  status: { type: String, enum: ["pending", "confirmed", "completed", "cancelled", "payment_failed"], default: "pending" },
  amountCharged: { type: Number, default: 0 } // in smallest currency unit (paisa)
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);

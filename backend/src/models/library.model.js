import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true } // [lng, lat]
  },
  description: String,
  hourlyRate: { type: Number, required: true }, // in rupees per hour (e.g. 50)
  totalSeats: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
  facilities: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

librarySchema.index({ location: "2dsphere" });

export default mongoose.model("Library", librarySchema);

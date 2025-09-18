import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone: {
    type: String
  },
  role: {
    type: String,
    enum: ["student", "admin"],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  stripeCustomerId: {
    type: String
  },
  defaultPaymentMethod: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);

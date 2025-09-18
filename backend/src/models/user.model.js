import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String },
  role: { type: String, enum: ["student", "admin"], required: true },
  password: { type: String, required: true },
  // Stripe fields to charge saved card
  stripeCustomerId: { type: String }, // set after creating customer in Stripe
  defaultPaymentMethod: { type: String } // payment method id (pm_...)
}, { timestamps: true });

export default mongoose.model("User", userSchema);

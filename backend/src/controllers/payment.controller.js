// Minimal example — flow:
// 1) client calls POST /api/payments/setup-intent
// 2) server creates Stripe Customer (if none) and SetupIntent and returns client_secret
// 3) client uses Stripe.js to confirm card and attaches payment method
// 4) client then calls POST /api/payments/attach with payment_method id to save it on server

import Stripe from "stripe";
import User from "../models/user.model.js";
import stripe from "../utils/stripe.js";

export const createSetupIntent = async (req, res) => {
  if (req.user.role !== "student") return res.status(403).json({ error: "Only students" });

  let customerId = req.user.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: req.user.email,
      name: req.user.name
    });
    customerId = customer.id;
    req.user.stripeCustomerId = customerId;
    await req.user.save();
  }

  const intent = await stripe.setupIntents.create({
    customer: customerId,
    usage: "off_session"
  });

  return res.json({ clientSecret: intent.client_secret });
};

export const attachPaymentMethod = async (req, res) => {
  const { paymentMethodId } = req.body;
  if (!paymentMethodId) return res.status(400).json({ error: "paymentMethodId required" });

  // Attach to customer
  await stripe.paymentMethods.attach(paymentMethodId, { customer: req.user.stripeCustomerId });

  // Set as default payment method for invoices/charges (optional)
  await stripe.customers.update(req.user.stripeCustomerId, {
    invoice_settings: { default_payment_method: paymentMethodId }
  });

  // Save locally
  req.user.defaultPaymentMethod = paymentMethodId;
  await req.user.save();

  return res.json({ message: "Payment method attached" });
};

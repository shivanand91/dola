import stripe from "../utils/stripe.js";
import User from "../models/user.model.js";

/**
 * Create SetupIntent -> return client_secret to client
 * Client will confirm card using Stripe.js and obtain paymentMethod.id
 */
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

  res.json({ clientSecret: intent.client_secret });
};

/**
 * Attach PaymentMethod to customer and save locally
 * client must send paymentMethodId obtained after confirming SetupIntent
 */
export const attachPaymentMethod = async (req, res) => {
  const { paymentMethodId } = req.body;
  if (!paymentMethodId) return res.status(400).json({ error: "paymentMethodId required" });

  if (!req.user.stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: req.user.email,
      name: req.user.name
    });
    req.user.stripeCustomerId = customer.id;
    await req.user.save();
  }

  // Attach to customer
  await stripe.paymentMethods.attach(paymentMethodId, { customer: req.user.stripeCustomerId });

  // Set default payment method for invoices
  await stripe.customers.update(req.user.stripeCustomerId, {
    invoice_settings: { default_payment_method: paymentMethodId }
  });

  req.user.defaultPaymentMethod = paymentMethodId;
  await req.user.save();

  res.json({ message: "Payment method attached" });
};

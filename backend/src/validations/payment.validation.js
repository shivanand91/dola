import Joi from "joi";

export const attachPaymentSchema = Joi.object({
  paymentMethodId: Joi.string().required()
});

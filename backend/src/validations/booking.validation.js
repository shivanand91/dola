import Joi from "joi";

export const checkInSchema = Joi.object({
  libraryId: Joi.string().required()
});

export const checkOutSchema = Joi.object({
  bookingId: Joi.string().required()
});

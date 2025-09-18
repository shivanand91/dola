import Joi from "joi";

export const createLibrarySchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  location: Joi.object({
    type: Joi.string().valid("Point").required(),
    coordinates: Joi.array().items(Joi.number()).length(2).required()
  }).required(),
  description: Joi.string().allow(""),
  hourlyRate: Joi.number().positive().required(),
  totalSeats: Joi.number().integer().min(1).required(),
  availableSeats: Joi.number().integer().min(0).required(),
  facilities: Joi.array().items(Joi.string()).optional()
});

export const updateLibrarySchema = Joi.object({
  name: Joi.string().optional(),
  address: Joi.string().optional(),
  description: Joi.string().allow("").optional(),
  hourlyRate: Joi.number().positive().optional(),
  totalSeats: Joi.number().integer().min(1).optional(),
  availableSeats: Joi.number().integer().min(0).optional(),
  facilities: Joi.array().items(Joi.string()).optional()
});

import express from "express";
import { checkIn, checkOut } from "../controllers/booking.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { checkInSchema, checkOutSchema } from "../validations/booking.validation.js";

const router = express.Router();

router.post("/checkin", authMiddleware, validate(checkInSchema), checkIn);
router.post("/checkout", authMiddleware, validate(checkOutSchema), checkOut);

export default router;

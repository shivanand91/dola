import express from "express";
import { createSetupIntent, attachPaymentMethod } from "../controllers/payment.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { attachPaymentSchema } from "../validations/payment.validation.js";

const router = express.Router();

router.post("/setup-intent", authMiddleware, createSetupIntent);
router.post("/attach", authMiddleware, validate(attachPaymentSchema), attachPaymentMethod);

export default router;

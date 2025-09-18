import express from "express";
import { checkIn, checkOut } from "../controllers/booking.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/checkin", authMiddleware, checkIn);
router.post("/checkout", authMiddleware, checkOut);

export default router;

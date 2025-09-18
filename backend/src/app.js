import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import bookingRoutes from "./routes/booking.routes.js";
// import paymentRoutes from "./routes/payment.routes.js"; // if added

dotenv.config();
await connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);
// app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => res.send("DOLA Backend up"));

export default app;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/database.js";
import packageRoutes from "../routes/packageRoutes.js";
import adminRoutes from "../routes/adminRoutes.js";
import inquiryRoutes from "../routes/inquiryRoutes.js";
import bookingRoutes from "../routes/bookingRoutes.js";
import settingsRoutes from "../routes/settingsRoutes.js";
import whatsappLeadRoutes from "../routes/whatsappLeadRoutes.js";

dotenv.config();

const app = express();

// CORS configuration for production
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      // Allow all vercel.app domains for preview deployments
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Connect to database
connectDB();

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ 
    status: "ok", 
    message: "Adhvaga Holidays API is running",
    timestamp: new Date().toISOString()
  });
});

app.get("/api", (req, res) => {
  res.json({ 
    status: "ok", 
    message: "Adhvaga Holidays API",
    version: "1.0.0"
  });
});

// API Routes
app.use("/api/admin", adminRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/whatsapp-leads", whatsappLeadRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Export for Vercel serverless
export default app;

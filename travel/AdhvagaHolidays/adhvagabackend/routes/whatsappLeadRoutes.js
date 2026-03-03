import express from "express";
import { jwtAuth } from "../middleware/jwtAuth.js";
import {
  createWhatsAppLead,
  getAllWhatsAppLeads,
  getWhatsAppLeadStats,
  updateWhatsAppLead,
  deleteWhatsAppLead
} from "../controllers/whatsappLeadController.js";

const router = express.Router();

// Public route - create lead when user accepts T&C
router.post("/", createWhatsAppLead);

// Admin routes - protected
router.get("/", jwtAuth, getAllWhatsAppLeads);
router.get("/stats", jwtAuth, getWhatsAppLeadStats);
router.put("/:id", jwtAuth, updateWhatsAppLead);
router.delete("/:id", jwtAuth, deleteWhatsAppLead);

export default router;

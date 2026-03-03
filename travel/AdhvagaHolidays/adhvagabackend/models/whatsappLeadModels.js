import mongoose from "mongoose";

const WhatsAppLeadSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: false 
  },
  termsAccepted: { 
    type: Boolean, 
    default: false,
    required: true
  },
  termsAcceptedAt: { 
    type: Date 
  },
  message: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    enum: ["pending", "contacted", "converted", "rejected"],
    default: "pending"
  },
  notes: {
    type: String,
    default: ""
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

export default mongoose.model("WhatsAppLead", WhatsAppLeadSchema);

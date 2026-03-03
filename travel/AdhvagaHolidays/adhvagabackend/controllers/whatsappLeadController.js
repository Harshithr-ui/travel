import WhatsAppLead from "../models/whatsappLeadModels.js";

// Create a new WhatsApp lead (public - when user accepts T&C)
export const createWhatsAppLead = async (req, res) => {
  try {
    const { name, phone, email, message, termsAccepted } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ message: "Name and phone are required" });
    }

    if (!termsAccepted) {
      return res.status(400).json({ message: "You must accept the terms and conditions" });
    }

    const lead = await WhatsAppLead.create({
      name,
      phone,
      email: email || "",
      message: message || "",
      termsAccepted: true,
      termsAcceptedAt: new Date(),
      status: "pending"
    });

    res.status(201).json({ 
      message: "Lead created successfully", 
      data: lead 
    });
  } catch (error) {
    console.error("Error creating WhatsApp lead:", error);
    res.status(500).json({ message: "Failed to create lead" });
  }
};

// Get all WhatsApp leads (admin only)
export const getAllWhatsAppLeads = async (req, res) => {
  try {
    const { status, termsAccepted, page = 1, limit = 20 } = req.query;
    
    const filter = {};
    if (status) filter.status = status;
    if (termsAccepted !== undefined) filter.termsAccepted = termsAccepted === 'true';

    const leads = await WhatsAppLead.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await WhatsAppLead.countDocuments(filter);

    res.status(200).json({
      data: leads,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching WhatsApp leads:", error);
    res.status(500).json({ message: "Failed to fetch leads" });
  }
};

// Get WhatsApp lead stats (admin only)
export const getWhatsAppLeadStats = async (req, res) => {
  try {
    const total = await WhatsAppLead.countDocuments();
    const accepted = await WhatsAppLead.countDocuments({ termsAccepted: true });
    const pending = await WhatsAppLead.countDocuments({ status: "pending" });
    const contacted = await WhatsAppLead.countDocuments({ status: "contacted" });
    const converted = await WhatsAppLead.countDocuments({ status: "converted" });

    res.status(200).json({
      total,
      accepted,
      pending,
      contacted,
      converted
    });
  } catch (error) {
    console.error("Error fetching lead stats:", error);
    res.status(500).json({ message: "Failed to fetch stats" });
  }
};

// Update WhatsApp lead status (admin only)
export const updateWhatsAppLead = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const lead = await WhatsAppLead.findById(id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    if (status) lead.status = status;
    if (notes !== undefined) lead.notes = notes;
    await lead.save();

    res.status(200).json({ 
      message: "Lead updated successfully", 
      data: lead 
    });
  } catch (error) {
    console.error("Error updating lead:", error);
    res.status(500).json({ message: "Failed to update lead" });
  }
};

// Delete WhatsApp lead (admin only)
export const deleteWhatsAppLead = async (req, res) => {
  try {
    const { id } = req.params;
    
    const lead = await WhatsAppLead.findByIdAndDelete(id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({ message: "Lead deleted successfully" });
  } catch (error) {
    console.error("Error deleting lead:", error);
    res.status(500).json({ message: "Failed to delete lead" });
  }
};

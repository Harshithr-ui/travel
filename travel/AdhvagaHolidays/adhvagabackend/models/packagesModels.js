import mongoose from "mongoose";

/* Sub-schema for itinerary */
const itinerarySchema = new mongoose.Schema(
  {
    day: Number,
    title: String,
    description: String,
  },
  { _id: false }
);

/* Sub-schema for hotel details by city */
const hotelDetailSchema = new mongoose.Schema(
  {
    city: String,
    hotelName: String,
    category: {
      type: String,
      enum: ["A", "B", "C"],
    },
    checkIn: String,
    checkOut: String,
    roomType: String,
    nights: Number,
  },
  { _id: false }
);

/* Sub-schema for hotel category pricing */
const hotelCategoryPricingSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["A", "B", "C"],
    },
    pricePerPerson: Number,
    description: String,
  },
  { _id: false }
);

const PackageSchema = new mongoose.Schema({
  /* ===== EXISTING FIELDS (UNCHANGED) ===== */

  title: {
    type: String
  },

  location: {
    type: String
  },

  destination: {
    type: String,
    required: true
  },
  tag:{
    type:String,
  },

  description: {
    type: String,
  },

  price: { 
    type: Number
  },

  duration: {
    type: String,
  },

  rating: {
    type: Number,
    default: 0
  },

  category: {
    type: String,
    enum: [
      "Domestic",
      "International",
      "Relaxation",
      "Cultural",
      "Adventure",
      "Luxury",
      "Family",
      "Transport"
    ],
    required: true
  },
  type:{
    type: String,
  },

 image: {
  type: String,
},

imageId: {
  type: String,
},

  availableSeats: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  /* ===== NEW FIELDS (SAFE ADDITIONS) ===== */

  packageId: {
    type: String,
    unique: true,
    sparse: true // allows old documents without this field
  },

  itinerary: {
    type: [itinerarySchema],
    default: []
  },

  highlights: {
    type: [String],
    default: []
  },

  includes: {
    type: [String],
    default: []
  },

  excludes: {
    type: [String],
    default: []
  },

  /* ===== ADMIN EDITABLE PACKAGE DETAILS ===== */

  // Duration breakdown (Days/Nights)
  durationDays: {
    type: Number,
    default: 0
  },

  durationNights: {
    type: Number,
    default: 0
  },

  // Travel Season / Validity
  travelSeason: {
    type: String,
    default: ""
  },

  validityStart: {
    type: Date
  },

  validityEnd: {
    type: Date
  },

  // Number of Guests
  minGuests: {
    type: Number,
    default: 1
  },

  maxGuests: {
    type: Number,
    default: 10
  },

  // Hotel Categories (A / B / C) with pricing
  hotelCategoryPricing: {
    type: [hotelCategoryPricingSchema],
    default: []
  },

  // City-wise Hotel Details
  hotelDetails: {
    type: [hotelDetailSchema],
    default: []
  },

  // Cancellation Policy
  cancellationPolicy: {
    type: [String],
    default: []
  },

  // Booking Policy
  bookingPolicy: {
    type: [String],
    default: []
  },

  // Important Notes
  importantNotes: {
    type: [String],
    default: []
  }
});

const Package = mongoose.model("Package", PackageSchema);
export default Package;

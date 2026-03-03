// Script to clear domestic packages and add new ones from PDFs
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Package Schema (same as in models/packagesModels.js)
const itinerarySchema = new mongoose.Schema(
  {
    day: Number,
    title: String,
    description: String,
  },
  { _id: false }
);

const PackageSchema = new mongoose.Schema({
  title: { type: String },
  location: { type: String },
  destination: { type: String, required: true },
  tag: { type: String },
  description: { type: String },
  price: { type: Number },
  duration: { type: String },
  rating: { type: Number, default: 0 },
  category: {
    type: String,
    enum: ["Domestic", "International", "Relaxation", "Cultural", "Adventure", "Luxury", "Family", "Transport"],
    required: true
  },
  type: { type: String },
  image: { type: String },
  imageId: { type: String },
  availableSeats: { type: Number },
  createdAt: { type: Date, default: Date.now },
  packageId: { type: String, unique: true, sparse: true },
  itinerary: { type: [itinerarySchema], default: [] },
  highlights: { type: [String], default: [] }
});

const Package = mongoose.model('Package', PackageSchema);

// New domestic packages from PDFs
const newDomesticPackages = [
  {
    title: "Kerala Explorer",
    destination: "Kerala",
    tag: "Bestseller",
    description: "Discover the enchanting beauty of God's Own Country with this 5 nights/6 days Kerala package. Visit Munnar's tea gardens, Thekkady's wildlife, Kumarakom's backwaters, and Kochi's historic sites.",
    price: 26200,
    duration: "5 Nights / 6 Days",
    rating: 4.8,
    category: "Relaxation",
    type: "Domestic",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    highlights: [
      "Munnar tea plantations & Eravikulam National Park",
      "Periyar Wildlife Sanctuary boat ride",
      "Kumarakom backwaters experience",
      "Kathakali dance performance in Kochi",
      "Chinese fishing nets & Jewish Synagogue visit"
    ],
    itinerary: [
      { day: 1, title: "Kochi to Munnar", description: "Arrive at Kochi Airport, visit Abhayaranyam elephant sanctuary, drive to Munnar (130 km / 4 hours). Overnight in Munnar." },
      { day: 2, title: "Munnar Sightseeing", description: "Explore Eravikulam National Park, Tea Museum, Mattupetty Dam, Eco Point and Flower Garden. Overnight in Munnar." },
      { day: 3, title: "Munnar to Thekkady", description: "Drive to Thekkady/Periyar (100 km / 3 hours). Visit Periyar National Park & Tiger Reserve. Enjoy a boat ride on the lake. Overnight in Thekkady." },
      { day: 4, title: "Thekkady to Kumarakom", description: "Transfer to Kumarakom (125 km / 3-4 hours). Explore the beautiful lagoons, canals and backwaters. Overnight at Kumarakom." },
      { day: 5, title: "Kumarakom to Kochi", description: "Drive to Kochi (50 km / 2 hours). City tour covering Mattancherry Palace, Jewish Synagogue, Chinese fishing nets, spices market and Kathakali Dance. Overnight in Kochi." },
      { day: 6, title: "Departure", description: "After breakfast, transfer to Cochin airport for your return journey." }
    ]
  },
  {
    title: "Kerala Grand Tour",
    destination: "Kerala",
    tag: "Premium",
    description: "Experience the complete Kerala journey with this comprehensive 7 nights/8 days package. From Kochi's heritage to Kovalam's beaches, explore every facet of God's Own Country including a day trip to Kanyakumari.",
    price: 37900,
    duration: "7 Nights / 8 Days",
    rating: 4.9,
    category: "Relaxation",
    type: "Domestic",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800",
    highlights: [
      "Complete Kerala circuit - Kochi to Trivandrum",
      "Munnar tea estates & Thekkady wildlife",
      "Kumarakom village life experience",
      "Kovalam beach stay",
      "Kanyakumari excursion - meeting of three seas",
      "Jatayu Earth's Center adventure"
    ],
    itinerary: [
      { day: 1, title: "Arrive at Kochi", description: "Arrive at Kochi Airport, transfer to hotel. Sightseeing of Fort Kochi, Jewish Synagogue, Dutch Palace, Chinese Fishing nets, St. Francis Church. Overnight at Kochi." },
      { day: 2, title: "Kochi to Munnar", description: "Drive to Munnar (130 km / 4 hours). Visit Abhayaranyam elephant sanctuary en route. Overnight in Munnar." },
      { day: 3, title: "Munnar Sightseeing", description: "Explore Eravikulam National Park, Tea Museum, Mattupetty Dam, Eco Point and Flower Garden. Overnight in Munnar." },
      { day: 4, title: "Munnar to Thekkady", description: "Drive to Thekkady (95 km / 3 hours). Visit Periyar National Park, boat ride, spice plantation tour. Overnight in Thekkady." },
      { day: 5, title: "Thekkady to Kumarakom", description: "Transfer to Kumarakom (125 km / 3.5 hours). Explore lagoons, canals and backwaters. Overnight at Kumarakom." },
      { day: 6, title: "Kumarakom to Kovalam", description: "Experience Aymanam Village life OR Jatayu Earth's Centre. Drive to Kovalam (180 km / 5 hours), famous beach destination. Overnight in Kovalam." },
      { day: 7, title: "Kanyakumari Excursion", description: "Full day trip to Kanyakumari - confluence of three oceans. Visit Kumari Amman Temple, Vivekananda Rock Memorial, Gandhi Memorial. Overnight at Kovalam." },
      { day: 8, title: "Departure", description: "Half-day Trivandrum sightseeing - Napier Museum, Shree Chitra Art Gallery, Kuthiramalika Palace. Transfer to Trivandrum airport." }
    ]
  },
  {
    title: "Gujarat Pilgrimage & Wildlife",
    destination: "Gujarat",
    tag: "Spiritual",
    description: "Embark on a divine journey through Gujarat with this 4 nights/5 days package. Visit sacred Dwarka, Somnath Jyotirlinga, and witness the majestic Asiatic lions at Gir National Park.",
    price: 24700,
    duration: "4 Nights / 5 Days",
    rating: 4.7,
    category: "Cultural",
    type: "Domestic",
    image: "https://images.unsplash.com/photo-1609947017136-05a6c8a4e686?w=800",
    highlights: [
      "Dwarka - Sacred Char Dham pilgrimage",
      "Bet Dwarka - Lord Krishna's original residence",
      "Nageshwar Jyotirlinga Temple",
      "Somnath Temple - One of 12 Jyotirlingas",
      "Gir National Park - Home of Asiatic Lions",
      "Porbandar - Birthplace of Mahatma Gandhi"
    ],
    itinerary: [
      { day: 1, title: "Rajkot to Dwarka", description: "Arrival at Rajkot, drive to Dwarka - one of the Char Dham pilgrimage sites. Check in at hotel. Overnight stay at Dwarka." },
      { day: 2, title: "Dwarka Sightseeing", description: "Visit Bet Dwarka (island believed to be Lord Krishna's residence) and Nageshwar Jyotirlinga. Return to Dwarka. Overnight stay." },
      { day: 3, title: "Dwarka to Somnath", description: "Drive to Porbandar - birthplace of Mahatma Gandhi. Visit Kirti Mandir. Continue to Somnath. Overnight stay at Somnath." },
      { day: 4, title: "Somnath to Sasan Gir", description: "Morning darshan at Somnath Temple (one of 12 Jyotirlingas). Drive to Sasan Gir - home of Asiatic lions. Check in at resort. Overnight stay." },
      { day: 5, title: "Departure", description: "Optional early morning jungle safari at Gir National Park (subject to permit). Transfer to Rajkot Airport for departure." }
    ]
  },
  {
    title: "Leh Ladakh Adventure",
    destination: "Leh Ladakh",
    tag: "Adventure",
    description: "Experience the breathtaking beauty of the Roof Top of the World with this 4 nights/5 days Ladakh package. Drive through world's highest passes, explore ancient monasteries, and witness the magical Pangong Lake.",
    price: 24800,
    duration: "4 Nights / 5 Days",
    rating: 4.9,
    category: "Adventure",
    type: "Domestic",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    highlights: [
      "Khardung La Pass - One of world's highest motorable roads",
      "Pangong Lake - Stunning high-altitude lake",
      "Nubra Valley with Bactrian camel rides",
      "Ancient monasteries - Thiksey, Spituk, Diskit",
      "Magnetic Hill phenomenon",
      "Sangam - Confluence of Indus & Zanskar rivers"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Leh", description: "Welcome to Ladakh! Transfer to hotel, rest for acclimatization. Evening visit to Shanti Stupa for panoramic views, stroll through Leh Market. Dinner and overnight stay." },
      { day: 2, title: "Leh Local Sightseeing", description: "Visit Shey Palace, Thiksey Monastery (giant Maitreya Buddha), Stok Palace Museum. After lunch: Hall of Fame, Spituk Monastery, Gurudwara Pathar Sahib, Magnetic Hill, Sangam. Overnight in Leh." },
      { day: 3, title: "Leh to Nubra Valley", description: "Drive to Nubra Valley via Khardung La Pass (18,380 ft). Visit Diskit Monastery, Maitreya Buddha statue. Explore Hunder Sand Dunes with optional Bactrian camel ride. Overnight at camp/hotel." },
      { day: 4, title: "Nubra to Pangong Lake to Leh", description: "Drive to Pangong Lake via Shyok River route. Enjoy the ever-changing shades of the lake on Indo-China border. Return to Leh via Chang La Pass. Dinner and overnight stay." },
      { day: 5, title: "Departure", description: "Early morning transfer to Leh Airport for your onward journey. End of memorable Ladakh trip." }
    ]
  }
];

async function seedDomesticPackages() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/adhvagadb');
    console.log('✅ Connected to MongoDB');

    // Delete all existing domestic packages
    const deleteResult = await Package.deleteMany({ type: 'Domestic' });
    console.log(`🗑️  Deleted ${deleteResult.deletedCount} existing domestic packages`);

    // Insert new packages
    const insertResult = await Package.insertMany(newDomesticPackages);
    console.log(`✅ Added ${insertResult.length} new domestic packages:`);
    insertResult.forEach(pkg => {
      console.log(`   - ${pkg.title} (${pkg.duration}) - ₹${pkg.price}`);
    });

    console.log('\n🎉 Domestic packages seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding packages:', error);
    process.exit(1);
  }
}

seedDomesticPackages();

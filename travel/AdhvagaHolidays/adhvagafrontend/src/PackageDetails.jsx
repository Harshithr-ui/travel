import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "./config/api";
import SEOHead from "./Components/SEO/SEOHead";
import { generatePackageMetadata, generateBreadcrumbSchema, generateTourPackageSchema } from "./utils/seoHelpers";
import "./PackageDetails.css";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: 1,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  /* ================= FETCH PACKAGE ================= */
  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/packages/${id}`);
        if (!res.ok) throw new Error("Package not found");
        const data = await res.json();
        setPkg(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [id]);

  // Generate SEO metadata when package is loaded
  const packageMetadata = pkg ? generatePackageMetadata(pkg) : null;
  const breadcrumbs = pkg ? [
    { name: "Home", url: "/home" },
    { name: pkg.category === "domestic" ? "Domestic" : "International", url: pkg.category === "domestic" ? "/domestic" : "/international" },
    { name: pkg.title, url: `/packages/${pkg._id}` }
  ] : [];

  /* ================= LOADING / ERROR ================= */
  if (loading) {
    return (
      <>
        <SEOHead
          title="Loading Package... | Adhvaga Holidays"
          description="Loading travel package details..."
          url={`/packages/${id}`}
        />
        <div className="pd-success">Loading package...</div>
      </>
    );
  }

  if (error || !pkg) {
    return (
      <>
        <SEOHead
          title="Package Not Found | Adhvaga Holidays"
          description="The requested travel package could not be found."
          url={`/packages/${id}`}
        />
        <div className="pd-success">
          <p>{error || "Package not found"}</p>
          <button onClick={() => navigate("/Packages")}>
            Back to Packages
          </button>
        </div>
      </>
    );
  }

  /* ================= FORM SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  /* ================= SUCCESS STATE ================= */
  if (isSubmitted) {
    return (
      <>
        <SEOHead
          title={`Booking Confirmed - ${pkg.title} | Adhvaga Holidays`}
          description={`Your booking request for ${pkg.title} has been received.`}
          url={`/packages/${id}`}
        />
        <div className="pd-success">
          <div className="pd-success-icon">✓</div>
          <h2>Booking Requested!</h2>
          <p>
            Thanks <strong>{formData.name}</strong>, we've received your request
            for the <strong>{pkg.title}</strong> package. Our travel experts at
            Adhvaga Holidays will contact you within 24 hours.
          </p>
          <button onClick={() => navigate("/Packages")}>
            Back to Explorer
          </button>
        </div>
      </>
    );
  }

  // Generate structured data for the package
  const tourSchema = generateTourPackageSchema({
    name: pkg.title,
    description: pkg.description || `${pkg.title} - ${pkg.duration} trip to ${pkg.destination}`,
    image: pkg.image,
    price: pkg.price
  });

  /* ================= MAIN UI (UNCHANGED) ================= */
  return (
    <>
      <SEOHead
        title={packageMetadata.title}
        description={packageMetadata.description}
        keywords={packageMetadata.keywords}
        url={`/packages/${pkg._id}`}
        image={packageMetadata.image}
        structuredData={[generateBreadcrumbSchema(breadcrumbs), tourSchema]}
      />
      <div className="pd-wrapper">
      {/* LEFT COLUMN */}
      <div className="pd-left">
        <button className="pd-back" onClick={() => navigate(-1)}>
          ← Back to Packages
        </button>

        <h1 className="pd-title">{pkg.title}</h1>

        <div className="pd-meta">
          <span className="pd-price">Avg. Cost: ₹{pkg.price}</span>
          <span className="pd-pill">⏱ {pkg.duration || `${pkg.durationDays || 0}D / ${pkg.durationNights || 0}N`}</span>
          <span className="pd-pill">📍 {pkg.destination}</span>
          {pkg.travelSeason && <span className="pd-pill">🌤 {pkg.travelSeason}</span>}
          {(pkg.minGuests || pkg.maxGuests) && (
            <span className="pd-pill">👥 {pkg.minGuests || 1} - {pkg.maxGuests || 10} Guests</span>
          )}
        </div>

        <img src={pkg.image} alt={pkg.title} className="pd-hero" />

        <section>
          <h2>Experience Overview</h2>
          <p>{pkg.destination}</p>
        </section>

        <section>
          <h2>Highlights</h2>
          <div className="pd-grid">
            {pkg.highlights?.map((h, i) => (
              <div key={i} className="pd-highlight">✔ {h}</div>
            ))}
          </div>
        </section>

        <section>
          <h2>The Journey</h2>
          <div className="pd-itinerary">
            {pkg.itinerary?.map((day) => (
              <div key={day.day} className="pd-day">
                <span>Day {day.day}</span>
                <h4>{day.title}</h4>
                <p>{day.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pd-two-col">
          <div>
            <h3>Inclusions</h3>
            <ul>
              {pkg.includes?.map((i, idx) => (
                <li key={idx}>🟢 {i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Exclusions</h3>
            <ul>
              {pkg.excludes?.map((i, idx) => (
                <li key={idx}>🔴 {i}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hotel Category Pricing */}
        {pkg.hotelCategoryPricing?.length > 0 && (
          <section className="pd-section">
            <h2>Hotel Categories & Pricing</h2>
            <div className="pd-hotel-pricing">
              {pkg.hotelCategoryPricing.map((cat, idx) => (
                <div key={idx} className="pd-pricing-card">
                  <div className="pd-pricing-header">Category {cat.category}</div>
                  <div className="pd-pricing-price">₹{cat.pricePerPerson} <span>per person</span></div>
                  {cat.description && <div className="pd-pricing-desc">{cat.description}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* City-wise Hotel Details */}
        {pkg.hotelDetails?.length > 0 && (
          <section className="pd-section">
            <h2>Hotel Details</h2>
            <div className="pd-hotel-details">
              {pkg.hotelDetails.map((hotel, idx) => (
                <div key={idx} className="pd-hotel-card">
                  <div className="pd-hotel-city">{hotel.city}</div>
                  <div className="pd-hotel-name">{hotel.hotelName}</div>
                  <div className="pd-hotel-info">
                    <span>Category {hotel.category}</span>
                    {hotel.roomType && <span>{hotel.roomType}</span>}
                    {hotel.nights && <span>{hotel.nights} Night(s)</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cancellation Policy */}
        {pkg.cancellationPolicy?.length > 0 && (
          <section className="pd-section">
            <h2>Cancellation Policy</h2>
            <ul className="pd-policy-list">
              {pkg.cancellationPolicy.map((item, idx) => (
                <li key={idx}>⚠️ {item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Booking Policy */}
        {pkg.bookingPolicy?.length > 0 && (
          <section className="pd-section">
            <h2>Booking Policy</h2>
            <ul className="pd-policy-list">
              {pkg.bookingPolicy.map((item, idx) => (
                <li key={idx}>📋 {item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Important Notes */}
        {pkg.importantNotes?.length > 0 && (
          <section className="pd-section pd-notes">
            <h2>Important Notes</h2>
            <ul className="pd-policy-list">
              {pkg.importantNotes.map((item, idx) => (
                <li key={idx}>ℹ️ {item}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* RIGHT COLUMN */}
      <div className="pd-right">
        <div className="pd-sticky">
        <div className="pd-booking">
          <h3>Book This Trip</h3>
          <p>Personalized travel planning with Adhvaga.</p>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <div className="pd-form-row">
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              <input
                type="number"
                min="1"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    guests: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="pd-total">
              <span>Total Price Approx.</span>
              <strong>₹{pkg.price * formData.guests}</strong>
            </div>

            <button type="submit">Confirm Booking →</button>
          </form>
        </div>

        <div className="pd-help">
          <div>
            <small>Need Help?</small>
            <strong>24/7 Concierge</strong>
          </div>
          <button>📞</button>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PackageDetails;

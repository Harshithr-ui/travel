import React from "react";
import "./Services.css";

const SERVICES = [
  {
    id: 1,
    icon: "✈️",
    title: "Flight Bookings",
    description: "Domestic & international flights with competitive fares and flexible booking options."
  },
  {
    id: 2,
    icon: "🏨",
    title: "Hotel Reservations",
    description: "Wide range of hotels from budget to luxury. Reliable bookings & transparent pricing."
  },
  {
    id: 3,
    icon: "🌴",
    title: "Holiday Packages",
    description: "Customized packages for leisure, family vacations & adventures. Stress-free planning."
  },
  {
    id: 4,
    icon: "🛂",
    title: "Visa Assistance",
    description: "Professional guidance & documentation support for multiple destinations."
  },
  {
    id: 5,
    icon: "🛡️",
    title: "Travel Insurance",
    description: "Comprehensive coverage for medical emergencies, trip delays & unforeseen events."
  },
  {
    id: 6,
    icon: "🚗",
    title: "Transport Services",
    description: "Airport transfers, car rentals & local transportation for seamless travel."
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-brand">Adhvaga Holidays Inc</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-card-bg"></div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

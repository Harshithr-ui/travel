import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const serviceNumber = String(index + 1).padStart(2, '0');

  return (
    <div className={`service-card ${isEven ? "row-normal" : "row-reverse"}`}>
      {/* Decorative Elements */}
      <div className="service-card-deco">
        <div className="deco-circle deco-circle-1"></div>
        <div className="deco-circle deco-circle-2"></div>
        <div className="deco-line"></div>
      </div>

      {/* Number Badge */}
      <div className="service-number">{serviceNumber}</div>

      {/* Image Section */}
      <div className="image-wrapper">
        <div className="image-container">
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
          <div className="image-overlay"></div>

          {/* Floating Icon */}
          <div className="floating-icon">
            <i className={`fa-solid ${service.icon}`}></i>
          </div>

          {/* Glass Badge */}
          <div className="glass-badge">
            <span className="badge-dot"></span>
            <span>Premium Service</span>
          </div>
        </div>

        {/* Decorative Frame */}
        <div className="image-frame"></div>
      </div>

      {/* Content Section */}
      <div className="content-wrapper">
        <div className="content-header">
          <div className="icon-ring">
            <div className="icon-ring-inner">
              <i className={`fa-solid ${service.icon}`}></i>
            </div>
          </div>
          <div className="title-group">
            <span className="service-label">Service</span>
            <h2 className="service-title">{service.title}</h2>
          </div>
        </div>

        <p className="service-description">{service.description}</p>

        <ul className="features-list">
          {service.features.map((feature, idx) => (
            <li key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
              <span className="feature-number">{String(idx + 1).padStart(2, '0')}</span>
              <span className="feature-text">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="button-group">
          <button className="btn-primary">
            <span className="btn-bg"></span>
            <span className="btn-text">
              Enquire Now
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>

          <button className="btn-secondary">
            <span>Learn More</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>

        {/* Accent Line */}
        <div className="content-accent"></div>
      </div>
    </div>
  );
};

export default ServiceCard;

import React, { useState } from 'react';
import { useSettings } from '../../context/SettingsContext';
import WhatsAppModal from './WhatsAppModal';
import './SupportCenter.css';

const SupportCenter = () => {
  const { settings } = useSettings();
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <section className="support-hero">
      {/* Abstract plane trail patterns */}
      <div className="abstract-background">
        <svg className="trail-svg" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="150" fill="none" stroke="black" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M50,200 Q200,50 350,200" fill="none" stroke="black" strokeWidth="2" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="container">
        <div className="content-wrapper">
          <span className="badge">
            Support Center
          </span>
          <h1 className="hero-title">
            We're here to guide your <span className="underline-text">journey</span>.
          </h1>
          <p className="hero-description">
            From booking your dream escape to handling the unexpected details, our concierge team is always by your side.
          </p>
          
          <div className="contact-grid">
            <a href={`tel:${settings.contactNumber}`} className="contact-card">
              <div className="card-icon">📞</div>
              <div className="card-title">Call Us</div>
              <div className="card-detail">{settings.contactNumber}</div>
            </a>
            
            <button onClick={() => setShowWhatsAppModal(true)} className="contact-card whatsapp-card">
              <div className="card-icon">💬</div>
              <div className="card-title">WhatsApp</div>
              <div className="card-detail">Chat with us instantly</div>
            </button>
            
            <a href={`mailto:${settings.email}`} className="contact-card">
              <div className="card-icon">✉️</div>
              <div className="card-title">Email Us</div>
              <div className="card-detail">{settings.email}</div>
            </a>
            
            <div className="contact-card">
              <div className="card-icon">📍</div>
              <div className="card-title">Our Office</div>
              <div className="card-detail">{settings.address}</div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppModal 
        isOpen={showWhatsAppModal} 
        onClose={() => setShowWhatsAppModal(false)} 
      />
    </section>
  );
};

export default SupportCenter;
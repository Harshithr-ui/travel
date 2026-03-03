import React from "react";
import { ScrollReveal } from "../includes/ScrollAnimations";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <ScrollReveal animation="fade-up">
          <div className="about-us-header">
            <h2 className="about-us-title">About Us</h2>
            <p className="about-us-brand">Adhvaga Holidays</p>
          </div>
        </ScrollReveal>

        <div className="about-us-content">
          <ScrollReveal animation="fade-right" delay={100}>
            <p className="about-us-paragraph">
              At Adhvaga Holidays, we believe travel should be seamless, reliable, and memorable. 
              We are a professional travel company dedicated to delivering end-to-end travel solutions 
              for individuals, families, and corporate clients.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={200}>
            <p className="about-us-paragraph">
              With a strong focus on transparency, customer satisfaction, and personalized service, 
              we specialize in flight bookings, hotel reservations, holiday packages, visa assistance, 
              and travel-related services. Our experienced team works closely with trusted global partners 
              to ensure smooth planning and dependable execution at every stage of your journey.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={300}>
            <p className="about-us-paragraph">
              We understand that every traveler is unique. That's why we tailor our services to match 
              your needs—whether it's a leisure holiday, business travel, family vacation, or international tour. 
              From planning to post-travel support, we are committed to making your experience stress-free 
              and well-organized.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={400}>
            <p className="about-us-paragraph">
              At Adhvaga Holidays, integrity, professionalism, and customer trust are at the heart of 
              everything we do.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={500}>
            <p className="about-us-tagline">
              Travel with confidence. Travel with Adhvaga Holidays.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

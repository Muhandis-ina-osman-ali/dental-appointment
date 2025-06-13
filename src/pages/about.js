import React from "react";
import "./about.css";
import aboutImg from "./assets/about.jpg";

// Images for services
import cleanIcon from "./assets/cleaning.png";
import fillIcon from "./assets/filling.png";
import extractIcon from "./assets/extraction.png";
import braceIcon from "./assets/braces.png";
import emergencyIcon from "./assets/emergency.png";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-left">
          <img src={aboutImg} alt="Dental care" />
        </div>
        <div className="about-right">
          <h2>Welcome to Our Dental Network</h2>
          <p>
            In Mogadishu, patients faced many challenges when trying to book appointments across different dental clinics.
            Whether it was Makka Dental, Alfuraat Dental, or Mega Dental, the process was slow and confusing.
            Our platform changes that completely.
          </p>
          <p>
            Now you can easily find, book, and manage appointments at any of our partner branches in seconds.
            We aim to bring organization, clarity, and speed to your dental care journey.
          </p>
        </div>
      </div>

      <div className="about-values">
        <div className="value-box">
          <h3>Our Mission</h3>
          <p>To simplify dental bookings across all branches in Mogadishu.</p>
        </div>
        <div className="value-box">
          <h3>Our Values</h3>
          <p>Trust, Care, Technology, and Accessibility for every patient.</p>
        </div>
        <div className="value-box">
          <h3>Core Values</h3>
          <p>Excellence, Compassion, and Community-driven service.</p>
        </div>
      </div>

      <div className="services-section">
        <h2 className="service-heading">Our Dental Services</h2>
        <div className="services-list">
          <div className="service-card">
            <img src={cleanIcon} alt="Teeth Cleaning" />
            <p>Teeth Cleaning</p>
          </div>
          <div className="service-card">
            <img src={fillIcon} alt="Cavity Filling" />
            <p>Cavity Filling</p>
          </div>
          <div className="service-card">
            <img src={extractIcon} alt="Tooth Extraction" />
            <p>Tooth Extraction</p>
          </div>
          <div className="service-card">
            <img src={braceIcon} alt="Braces" />
            <p>Braces & Ortho</p>
          </div>
          <div className="service-card">
            <img src={emergencyIcon} alt="Emergency Care" />
            <p>Emergency Care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

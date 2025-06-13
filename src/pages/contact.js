import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your full name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email address" />

            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Type your message..." />

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>📍 Address:</strong> KM4 Hodan, Mogadishu, Somalia</p>
          <p><strong>📞 Phone:</strong> +252 61 2345678</p>
          <p><strong>✉️ Email:</strong> info@dentalclinics.so</p>
          <p><strong>🕒 Working Hours:</strong> Sat - Thu: 8AM - 6PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Get in Touch</h2>
      <p>We’d love to hear from you. Please fill out the form below.</p>

      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Write your message here..."></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </div>

      <div className="contact-info">
        <div className="phone">
          <i className="fas fa-phone"></i>
          <p>+919452900378</p>
        </div>
        <div className="email">
          <i className="fas fa-envelope"></i>
          <p>leptoptz@gmail.com</p>
        </div>
        <div className="address">
          <i className="fas fa-map-marker-alt"></i>
          <p>Uttar-Pradesh, Barabanki, 225001</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

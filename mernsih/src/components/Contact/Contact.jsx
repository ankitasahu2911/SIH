import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>For any inquiries or feedback, please feel free to reach out to us.</p>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>

          <button type="submit" className="contact-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

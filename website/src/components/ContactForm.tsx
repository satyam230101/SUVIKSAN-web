import React from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form">
      <input type="text" placeholder="Name *" required />
      <input type="email" placeholder="Email *" required />
      <input type="tel" placeholder="Phone *" required />
      <select required defaultValue="">
        <option value="" disabled>Select Services</option>
        <option value="data-analytics">Data Analytics</option>
        <option value="cyber-security">Cyber Security</option>
        <option value="data-security">Data Security</option>
        <option value="cloud">Cloud</option>
        <option value="it-outsourcing">IT Outsourcing</option>
      </select>
      <textarea placeholder="Message" rows={5}></textarea>
      <button type="button">Send Message</button>
    </div>
  );
};

export default ContactForm; 
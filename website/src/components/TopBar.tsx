import React from 'react';
import './TopBar.css';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="contact-info">
          <a href="tel:+917992281130" className="phone-link">
            <i className="fas fa-phone"></i> +91 7992281130
          </a>
          <span className="separator">|</span>
          <a href="mailto:info@suviksan.com" className="email-link">
            <i className="fas fa-envelope"></i> info@suviksan.com
          </a>
        </div>
        <div className="social-links">
          Follow Us :
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>About Us</h3>
            <p>Suviksan technologies is your trusted partner for innovative IT solutions and business transformation.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Data Analytics</a></li>
              <li><a href="#">Cyber Security</a></li>
              <li><a href="#">Data Security</a></li>
              <li><a href="#">Cloud</a></li>
              <li><a href="#">IT Outsourcing</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Our Clients</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p className="address">
              Corporate Office : Unit No.: 1006, ATS Bouquet NOIDA - 201305, Uttar Pradesh Bharat (India)
            </p>
            <p><strong>Email:</strong> info@suviksan.com</p>
            <p><strong>Phone:</strong> +91 7992281130</p>
            
            <div className="social-links">
              <h4>Follow Us :</h4>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Copyright 2025 Suviksan technologies | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
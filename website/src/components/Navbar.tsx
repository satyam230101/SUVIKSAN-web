import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">SUVIKSAN</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>HOME</NavLink>
        <div 
          className="dropdown" 
          onMouseEnter={() => setAboutDropdown(true)} 
          onMouseLeave={() => setAboutDropdown(false)}
        >
          <span className="dropdown-title">ABOUT US <span className="dropdown-arrow">&#9662;</span></span>
          {aboutDropdown && (
            <div className="dropdown-menu">
              <NavLink to="/team">Our Team</NavLink>
              <NavLink to="/clients">Our Clients</NavLink>
            </div>
          )}
        </div>
        <div 
          className="dropdown" 
          onMouseEnter={() => setServicesDropdown(true)} 
          onMouseLeave={() => setServicesDropdown(false)}
        >
          <span className="dropdown-title">OUR SERVICES <span className="dropdown-arrow">&#9662;</span></span>
          {servicesDropdown && (
            <div className="dropdown-menu">
              <NavLink to="/services/data-analytics">Data Analytics</NavLink>
              <NavLink to="/services/cyber-security">Cyber Security</NavLink>
              <NavLink to="/services/data-security">Data Security</NavLink>
              <NavLink to="/services/cloud">Cloud</NavLink>
              <NavLink to="/services/it-outsourcing">IT Outsourcing</NavLink>
            </div>
          )}
        </div>
        <NavLink to="/career">CAREER</NavLink>
        <NavLink to="/gallery">GALLERY</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
      </div>
    </nav>
  );
};

export default Navbar; 
import React from 'react';
import './Hero.css';

const features = [
  {
    title: 'Best IT Services',
    description: 'Proven track record of successful IT Services delivered.',
    icon: <img src={process.env.PUBLIC_URL + '/feature-it.svg'} alt="IT Services" className="feature-svg" />,
  },
  {
    title: 'Highly Dedicated',
    description: 'Our professionals exhibit unwavering commitment to client success.',
    icon: <img src={process.env.PUBLIC_URL + '/feature-dedicated.svg'} alt="Dedicated" className="feature-svg" />,
  },
];

const CompanyInfo: React.FC = () => (
  <section className="company-section">
    <div className="company-left">
      <h1 className="company-title">Suviksan Technologies</h1>
      <p className="company-description">
        Suviksan technologies is a leading technology consulting and services company focused on creating innovative solutions that address clients' most complex digital transformation needs. With over 3+ years of experience managing global business systems and operations, we expertly lead clients in over 5 countries. Our operations are the company's largest globally and employ high-caliber technology professionals focused on helping clients address their core challenges and seize market opportunities.
      </p>
      <div className="features-row">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-group">
        <button className="hero-button outline">EXPLORE MORE</button>
        <button className="hero-button solid">CONTACT US</button>
      </div>
    </div>
    <div className="company-right">
      <div className="company-image-wrapper">
        <img src={process.env.PUBLIC_URL + '/office-bg.jpg'} alt="Office" className="company-image" />
        <div className="years-overlay">
          <span className="years-main">3+ Years</span>
          <span className="years-sub">Experience</span>
        </div>
      </div>
    </div>
  </section>
);

export default CompanyInfo; 
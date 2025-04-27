import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Data Security',
    image: '/services/data-security-bg.jpg',
    description: 'Protecting your valuable data with advanced security solutions.'
  },
  {
    title: 'IT Outsourcing',
    image: '/services/it-outsourcing-bg.jpg',
    description: 'Professional IT services tailored to your business needs.'
  },
  {
    title: 'Data Analytics',
    image: '/services/data-analytics-bg.jpg',
    description: 'Transform your data into actionable insights.'
  },
  {
    title: 'Cyber Security',
    image: '/services/cyber-security-bg.jpg',
    description: 'Comprehensive protection against cyber threats.'
  }
];

const clients = [
  { image: '/client/client1.jpg', name: 'Client 1' },
  { image: '/client/client2.jpg', name: 'Client 2' },
  { image: '/client/client3.jpg', name: 'Client 3' },
  { image: '/client/client4.jpg', name: 'Client 4' },
  { image: '/client/client5.jpg', name: 'Client 5' }
];

const Home: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentClient, setCurrentClient] = useState(0);
  const [isAutoPlayingService, setIsAutoPlayingService] = useState(true);
  const [isAutoPlayingClient, setIsAutoPlayingClient] = useState(true);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextClient = () => {
    setCurrentClient((prev) => (prev + 1) % clients.length);
  };

  const prevClient = () => {
    setCurrentClient((prev) => (prev - 1 + clients.length) % clients.length);
  };

  // Auto-play for services
  useEffect(() => {
    let slideInterval: NodeJS.Timeout;
    
    if (isAutoPlayingService) {
      slideInterval = setInterval(() => {
        nextService();
      }, 5000);
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isAutoPlayingService]);

  // Auto-play for clients
  useEffect(() => {
    let slideInterval: NodeJS.Timeout;
    
    if (isAutoPlayingClient) {
      slideInterval = setInterval(() => {
        nextClient();
      }, 3000); // Faster rotation for clients
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isAutoPlayingClient]);

  return (
    <div className="home-container">
      <Hero />
      
      <div className="services-content">
        <h2 className="services-title">OUR SERVICES</h2>
        <p className="services-subtitle">IT Solutions, Right at Your Fingertips</p>
        
        <div 
          className="services-slider"
          onMouseEnter={() => setIsAutoPlayingService(false)}
          onMouseLeave={() => setIsAutoPlayingService(true)}
        >
          <button className="slider-arrow prev" onClick={prevService}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="services-slides">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-slide ${index === currentService ? 'active' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${process.env.PUBLIC_URL + service.image})`
                }}
              >
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-arrow next" onClick={nextService}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="service-indicators">
          {services.map((_, index) => (
            <button
              key={index}
              className={`service-indicator ${index === currentService ? 'active' : ''}`}
              onClick={() => setCurrentService(index)}
            />
          ))}
        </div>
      </div>

      <div className="clients-content">
        <h2 className="clients-title">Our Clients</h2>
        <p className="clients-description">
          Our collaborations span over many countries, where we've addressed diverse challenges with tailored strategies, 
          helping our clients achieve success and growth.
        </p>

        <div 
          className="clients-slider"
          onMouseEnter={() => setIsAutoPlayingClient(false)}
          onMouseLeave={() => setIsAutoPlayingClient(true)}
        >
          <button className="slider-arrow prev" onClick={prevClient}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="clients-slides">
            {clients.map((client, index) => (
              <div 
                key={index}
                className={`client-slide ${index === currentClient ? 'active' : ''}`}
              >
                <img 
                  src={process.env.PUBLIC_URL + client.image} 
                  alt={client.name}
                  className="client-image"
                />
              </div>
            ))}
          </div>

          <button className="slider-arrow next" onClick={nextClient}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="client-indicators">
          {clients.map((_, index) => (
            <button
              key={index}
              className={`client-indicator ${index === currentClient ? 'active' : ''}`}
              onClick={() => setCurrentClient(index)}
            />
          ))}
        </div>
      </div>

      <div className="stats-content">
        <div className="stats-text">
          <p>Through logical corporate security procedures, we guarantee the integrity, confidentiality, and safety of your data.</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">
              <span className="counter">5</span>
              <span className="plus">+</span>
            </div>
            <div className="stat-label">Countries</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              <span className="counter">100</span>
              <span className="plus">+</span>
            </div>
            <div className="stat-label">Employees</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              <span className="counter">40</span>
              <span className="plus">+</span>
            </div>
            <div className="stat-label">Professionals</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              <span className="counter">3</span>
              <span className="plus">+</span>
            </div>
            <div className="stat-label">Yrs Of Experience</div>
          </div>
        </div>
      </div>

      <div className="experience-content">
        <h2 className="experience-title">Experience</h2>
        
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-header">
              <h3>Business Setup</h3>
              <span className="percentage">100%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <h3>IT & Software</h3>
              <span className="percentage">80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <h3>Corporate Advisory</h3>
              <span className="percentage">70%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <h3>Audit & Assurance</h3>
              <span className="percentage">80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-content">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <p className="info-text">
                Suviksan is a highly results-oriented company that offers personalized, more efficient and cost-effective cybersecurity services in Germany, Sweden and the Philippines.
              </p>
              <p className="info-text">
                We're obsessed with discovering the experts who can transform your business and help you fuel life-changing work. Suviksan is your trusted talent partner, dedicated to understanding your unique challenges and objectives to provide flexible workforce solutions that help your business thrive.
              </p>
            </div>
            
            <div className="contact-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Name *" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email *" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone *" required />
                </div>
                <div className="form-group">
                  <select 
                    required 
                    defaultValue=""
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      borderRadius: '5px',
                      border: '1px solid #ddd',
                      backgroundColor: '#fff',
                      fontSize: '16px',
                      color: '#333',
                      cursor: 'pointer',
                      appearance: 'none',
                      backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 15px top 50%',
                      backgroundSize: '12px auto'
                    }}
                  >
                    <option value="" disabled style={{ color: '#666' }}>Select Services</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="cyber-security">Cyber Security</option>
                    <option value="data-security">Data Security</option>
                    <option value="cloud">Cloud</option>
                    <option value="it-outsourcing">IT Outsourcing</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Message" 
                    rows={10} 
                    style={{ 
                      width: '100%',
                      minHeight: '200px',
                      padding: '15px',
                      borderRadius: '5px',
                      border: '1px solid #ddd',
                      backgroundColor: '#fff',
                      fontSize: '16px',
                      color: '#333',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      lineHeight: '1.5',
                      transition: 'border-color 0.3s ease',
                    }}
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home; 
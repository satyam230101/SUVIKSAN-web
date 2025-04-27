import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About SUVIKSAN</h1>
      <div className="about-content">
        <section>
          <h2>Our Vision</h2>
          <p>To be a leading institution in providing quality education and fostering innovation.</p>
        </section>
        
        <section>
          <h2>Our Mission</h2>
          <p>To empower students with knowledge, skills, and values that enable them to contribute meaningfully to society.</p>
        </section>

        <section>
          <h2>Core Values</h2>
          <ul>
            <li>Excellence in Education</li>
            <li>Innovation and Research</li>
            <li>Integrity and Ethics</li>
            <li>Student-Centered Learning</li>
            <li>Community Engagement</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About; 
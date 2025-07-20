import React from 'react';
import '../assets/CSS/WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-left">
          <div className="img-wrapper">
            <img
              src="https://t4.ftcdn.net/jpg/13/52/10/13/360_F_1352101361_XDHeaC7AKUI4FZDrHeQW9MynmmIngvu7.jpg"
              
              alt="Happy Couple"
              className="why-image"
            />
            <div className="overlay-card">
              <h3>Tekisky</h3>
              <p>Best Muslim Marriage Bureau in India</p>
            </div>
          </div>
        </div>

        <div className="why-right">
          <h2>Why Choose Us</h2>
          <p className="why-subtext">
            We help you find the right match while respecting privacy, tradition, and trust.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">👤</div>
              <h4>Expert RM Guidance</h4>
              <p>Our team of experienced relationship managers supports you at every step.</p>
            </div>

            <div className="feature-card">
              <div className="icon">❤️</div>
              <h4>Personalized Matchmaking</h4>
              <p>We tailor matches based on your preferences and values.</p>
            </div>

            <div className="feature-card">
              <div className="icon">🔒</div>
              <h4>Secure & Confidential</h4>
              <p>All profiles are verified and your information is kept private.</p>
            </div>

            <div className="feature-card">
              <div className="icon">👥</div>
              <h4>Community & Compatibility</h4>
              <p>We connect individuals with shared cultural and religious values.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

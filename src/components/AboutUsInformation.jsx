import React from 'react';
import '../assets/CSS/AboutUsInformation.css';

const AboutUsInformation = () => {
  return (
    <div className="about-us-container">
      <div className="about-header">
        <h1>Best Muslim Matrimony in India</h1>
        <p>Helping Muslims find their ideal life partners with faith, respect, and integrity.</p>
      </div>

      <div className="about-section">
        <h2>What We Do</h2>
        <p>
          At Tekisky, we provide a comprehensive and halal platform designed to help Muslims find their ideal life partners.
          Our services are grounded in Islamic principles, ensuring that every step respects and upholds the values of faith and respect.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Comprehensive Matchmaking</h3>
          <p>
            Personalized services with experienced relationship managers to ensure meaningful and compatible matches.
          </p>
        </div>
        <div className="about-card">
          <h3>Verified Profiles</h3>
          <p>
            Your safety is our priority. All profiles are thoroughly verified to maintain a safe environment.
          </p>
        </div>
        <div className="about-card">
          <h3>Advanced Search</h3>
          <p>
            Find ideal matches using filters based on values, background, and lifestyle.
          </p>
        </div>
        <div className="about-card">
          <h3>Personalized Guidance</h3>
          <p>
            Get full support from our team from profile creation to final matchmaking.
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2>Why Tekisky Matrimony</h2>
        <ul>
          <li><strong>Personalized Matchmaking:</strong> Tailored to your preferences with expert support.</li>
          <li><strong>Secure & Confidential:</strong> Verified profiles and strict privacy policies.</li>
          <li><strong>Expert Guidance:</strong> Advice at every stage of your journey.</li>
          <li><strong>Community & Compatibility:</strong> Culturally and religiously aligned matches.</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          At Tekisky, we are a dedicated team helping Muslims find life partners through a halal and respectful process.
          We are committed to strong Islamic values: <strong>faith, integrity, and respect</strong>.
        </p>
        <p>
          Our platform is secure and verified. We use smart algorithms to connect people based on compatibility, culture, and faith.
        </p>
        <p>
          Join Tekisky and take the first step towards a blessed and beautiful future, rooted in Quran and Sunnah.
        </p>
      </div>
    </div>
  );
};

export default AboutUsInformation;

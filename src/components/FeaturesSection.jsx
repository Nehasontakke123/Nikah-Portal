import React from "react";
import "../assets/CSS/FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <p className="small-heading">MORE THAN 25 YEARS OF</p>
        <h2 className="main-heading">
          Bringing People <span className="highlight">Together</span>
        </h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-circle">🕌</div>
            <h3>100% Halal Profiles</h3>
            <p>
              Search by sect, city, family values, and more —
              all profiles verified for Islamic compatibility.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-circle">✅</div>
            <h3>Verified by Imam Visits</h3>
            <p>
              Listings verified by local Imams and community leaders
              for authentic and genuine matchmaking.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-circle">🔒</div>
            <h3>Privacy First</h3>
            <p>
              Your details are protected. Photos and contact
              information are visible only with your consent.
            </p>
          </div>
        </div>
      </div>

      <div className="app-benefits-section">
  <h2>Why Choose the NikahNamah App?</h2>
  <p>Designed for modern Muslims with faith, values & trust in mind</p>

  <div className="benefits-grid">
    <div className="benefit-card">
      <div className="benefit-icon">📱</div>
      <h4>Simplified Mobile Nikah</h4>
      <p>Experience seamless browsing, chatting & Nikah proposals on mobile.</p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">🤝</div>
      <h4>Family-First Interface</h4>
      <p>Parents & elders can participate in match preferences & approvals.</p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">🧕</div>
      <h4>Hijab-Friendly Privacy</h4>
      <p>Control over photos, contact info & visibility for sisters & families.</p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">📿</div>
      <h4>Faith-Based Matchmaking</h4>
      <p>Get matched based on Deen level, prayer habits, mahr preferences & more.</p>
    </div>
  </div>
</div>

      
    </section>
  );
};

export default FeaturesSection;

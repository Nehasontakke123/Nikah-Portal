import React from "react";
import "../assets/CSS/FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <p className="small-heading">OVER 25 YEARS OF</p>
        <h2 className="main-heading">
          Trusted <span className="highlight">Muslim Matchmaking</span>
        </h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-circle">🕌</div>
            <h3>Verified Muslim Profiles</h3>
            <p>
              All profiles are manually reviewed to ensure authenticity, values, and serious intent for marriage.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-circle">📜</div>
            <h3>Faith & Family Aligned</h3>
            <p>
              Match based on beliefs, family background, prayer habits, and values that matter to you.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-circle">🔐</div>
            <h3>Privacy with Respect</h3>
            <p>
              Your personal information is safe. Control who can see your photos and details at every step.
            </p>
          </div>
        </div>
      </div>

      <div className="app-benefits-section">
        <h2>Why Choose the NikahNamah App?</h2>
        <p>Built for modern Muslims who value family, trust, and faith</p>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">📱</div>
            <h4>Smooth Mobile Experience</h4>
            <p>Browse, connect, and send proposals on-the-go with full convenience and control.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">👪</div>
            <h4>Family Involvement</h4>
            <p>Invite parents or guardians to participate in the journey for added trust and comfort.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🧕</div>
            <h4>Respect for Modesty</h4>
            <p>Sisters can stay in control of who views their profile, respecting boundaries and privacy.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">📿</div>
            <h4>Faith-Centered Matching</h4>
            <p>Connect with matches who share your values, religious practices, and future goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

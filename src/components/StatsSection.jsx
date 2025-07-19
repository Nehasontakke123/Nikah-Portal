import React from "react";
import "../assets/CSS/StatsSection.css";

const StatsSection = () => {
  const stats = [
    { count: "96,461+", label: "Total Members" },
    { count: "78,700+", label: "Verified Profiles" },
    { count: "86,000+", label: "Nikah Completed" },
  ];

  return (
    <section className="stats-section">
      {/* 💖 Global Heart Shower Background */}
      <div className="global-heart-shower-wrapper">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="global-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          >
            💕
          </span>
        ))}
      </div>

      {/* 💬 Main Text */}
      <div className="stats-text">
        <h2>
          <span className="floating-heart">💗</span>Connecting Hearts with Trust & Excellence
          <br />
          Since 2002
        </h2>
        <p>
          Experience personalized matrimonial services, expert support, and a
          platform built on Islamic values at{" "}
          <a href="https://Tekisky.com" target="_blank" rel="noreferrer">
            Tekisky.com
          </a>
        </p>
      </div>

      {/* 📦 Stats Cards */}
      <div className="stats-cards">
        {stats.map((item, index) => (
          <div className="stats-card" key={index}>
            <div className="heart-shower-wrapper">
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  className="heart-shower"
                  key={i}
                  style={{
                    left: `${Math.random() * 90}%`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  
                </span>
              ))}
            </div>
            <h3>{item.count}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

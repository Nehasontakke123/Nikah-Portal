import React, { useEffect, useState } from 'react';
import '../assets/CSS/NikahNamahSection.css';

const quotes = [
  "“Two souls but a single thought, two hearts that beat as one.”",
  "“Nikah is not just love, it's commitment, it's Sunnah.”",
  "“The happiest marriages are built on strong Imaan and patience.”",
  "“Marriage completes half your deen.”",
  "“In your love, I find my peace.”"
];

const NikahNamahSection = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [paused]);

  const handleRippleEffect = (e) => {
    const button = e.currentTarget;
    const ripple = button.querySelector(".ripple");

    const rect = button.getBoundingClientRect();
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.remove("show");
    void ripple.offsetWidth;
    ripple.classList.add("show");
  };

  return (
    <section className="nikah-container">
      {/* 💖 Global Heart Shower */}
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
            🤍
          </span>
        ))}
      </div>

      {/* 🕌 Arabic Pattern Overlay */}
      <div className="arabic-pattern-overlay"></div>

      {/* 🌊 Wave */}
      <div className="nikah-wave">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            className="wave-path"
            d="M0,128L30,122.7C60,117,120,107,180,117.3C240,128,300,160,360,149.3C420,139,480,85,540,90.7C600,96,660,160,720,176C780,192,840,160,900,133.3C960,107,1020,85,1080,106.7C1140,128,1200,192,1260,208C1320,224,1380,192,1410,176L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            fill="#FF477E"
          />
        </svg>
      </div>

      <div className="nikah-content">
        <div className="nikah-image-wrapper">
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/541/536/desktop-wallpaper-100-muslim-couple-trending-hijab-couple.jpg"
            alt="Happy Couple"
            className="nikah-image"
          />
          <div className="call-box">
            <span className="phone-icon">📞</span>
            <div>
              <p>Need to Know More Details?</p>
              <strong>(+91) 9845130331</strong>
            </div>
          </div>
        </div>

        <div className="nikah-text">
          <h1>
            Welcome to <span className="highlight">NikahNamah</span> – India&apos;s #1 Most Trusted Muslim Matrimony Website
          </h1>
          <p>
            Marriage is a sacred union guided by faith, values, and family traditions.
            With 27+ years of trust, we’ve helped thousands of Muslim families find meaningful life partners.
          </p>
          <button className="connect-button" onClick={handleRippleEffect}>
            Connect Now →
            <span className="ripple" />
          </button>

          {/* 💬 Smooth Quote Display */}
          <div
            className="quote-smooth"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {quotes[quoteIndex]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NikahNamahSection;

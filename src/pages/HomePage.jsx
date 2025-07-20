import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/CSS/Home.css';
import MatrimonyProfiles from '../components/MatrimonyProfiles';
import SearchBar from '../components/SearchBar';
import StatsSection from '../components/StatsSection';
import TestimonialSlider from '../components/TestimonialSlider';
import NikahNamahSection from '../components/NikahNamahSection';
import FeaturesSection from '../components/FeaturesSection';
import BlogSection from '../components/BlogSection';
import WhyChooseUs from '../components/WhyChooseUs';
// Image imports
import Slider1 from '../assets/images/slider1.jpg';
import Slider2 from '../assets/images/slider5.jpg';
import Slider3 from '../assets/images/slider4.jpg';

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 8000); // auto close after 8s
    return () => clearTimeout(timer);
  }, []);
return (
  <div className="home-slider">

    {/* Welcome Popup with Dot Shower only inside popup overlay */}
    {showPopup && (
      <div className="popup-overlay">
        {/* Dot Shower for Popup only */}
        <div className="dot-shower-popup">
          {Array.from({ length: 40 }).map((_, index) => {
            const colors = ["#FFD700", "#FF69B4", "#87CEFA", "#FFA07A", "#7FFFD4"];
            const size = Math.floor(Math.random() * 6) + 4; // 4px to 10px
            const left = Math.floor(Math.random() * 100); // %
            const animationDelay = Math.random() * 5; // 0-5s

            return (
              <span
                key={index}
                className="dot"
                style={{
                  backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  animationDelay: `${animationDelay}s`,
                }}
              ></span>
            );
          })}
        </div>

        <div className="popup">
          <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>
          <h2>Welcome to Tekisky  Matrimony!</h2>
          <img
            src="https://wallpapers.com/images/hd/blissful-muslim-couple-d4rtc31pbwv93s8e.jpg"
            alt="Welcome"
            className="popup-img"
          />
          <p><strong>Looking for your perfect match? You're in the right place! 💕</strong></p>
          <p>We offer <strong>100%</strong> matchmaking, just for you. Friendly matchmakers to make your journey easy and happy.</p>
          <p>You came with hope, and we promise to keep that smile on your face. 😊✨</p>
          <button className="popup-btn">🔗 Connect Now</button>
        </div>
      </div>
    )}

    {/* Swiper Hero Slider */}
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      className="hero-swiper"
    >
      <SwiperSlide className="slide">
        <img src={Slider1} alt="Muslim Couple" />
        <div className="content">
          <h1>Find Your Perfect Nikah Match</h1>
          <p>Trusted by thousands of Muslim families</p>
          <button>Get Started</button>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <img src={Slider2} alt="Islamic Wedding" />
        <div className="content">
          <h1>Safe & Secure Matrimony Platform</h1>
          <p>100% verified Muslim profiles only</p>
          <button>Join Now</button>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <img src={Slider3} alt="Happy Couple" />
        <div className="content">
          <h1>Start Your Nikah Journey Today</h1>
          <p>Where Faith meets Future</p>
          <button>Register Free</button>
        </div>
      </SwiperSlide>
    </Swiper>

    {/* Other Sections */}
    <MatrimonyProfiles />
    <SearchBar />
    <StatsSection />
    <TestimonialSlider />
    <NikahNamahSection />
    <FeaturesSection />
    <BlogSection/>
    <WhyChooseUs/>
  </div>
);


};

export default Home;

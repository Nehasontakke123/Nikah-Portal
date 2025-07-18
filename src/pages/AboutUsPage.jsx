import React from 'react';
import '../assets/CSS/AboutUs.css';
import About from '../components/About';
import AboutUsInformation from '../components/AboutUsInformation';

const AboutUsPage = () => {
  return (
    <>
      <section className="about-us">
        <div className="about-us__container">
          <div className="about-us__image">
            <img
              src="https://img.freepik.com/premium-photo/couple-amazing-bride-moment-hand_1304-1985.jpg"
              alt="About Nikahnamah"
            />
          </div>
          <div className="about-us__content">
            <h2 className="about-us__title">About Us</h2>
            <p>
              Nikahnamah is more than just a matrimony website; it’s a platform grounded in Islamic principles,
              designed to facilitate meaningful connections leading to lifelong marriages.
            </p>
            <p>
              With thousands of successful matches and a team of dedicated support, we focus on honesty, faith, and
              family values. We provide verified profiles and expert guidance every step of the way.
            </p>
            <p>
              Founded in 2003 and based in Bangalore, we are proud to be India’s trusted Muslim matrimonial service,
              committed to transforming online matrimony with transparency and tradition.
            </p>
          </div>
        </div>
      </section>

      <About />
      <AboutUsInformation/>
    </>
  );
};

export default AboutUsPage;

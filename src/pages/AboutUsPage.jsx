import React, { useEffect, useState } from 'react';
import '../assets/CSS/AboutUs.css';
import About from '../components/About';
import AboutUsInformation from '../components/AboutUsInformation';

const images = [
  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEyL3Jhd3BpeGVsX29mZmljZV8zMF9waG90b19vZl9hX2hhcHB5X211c2xpbV9uZXdseV93ZWRfY291cGxlX2lzb19iMGExODExMi1hOWFiLTQwMjctYTk5Ni05MWYwN2QwZDRlMmUtbTR0aXlmZW4ucG5n.png",
  "https://wallpaperbat.com/img/80139955-muslim-couple-image-free-photo-png.jpg",
  "https://i.pinimg.com/736x/4c/f8/ce/4cf8cefed96dd187196246183993d4c2.jpg",
  "https://i.pinimg.com/736x/c3/c1/0d/c3c10d0db83af495bce9af680c48a16b.jpg",
  "https://i.pinimg.com/736x/95/77/0b/95770b9a6fdb052838ba30efc2674d8b.jpg"
];

const AboutUsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="about-us">
        <div className="about-us__container">
          <div className="about-us__image">
            <img src={images[currentImageIndex]} alt="About Tekisky" />
          </div>
          <div className="about-us__content">
            <h2 className="about-us__title">About Us</h2>
            <p>
              Tekisky is more than just a matrimony website; it’s a platform grounded in Islamic principles,
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
      <AboutUsInformation />
    </>
  );
};

export default AboutUsPage;

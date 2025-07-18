import React from 'react';
import '../assets/CSS/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <div className="about-images">
          <img src="https://t4.ftcdn.net/jpg/10/01/68/77/360_F_1001687783_00LlbzgFn82cz42SESzDJmMN9VuKAFsz.jpg" alt="Islamic Design" className="about-img top-img" />
          <img src="https://img.freepik.com/premium-photo/muslim-couples-breaking-their-fast_198067-108640.jpg" alt="Guidance Team" className="about-img bottom-img" />
        </div>
        <div className="about-text">
          <h1 className="title">Nikahnamah</h1>
          <h2 className="subtitle">Best Muslim Matrimony in India</h2>
          <p className="greeting">Assalamu Alaikum,</p>
          <p>
            Nikahnamah is more than just a matrimony website; it's a platform grounded in Islamic principles,
            designed to facilitate meaningful connections leading to marriage. Our team consists of experienced
            relationship managers who are committed to guiding you through your journey to find a compatible life
            partner while upholding the values of faith, integrity, and respect.
          </p>
          <p>
            <strong>Our Mission:</strong> To serve as a trusted intermediary in the sacred journey of marriage,
            guided by the teachings of Islam. We aim to provide a safe and halal environment where individuals can
            connect with like-minded partners.
          </p>
          <p>
            <strong>Our Vision:</strong> To be the leading online destination for Muslims seeking matrimonial harmony,
            renowned for our commitment to Islamic ethics and personalized service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import '../assets/CSS/Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo and Tagline */}
        <div className="footer-section about">
          <h2 className="logo">Tekisky MATRIMONIAL</h2>
          <p>India’s Trusted Muslim Matrimony Platform. Find your perfect match with privacy, tradition, and trust. 2nd Floor, Opposite Water Tank, Workshop Corner, Nanded,</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profiles">Matrimony Profiles</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>hr@tekisky.com</p>
          <p>+91 8625817334</p>
          <p>+91 9890796149</p>
          <p>India , Maharashtra , Nanded</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tekisky. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

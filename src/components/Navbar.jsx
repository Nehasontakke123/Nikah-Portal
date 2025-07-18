import React, { useState } from "react";
import "../assets/CSS/Navbar.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Teki from '../assets/images/tekilogo.jpg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={Teki} alt="logo" className="logo-icon" />
        <div>
          <h1 className="logo-text">NIKAHNAMAH.COM</h1>
          <p className="subtitle">Tekisky MATRIMONIAL</p>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>HOME</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>ABOUT US</NavLink></li>
        <li><NavLink to="/blogs" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>BLOGS</NavLink></li>
        <li><NavLink to="/plans" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>PLANS</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>CONTACT US</NavLink></li>
      </ul>

      <div className={`nav-buttons ${menuOpen ? "show" : ""}`}>
        <button className="btn login-btn"><FaArrowRight /> LOGIN</button>
        <button className="btn register-btn"><FaUser /> REGISTER</button>
      </div>
    </nav>
  );
};

export default Navbar;
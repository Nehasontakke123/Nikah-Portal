import React, { useState } from "react";
import "../assets/CSS/Navbar.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import Teki from "../assets/images/tekilogo.jpg";
import '../assets/CSS/SweetAlertCustom.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
const showLoginForm = () => {
  Swal.fire({
    title: "Login",
    html: `
      <input type="email" id="login-email" class="swal2-input" placeholder="Email" />
      <input type="password" id="login-password" class="swal2-input" placeholder="Password" />
      <input type="password" id="login-confirm-password" class="swal2-input" placeholder="Confirm Password" />
    `,
    focusConfirm: false,
    confirmButtonText: "Login",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    preConfirm: async () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      const confirmPassword = document.getElementById("login-confirm-password").value;

      if (!email || !password || !confirmPassword) {
        Swal.showValidationMessage("Please fill in all fields");
        return false;
      }

      if (password !== confirmPassword) {
        Swal.showValidationMessage("Passwords do not match");
        return false;
      }

      try {
        const response = await fetch("https://nikah-backend.onrender.com/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Login failed");
        }

        return data;
      } catch (error) {
        Swal.showValidationMessage(error.message);
        return false;
      }
    },
  }).then((result) => {
    if (result.isConfirmed && result.value) {
      Swal.fire("Success!", "Login Successful!", "success");
      console.log("Login Response:", result.value);
    }
  });
};


 const showRegisterForm = () => {
  Swal.fire({
    title: "Register",
    html: `
      <input type="text" id="register-name" class="swal2-input" placeholder="Name" />
      <input type="email" id="register-email" class="swal2-input" placeholder="Email" />
      <input type="text" id="register-mobile" class="swal2-input" placeholder="Mobile Number" />
      <input type="password" id="register-password" class="swal2-input" placeholder="Password" />
      <input type="password" id="register-confirm-password" class="swal2-input" placeholder="Confirm Password" />
      <select id="register-plan" class="swal2-input">
        <option value="">Select Plan</option>
        <option value="Free">Free</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="VIP">VIP</option>
      </select>
    `,
    focusConfirm: false,
    confirmButtonText: "Register",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    preConfirm: async () => {
      const name = document.getElementById("register-name").value;
      const email = document.getElementById("register-email").value;
      const mobile = document.getElementById("register-mobile").value;
      const password = document.getElementById("register-password").value;
      const confirmPassword = document.getElementById("register-confirm-password").value;
      const plan = document.getElementById("register-plan").value;

      if (!name || !email || !mobile || !password || !confirmPassword || !plan) {
        Swal.showValidationMessage("Please fill in all fields");
        return false;
      }

      if (password !== confirmPassword) {
        Swal.showValidationMessage("Passwords do not match");
        return false;
      }

      try {
        const response = await fetch("https://nikah-backend.onrender.com/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, mobile, password, plan })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Registration failed");
        }

        return data;
      } catch (error) {
        Swal.showValidationMessage(error.message);
        return false;
      }
    },
  }).then((result) => {
    if (result.isConfirmed && result.value) {
      Swal.fire("Registered!", "You are now registered.", "success");
      console.log("Register Response:", result.value);
    }
  });
};


  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={Teki} alt="logo" className="logo-icon" />
        <div>
          <h1 className="logo-text">Tekisky</h1>
          <p className="subtitle">MATRIMONIAL</p>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>ABOUT US</NavLink></li>
        <li><NavLink to="/blogs" onClick={closeMenu}>BLOGS</NavLink></li>
        <li><NavLink to="/plans" onClick={closeMenu}>PLANS</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>CONTACT US</NavLink></li>
      </ul>

      <div className={`nav-buttons ${menuOpen ? "show" : ""}`}>
        <button className="btn login-btn" onClick={showLoginForm}><FaArrowRight /> LOGIN</button>
        <button className="btn register-btn" onClick={showRegisterForm}><FaUser /> REGISTER</button>
      </div>
    </nav>
  );
};

export default Navbar;

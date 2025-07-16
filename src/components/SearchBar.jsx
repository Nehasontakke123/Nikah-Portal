import React, { useState } from "react";
import "../assets/CSS/SearchBar.css";

const SearchBar = () => {
  const [form, setForm] = useState({
    gender: "Male",
    status: "Single",
    ageFrom: 18,
    ageTo: 25,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Filters:", form);
    // Add API call or redirect logic here
  };

  return (
    <section className="search-section">
      <h2 className="search-heading">
        Browse{" "}
        <span>
          Muslim Groom's and Bride's Profiles
          <span className="heart-icon">❤️</span>
        </span>
      </h2>
      <p className="sub-text">Find your right match with NikahNamah</p>

      <form className="search-bar" onSubmit={handleSubmit}>
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option>Male</option>
          <option>Female</option>
        </select>

        <select name="status" value={form.status} onChange={handleChange}>
          <option>Single</option>
          <option>Divorced</option>
          <option>Widowed</option>
        </select>

        <select name="ageFrom" value={form.ageFrom} onChange={handleChange}>
          {Array.from({ length: 40 }, (_, i) => (
            <option key={i + 18}>{i + 18}</option>
          ))}
        </select>

        <select name="ageTo" value={form.ageTo} onChange={handleChange}>
          {Array.from({ length: 40 }, (_, i) => (
            <option key={i + 18}>{i + 18}</option>
          ))}
        </select>

        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBar;

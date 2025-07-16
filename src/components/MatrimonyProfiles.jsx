import React, { useRef } from "react";
import "../assets/CSS/Profiles.css";

const profiles = [
  // 👇 Add as many profiles as you want
  {
    name: "Samreen Begum",
    job: "Not Working",
    ageCity: "24 Years • Hyderabad",
    status: "Single",
    image: "https://www.sainly.com/cdn/shop/files/Men_Brown_Pant_White_Shirt1_800x.webp?v=1730090415"
  },
  {
    name: "Mohammed Shoaib Pasha",
    job: "Solution Architect SAP MM",
    ageCity: "26 Years • Bangalore",
    status: "Single",
    image: "https://i.pinimg.com/736x/fc/ce/19/fcce194694094b676ff4ad4a521047ec.jpg"
  },
  {
    name: "Syed Hyder Ali",
    job: "SOFTWARE ENGINEER",
    ageCity: "29 Years • Hyderabad",
    status: "Single",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/b/v/p/m-men-regular-fit-solid-casual-shirt-uv-fashion-original-imagqz2yyhzzekvf.jpeg?q=90&crop=false"
  },
  {
    name: "KHUTEJATUL KUBRA",
    job: "Not Working",
    ageCity: "20 Years • Bangalore",
    status: "Single",
    image: "https://cdn.shopify.com/s/files/1/0746/3144/6848/files/What_Comes_Under_Formal_Wear_For_Ladies_480x480.webp?v=1712895618"
  },
  {
    name: "Khader Nawaz Khan",
    job: "Security Consulting Consultant",
    ageCity: "32 Years • Toronto",
    status: "Single",
    image: "https://www.globalrepublic.in/cdn/shop/files/GRWS2516316BRWN_3_1080x.webp?v=1739447113"
  },
  {
    name: "Saniyaa Khan",
    job: "Frontend Developer",
    ageCity: "23 Years • Mumbai",
    status: "Single",
    image: "https://cdn.shopify.com/s/files/1/2995/1158/files/Pink_suit_salwar_beautiful_girl_480x480.jpg?v=1694176637"
  },
  {
    name: "Sohel Pathan",
    job: "Backend Developer",
    ageCity: "27 Years • Pune",
    status: "Single",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/a/z/l/m-plain-shirt-for-mens-shiv-fashion-original-imaghffhwpu2uunf.jpeg?q=90&crop=false"
  },
  {
    name: "Sattark Pathan",
    job: "Backend Developer",
    ageCity: "27 Years • Pune",
    status: "Single",
    image: "https://thefoomer.in/cdn/shop/products/jpeg-optimizer_PATP5147.jpg"
  }
];

const MatrimonyProfiles = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="profile-section">
      <h1 className="section-title">Featured Matrimony Profiles</h1>
      <div className="scroll-buttons">
        <button onClick={() => scroll("left")}>&lt;</button>
        <button onClick={() => scroll("right")}>&gt;</button>
      </div>
      <div className="card-container" ref={scrollRef}>
        {profiles.map((profile, index) => (
          <div className="profile-card" key={index}>
            <div className="profile-img">
              <img src={profile.image} alt={profile.name} />
            </div>
            <h3>{profile.name}</h3>
            <p className="job">{profile.job}</p>
            <p className="age">{profile.ageCity}</p>
            <span className="status">{profile.status}</span>
            <button className="view-btn">View Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MatrimonyProfiles;

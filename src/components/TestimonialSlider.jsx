import React from "react";
import "../assets/CSS/TestimonialSlider.css";

const testimonials = [
  {
    img: "https://i.pinimg.com/564x/53/cb/f3/53cbf3989a5d52de85742de35adff2d8.jpg",
    name: "Ahmed & Ayesha",
    title: "Found My Perfect Match!",
    text: "I personally visited the matrimony bureau office, and I am very impressed with their professional services. My profile was handled with great care, an...",
  },
  {
    img: "https://i.pinimg.com/236x/d5/0a/4c/d50a4c2e9fbc09b58d652c3156a230ac.jpg",
    name: "FATIMA & IMRAN",
    title: "A Platform That Prioritizes Privacy",
    text: "What stood out for me with Tekisky is their privacy and security. I felt confident knowing that the platform...",
  },
  {
    img: "", // No image
    name: "Sara & Rizwan",
    title: "Blessed with Love",
    text: "What stood out for me with Tekisky is their privacy and security. I felt confident knowing that the platform...", // No text
  },
   {
    img: "https://i.pinimg.com/236x/d5/0a/4c/d50a4c2e9fbc09b58d652c3156a230ac.jpg",
    name: "FATIMA & IMRAN",
    title: "A Platform That Prioritizes Privacy",
    text: "What stood out for me with Tekisky is their privacy and security. I felt confident knowing that the platform...",
  },
   {
    img: "https://i.pinimg.com/236x/d5/0a/4c/d50a4c2e9fbc09b58d652c3156a230ac.jpg",
    name: "FATIMA & IMRAN",
    title: "A Platform That Prioritizes Privacy",
    text: "What stood out for me with Tekisky is their privacy and security. I felt confident knowing that the platform...",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">
        Trusted by countless families for finding the right match —{" "}
        <span>Tekisky</span>.
      </h2>

      <div className="testimonial-slider">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-img-box">
              {item.img ? (
                <img src={item.img} alt={item.name} />
              ) : (
                <div className="fallback-message">
                  <span className="fade-in-message">💍 Mubarak!</span>
                </div>
              )}

              <div className="badge">
                <strong>Successfully Matched</strong>
                <p>💞 Register now for your forever</p>
              </div>
            </div>

            <div className="testimonial-content">
              <span className="quote">❝</span>
              {item.text ? (
                <>
                  <p className="text">{item.text}</p>
                  <p className="mubarak-message-animated">
                    💖 Mubarak on your beautiful journey!
                  </p>
                </>
              ) : (
                <>
                  <p className="text">
                    May Allah bless your journey with joy & love. 🌸
                  </p>
                  <p className="mubarak-message-animated">
                    💖 Mubarak on your beautiful journey!
                  </p>
                </>
              )}
              <h4 className="name">{item.name}</h4>
              <p className="title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;

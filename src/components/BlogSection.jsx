import React from 'react';
import '../assets/CSS/BlogSection.css';

const blogs = [
  {
    title: "Why Local Muslim Matrimony Bureaus Still Matter in 2025?",
    date: "09 Jul, 2025",
    views: 48,
    likes: 0,
    comments: 0,
    image: "https://t4.ftcdn.net/jpg/10/01/68/77/360_F_1001687783_00LlbzgFn82cz42SESzDJmMN9VuKAFsz.jpg",
    summary:
      "Looking for a trusted Muslim marriage bureau in Karnataka? Tekisky offers verified profiles, halal matchmaking, and h...",
    link: "#"
  },
  {
    title: "Muslim Marriage Bureau in Saudi Arabia – Your Guide",
    date: "24 Jun, 2025",
    views: 219,
    likes: 0,
    comments: 0,
    image: "https://t3.ftcdn.net/jpg/11/53/96/02/360_F_1153960247_QyLuumK0idRzZnN175YigA9uIaLfg5Eo.jpg",
    summary:
      "Discover verified Muslim brides and grooms with Tekisky – a trusted Muslim marriage bureau in Saudi Arabia offering h...",
    link: "#"
  },
  {
    title: "What Makes a Nikah Truly Successful? Islamic Principles",
    date: "12 Jun, 2025",
    views: 213,
    likes: 2,
    comments: 0,
    image: "https://img.freepik.com/premium-photo/muslim-couples-breaking-their-fast_198067-108640.jpg",
    summary:
      "Discover key Islamic principles behind a successful Nikah. Learn how faith, understanding, and dua shape lasting Muslim...",
    link: "#"
  },
  {
    title: "Tekisky – Your Trusted Muslim Matrimony Partner in Saudi Arabia",
    date: "06 Jun, 2025",
    views: 272,
    likes: 8,
    comments: 0,
    image: "https://img.freepik.com/free-photo/back-view-islamic-couple-spending-time-together_23-2151064038.jpg?semt=ais_hybrid&w=740",
    summary:
      "Find verified Muslim life partners in Saudi Arabia with Tekisky. Trusted halal matrimony service in Riyadh, Jeddah, D...",
    link: "#"
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-title">LATEST FROM OUR BLOG</h2>
      <p className="blog-subtitle">
        Start your journey with Bismillah on Tekisky – India’s leading Muslim matchmaking platform.
        For helpful tips and real marriage guidance, explore our <strong>Muslim Marriage Guide</strong> in the Blog section.
      </p>

      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-img" />
            <div className="blog-date">{blog.date}</div>
            <div className="blog-metrics">
              <span>❤️ {blog.likes}</span>
              <span>👁 {blog.views}</span>
              <span>💬 {blog.comments}</span>
            </div>
            <h3 className="blog-heading">{blog.title}</h3>
            <p className="blog-summary">{blog.summary}</p>
            <a href={blog.link} className="read-more">Read More...</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

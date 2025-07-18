import React from 'react';
import '../assets/CSS/ContactUs.css';

const ContactUsPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label>Your Name *</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email *</label>
          <input type="email" placeholder="Your Email" required />

          <label>Mobile Number *</label>
          <input type="tel" placeholder="Your Mobile Number" required />

          <label>Subject (Optional)</label>
          <input type="text" placeholder="Subject" />

          <label>Additional Information (Optional)</label>
          <textarea placeholder="Your Message" rows="5"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-details">
        <h2>Reach Our Expert Team</h2>
        <p><strong>Phone:</strong> +91 98451 30331</p>
        <p><strong>Help & Support:</strong></p>
        <ul>
          <li>+91 96117 93313</li>
          <li>+91 90360 22522</li>
          <li>+91 98459 20331</li>
          <li>+91 90350 22457</li>
        </ul>

        <h3>Email Address</h3>
        <p>support@nikahnamah.com</p>
        <p>info.nikahnamah@gmail.com</p>

        <h3>Address</h3>
        <p>1827, 2nd floor, 26th Main, 41st Cross Rd, Jayanagara 9th Block, Bengaluru, Karnataka 560069</p>
      </div>
    </div>
  );
};

export default ContactUsPage;
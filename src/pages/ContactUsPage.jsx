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
        <p><strong>Phone:</strong>+91 8625817334</p>
        <p><strong>Help & Support:</strong></p>
        <ul>
          <li>+91 9890796149</li>
          <li>+91 9373960682</li>
          <li>+91 7842363997</li>
          <li>+91 7842363997</li>
        </ul>

        <h3>Email Address</h3>
        <p>hr@tekisky.com</p>
        <p>tekisky@2021gmail.com</p>

        <h3>Address</h3>
        <p>2nd Floor, Opposite Water Tank, Workshop Corner, Nanded, Maharashtra 431605, India
          Monday to Saturday - : 11:00 AM to 7:00 PM
Friday - : 11:00 AM to 1:00 PM & 2:00 PM to 7:00 PM
Sunday: Closed
        </p>
      </div>
    </div>
  );
};

export default ContactUsPage;
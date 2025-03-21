import React from "react";
import "./contact.css"; // Import CSS

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Email: <a href="kethsiyaldj@gmail.comcom">kethsiyaldj@gmail.com</a></p>
        <p>Phone: <a href="tel:9488349232">9488349232</a></p>
      </div>
    </section>
  );
};

<section className="contact-page">
  <h2>Contact Me</h2>
  <p>Feel free to reach out!</p>
</section>


export default Contact;

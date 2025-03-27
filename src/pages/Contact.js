import React from 'react';
import { FaLinkedin, FaEnvelope, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const socialLinks = [
    { id: 1, icon: <FaLinkedin className="social-icon text-blue-600" />, link: 'https://www.linkedin.com/in/jebishakethsiyaldj07/' },
    { id: 2, icon: <FaEnvelope className="social-icon text-red-500" />, link: 'mailto:kethsiyaldj@gmail.com' },
    { id: 3, icon: <FaInstagram className="social-icon text-pink-500" />, link: 'https://www.instagram.com/your-profile' },
    { id: 4, icon: <FaYoutube className="social-icon text-red-600" />, link: 'https://www.youtube.com/@DJonlyforchrist' },
    { id: 5, icon: <FaGithub className="social-icon text-gray-900" />, link: 'https://github.com/DJJK24/kethsiyal-portfolio' },
  ];

  return (
    <div className="contact-container">
      <h1 className="contact-title">Connect with Me</h1>
      <div className="social-links">
        {socialLinks.map(({ id, icon, link }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer">
            {icon}
           </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

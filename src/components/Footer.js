import React from "react";
import "./footer.css"; // Import CSS
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} DJJK | All Rights Reserved</p>
        <div className="social-links">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
        </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

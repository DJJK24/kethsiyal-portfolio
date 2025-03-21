import React from "react";
import "./About.css"; // Make sure to create this CSS file

const About = () => {
  return (
    <section className="about-page"> {/* Updated className */}
      <div className="about-container">
        <div className="about-image">
          <img 
            src="https://up.yimg.com/ib/th?id=OIP.ycAtp-1wp8cneSkFvhygWQHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" 
            alt="Profile" 
          />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Kethsi</strong>, a passionate web developer with experience in 
            <strong>React, MERN stack, and UI/UX design</strong>. I love building clean and modern 
            web applications that are both functional and visually appealing.
          </p>
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>💻 MERN Stack</li>
            <li>🎨 UI/UX Design</li>
            <li>⚡ Frontend Developer</li>
            <li>📱 Backend Developer</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

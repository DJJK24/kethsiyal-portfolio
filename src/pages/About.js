import React from "react";
import "./About.css"; // Make sure to create this CSS file
import mypic from '../images/mypic.png'; // Import the image

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
      <div className="about-image">
  <img src={mypic} alt="My Profile" className="profile-pic" />
</div>


        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>D.J.Kethsiyal BE (CSE)</strong>, a passionate web developer with experience in
            <strong> HTML, CSS, JavaScript, React, MERN stack, and UI/UX design</strong>. I love building clean and modern
            web applications that are both functional and visually appealing. Improving my skills to achieve my goal of becoming a full-stack & UI/UX developer.
          </p>

          
          <ul className="skills-list">
          <h3>SKILLS</h3>
            <li>💻 MERN Stack</li>
            <li>🎨 UI/UX Design</li>
            <li>⚡ Frontend Developer</li>
            <li>📱 Backend Developer</li>
          </ul>

          {/* Resume Section */}
          <div className="resume-section">
            <h3>RESUME</h3>
            <a href="/myresume.pdf" download="Kethsiyal_Resume.pdf" className="resume-button">
  Download My Resume
</a>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
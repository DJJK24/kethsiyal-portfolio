import React from 'react';
import './Hero.css'; // For styling

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Kethsi</span></h1>
        <p>A passionate <span className="highlight">Frontend-Focused Web Developer</span></p>
        <p>I build user-friendly, modern websites with clean design and interactive elements.</p>
        <a href="#projects" className="btn">View My Projects</a>
      </div>
    </section>
  );
};

export default Hero;

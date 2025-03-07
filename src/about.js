import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const quotes = [
  'Education is the most powerful weapon which you can use to change the world. - Nelson Mandela',
  'The beautiful thing about learning is that no one can take it away from you. - B.B. King',
  'An investment in knowledge pays the best interest. - Benjamin Franklin',
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
  'The purpose of education is to replace an empty mind with an open one. - Malcolm Forbes'
];

const About = () => {
  return (
    <div className="about-container">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>
      <p className="about-description">
        Hi, I'm Kethsi! I'm a passionate Computer Science Engineering student with a deep interest in coding, web development, and design. I aspire to become a full-stack or UI/UX developer, blending creativity and logic in my work.
      </p>
      <div className="quotes-section">
        {quotes.map((quote, index) => (
          <motion.div 
            key={index} 
            className="quote-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {quote}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;

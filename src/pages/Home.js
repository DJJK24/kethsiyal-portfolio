import React from 'react';
import './Home.css';
import ParticlesBackground from "../components/ParticlesBackground"; 

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="home">
      <ParticlesBackground />
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-subtitle">I'm Kethsi — a Frontend-Focused Web Developer.</p>
      </motion.div>
    </section>
  );
};

export default Home;



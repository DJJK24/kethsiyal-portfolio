import React, { useEffect } from 'react';
import './DynamicBackground.css';

const DynamicBackground = () => {
  useEffect(() => {
    const gradient = document.getElementById('gradient');
    let angle = 0;

    const animate = () => {
      angle = (angle + 1) % 360;
      gradient.style.background = `linear-gradient(${angle}deg, #1e3c72, #2a5298, #00c6ff)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <div id="gradient"></div>;
};

export default DynamicBackground;

// src/components/ParticlesBackground.js

import React from 'react';
import Particles from '@tsparticles/react';
// eslint-disable-next-line no-unused-vars
import { tsParticles } from "tsparticles";


const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    console.log(main); // Check if particles are initialized properly
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: '#1e3c72',
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
          },
          links: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;

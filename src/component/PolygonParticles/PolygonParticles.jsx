// PolygonParticles.jsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import "./PolygonParticles.css";

const PolygonParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Make sure engine is loaded properly
  }, []);

  return (
    <Particles
    className='myParticles'
      id="tsparticles"
      init={particlesInit}
    //   style={{
    //     position: 'fixed',
    //     width: '100%',
    //     height: '100%',
    //     top: 0,
    //     left: 0,
    //     zIndex: -1,
    //   }}
      options={{
      
        particles: {
          number: { value: 200 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
          links: { enable: true, color: '#ffffff', distance: 100 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
          },
        },
        polygon: {
          enable: true,
          type: 'inline',
          url: 'https://particles.js.org/images/svg/deer.svg',
          inline: { arrangement: 'equidistant' },
          draw: {
            enable: true,
            stroke: { color: 'rgba(126, 196, 29, 0.3)', width: 0.5 },
          },
        },
      }}
    />
  );
};

export default PolygonParticles;

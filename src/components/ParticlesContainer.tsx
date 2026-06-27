import React, { useEffect } from 'react';
import Particles, { ParticlesProps } from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { ThemeContextProps, useTheme } from '../contexts';

const particleStyle = {
  position: 'absolute',
  width: '100%',
  height: ' 100vh',
  top: 0,
} as React.CSSProperties;

// const particleColors = ['#006B38FF', '#FFF'];
function ParticlesContainer() {
  const { theme } = useTheme() as ThemeContextProps;
  const isDark = theme === 'dark';
  const bgColor = isDark ? '#0d1320' : '#eef1f5';
  const accent = isDark ? '#1ca25e' : '#006b38';

  const customInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    return () => {
      // Clean up any resources or event listeners here
    };
  }, []);

  const particlesOptions: ParticlesProps['options'] = {
    background: { color: bgColor },
    fullScreen: false,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onhover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          quantity: 3,
        },
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.1,
          },
        },
      },
    },
    particles: {
      color: {
        value: accent,
      },
      links: {
        color: accent,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 70,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: ['square', 'triangle', 'circle'],
      },
      size: {
        random: true,
        value: 10,
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {/* key={theme} forces a re-init so the background/particle colors update on toggle */}
      <Particles key={theme} style={particleStyle} init={customInit} id="tsparticles" options={particlesOptions} />
    </>
  );
}

export default ParticlesContainer;

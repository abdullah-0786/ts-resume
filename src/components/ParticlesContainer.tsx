import React from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const particleStyle = {
  position: 'absolute',
  width: '100%',
  height: ' 100vh',
  top: 0,
} as React.CSSProperties;

// const particleColors = ['#006B38FF', '#FFF'];
export class ParticlesContainer extends React.Component {
  async customInit(engine: Engine): Promise<void> {
    // this adds the bundle to tsParticles
    await loadSlim(engine);
  }

  render() {
    return (
      <>
        <Particles
          style={particleStyle}
          init={this.customInit}
          id="tsparticles"
          options={{
            background: { color: '#101820FF' },
            fullScreen: false,
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                  // mode: 'repulse',
                },
                onhover: {
                  enable: true,
                  mode: 'grab',
                  // mode: 'repulse',
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
                // value: ['#006B38FF', '#FFF'],
                value: '#006B38FF',
                // value: particleColors[Math.floor(Math.random() * particleColors.length)],
              },
              links: {
                // color: ['#006B38FF', '#FFF'],
                color: '#006B38FF',
                // color: particleColors[Math.floor(Math.random() * particleColors.length)],
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
          }}
        />
      </>
    );
  }
}

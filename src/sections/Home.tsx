import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ParticlesContainer } from '../components/ParticlesContainer';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';
import { Scroller } from '../components';
import { fab } from '@fortawesome/free-brands-svg-icons';
import details from '../data/details';

const Dot = styled.div({
  color: '#006B38FF',
  // color: '#ff4c60',
  display: 'inline',
});

export class Home extends React.Component {
  render() {
    return (
      <section id="home" className="home d-flex align-items-center">
        <div>
          <ParticlesContainer />
        </div>
        <Container>
          <div className="intro">
            <img
              src={details.avatar}
              alt="Abdullah"
              className="mb-4 bw-image"
              style={{
                width: '40%',
                borderRadius: '50%',
                // , boxShadow: '0px 0px 50px #006b38'
              }}
            />

            <h1 className="mb-2 mt-0">
              {details.firstName}
              <Dot>{details.middleName}</Dot>
              {details.lastName}
            </h1>

            <span>
              {`I'm a `}
              <TextLoop springConfig={{ stiffness: 180, damping: 10 }} interval={2000}>
                {details.titles.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </TextLoop>
            </span>

            <ul className="social-icons light list-inline mb-0 mt-4">
              {details.socialNetworks.map(network => (
                <li className="list-inline-item" key={network.iconName}>
                  <a href={network.link} target="_blank" rel="noopener noreferrer">
                    {network.iconName.startsWith('fa') ? (
                      <FontAwesomeIcon icon={fab[network.iconName]} />
                    ) : (
                      <img
                        src={network.iconName}
                        alt={network.name}
                        style={{
                          width: '20px',
                          marginBottom: '0.25em',
                          borderRadius: '15%',
                          backgroundColor: 'white',
                          padding: '2px',
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Scroller href="#contact" className="btn btn-kd">
                Contact me
              </Scroller>
            </div>
          </div>
          <div className="scroll-down">
            <Scroller href="#about" className="mouse-wrapper">
              <span>Scroll Down</span>
              <span className="mouse">
                <span className="wheel" />
              </span>
            </Scroller>
          </div>
        </Container>
      </section>
    );
  }
}

export default Home;

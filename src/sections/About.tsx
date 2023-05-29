import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeControlPhone } from '@fortawesome/free-solid-svg-icons';
import { Section, Skill } from '../components';
import about from '../data/about';

const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export class About extends React.Component {
  render() {
    return (
      <Section id="about" title="About Me">
        <Row>
          <Col md={2}>
            <Row>
              <Col md={12}>
                <div className="text-center mb-3">
                  {/* <img src={about.avatar} alt="kiendang" style={{ width: '150px' }} /> https://www.npmjs.com/package/copy-webpack-plugin */}
                  <img
                    src="/images/whatsapp2.jpg"
                    alt="Abdullah"
                    style={{ boxShadow: '0px 5px 20px 0px rgba(69,67,96,0.1)', width: '75%', borderRadius: '20%' }}
                  />
                </div>
              </Col>
              <Col md={12}>
                <Name className="text-center mb-3">{about.username}</Name>
                <Name className="text-center mb-3">
                  <FontAwesomeIcon icon={faVolumeControlPhone} shake={true} style={{ marginRight: '5%', rotate: '320deg' }} />
                  {about.contact}
                </Name>
              </Col>
            </Row>
          </Col>
          <Col md={10} className="triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <Row>
                <Col md={9} style={{ display: 'inline-grid', alignContent: 'space-between' }}>
                  <div dangerouslySetInnerHTML={{ __html: about.objective }} />
                  <div className="mt-3 mb-3">
                    <a href={about.resumeUrl} className="btn btn-kd" target="_blank" rel="noopener noreferrer">
                      View my CV
                    </a>
                    {/* {Array.isArray(socialNetworks) && (
                      <a
                        href={socialNetworks.find(({ name }) => name === 'Github')?.link}
                        className="btn btn-kd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on Github
                      </a>
                    )} */}
                  </div>
                </Col>
                <Col md={3}>
                  {about.skills.map(skill => (
                    <Skill key={skill.name} title={skill.name} percent={skill.confidence} backgroundColor={skill.color} />
                  ))}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* <Row className="mt-5">
          {about.statistics.map(statistic => (
            <Counter
              key={statistic.title}
              className="col-md-3 col-sm-6"
              description={statistic.title}
              count={statistic.number}
              icon={[statistic.iconPrefix as IconPrefix, statistic.iconName as IconName]}
            />
          ))}
        </Row> */}
      </Section>
    );
  }
}

export default About;

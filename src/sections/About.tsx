import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { Section, Skill } from '../components';
import about from '../data/about';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeControlPhone } from '@fortawesome/free-solid-svg-icons';

const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img({ boxShadow: '0px 5px 20px 0px rgba(69,67,96,0.1)', width: '75%', borderRadius: '20%' });
// function calculateAge(birthDateObj: Date) {
//   const currentDate = new Date();
//   let age = currentDate.getFullYear() - birthDateObj.getFullYear();

//   birthDateObj.setFullYear(currentDate.getFullYear());
//   if (birthDateObj > currentDate) age--;

//   return `${age} years old`;
// }

// function calculateExperience(startDateObj: Date) {
//   const currentDate = new Date();

//   const diffTime = Math.abs(currentDate.valueOf() - startDateObj.valueOf());
//   const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
//   const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.436875));

//   return `${diffYears} years` + (diffMonths ? ` and ${diffMonths} months` : '');
// }

function About() {
  return (
    <Section id="about" title="About Me">
      <Row>
        <Col md={2}>
          <Row>
            <Col md={12}>
              <div className="text-center mb-3">
                {/* <img
                  src="/images/whatsapp2.jpg"
                  alt="Abdullah"
                  style={{ boxShadow: '0px 5px 20px 0px rgba(69,67,96,0.1)', width: '75%', borderRadius: '20%' }}
                /> */}
                <Img src="/images/whatsapp2.jpg" alt="Abdullah" />
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
                {/* <Row>
                  <Col md={6} sm={12}>
                    <div className="mb-3">
                      <strong>Email: </strong>
                      {email}
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className="mb-3">
                      <strong>Experience: </strong>
                      {calculateExperience(about.experienceSince)}
                    </div>
                  </Col>
                  <Col md={12} sm={12}>
                    <div className="mb-3">
                      <strong>Soft Skills: </strong>
                      {about.softSkills.join(', ')}
                    </div>
                  </Col>
                </Row> */}
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

export default About;

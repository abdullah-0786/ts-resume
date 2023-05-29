import React from 'react';
import { Section, Skill } from '../components';
import { Col, Row } from 'react-bootstrap';
import skills from '../data/skills';

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
        <Row>
          {skills.map(skill => (
            <Col key={skill.name} md={3} sm={6} sx={12}>
              <Skill key={skill.name} title={skill.name} percent={skill.confidence} backgroundColor={skill.color} />
              {/* <ProgressBar title={skill.name} value={skill.confidence} color={skill.theme} /> */}
            </Col>
          ))}
        </Row>
      </div>
    </Section>
  );
}

export default Skills;

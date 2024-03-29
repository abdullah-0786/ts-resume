import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Section, Timeline } from '../components';
import history from '../data/history';

const education = history.education;

function Education() {
  return (
    <Section id="education" title="Education">
      <Row>
        <Col md={12}>
          <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
            {education.map(e => (
              <Timeline key={e.degree} time={e.period} title={e.school} icon={['fas', 'graduation-cap']}>
                <p>
                  <strong>
                    <i>{e.degree}</i>
                  </strong>
                </p>
                <div dangerouslySetInnerHTML={{ __html: e.description }} />
              </Timeline>
            ))}

            <span className="line" />
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Education;

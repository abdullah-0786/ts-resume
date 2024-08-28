import React from 'react';
import { Section } from '../components';
import { Col, Row } from 'react-bootstrap';
import projects from '../data/projects';
import CustomAccordion from '../components/CustomAccordion';

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <Row>
        <Col md={12}>
          <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
            <CustomAccordion icon={['fas', 'cubes']} items={projects} />
            {/* {projects.map(p => (
              <ProjectTimeline key={p.title} time={p.period ?? ''} title={p.title} icon={['fas', 'cubes']}>
                <div dangerouslySetInnerHTML={{ __html: p.description }} />
              </ProjectTimeline>
            ))} */}

            <span className="line margin-top-30" />
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Projects;

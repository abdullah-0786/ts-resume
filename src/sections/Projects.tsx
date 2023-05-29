import React from 'react';
import { ProjectTimeline, Section } from '../components';
import { Col, Row } from 'react-bootstrap';
import projects from '../data/projects';

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <Row>
        <Col md={12}>
          <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
            {projects.map(p => (
              <ProjectTimeline key={p.title} time={p.period ?? ''} title={p.title} icon={['fas', 'cubes']}>
                <div dangerouslySetInnerHTML={{ __html: p.description }} />
              </ProjectTimeline>
            ))}
            <span className="line" />
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Projects;

import React, { useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Accordion } from 'react-bootstrap';
import companyProjects from '../data/projects';

interface Props {
  time?: string;
  title?: string;
  icon: IconProp;
  left?: string;
  children?: React.ReactNode;
  items: typeof companyProjects;
}

function CustomAccordion(props: Props) {
  const IconBox = styled.div({
    background: '#fff',
    fontSize: '24px',
    // color: '#ff4c60',
    color: '#006B38FF',
    position: 'absolute',
    left: props.left ? props.left : '-10px',
    top: 0,
    zIndex: 1,
    fontWeight: 900,
  });

  const TitleDiv = styled.div({ display: 'flex', alignItems: 'baseline', flexDirection: 'column-reverse' });
  const [accordionItemSelected, setAccordionItemSelected] = useState<string | null>();

  return (
    <Accordion activeKey={accordionItemSelected} onSelect={e => (typeof e === 'string' || e === null) && setAccordionItemSelected(e)}>
      {props.items.map((p, i) => (
        <div key={i} className="timeline-container">
          <IconBox>
            <FontAwesomeIcon icon={props.icon} />
          </IconBox>
          <Fade bottom>
            <Accordion.Item
              key={i}
              eventKey={i.toString()}
              className={'accordion-item'}
              style={{ border: 'none', position: 'relative', bottom: '15px' }}
            >
              <div className="content">
                <Accordion.Header>
                  <TitleDiv>
                    {accordionItemSelected !== i.toString() && <div dangerouslySetInnerHTML={{ __html: p.tech }} />}
                    <h3 className="title" style={{ marginBlockEnd: 0 }}>
                      {p.title}
                    </h3>
                  </TitleDiv>
                </Accordion.Header>
                <Accordion.Body>{<div dangerouslySetInnerHTML={{ __html: p.description + p.tech }} />}</Accordion.Body>
              </div>
            </Accordion.Item>
          </Fade>
        </div>
      ))}
    </Accordion>
  );
}

export default CustomAccordion;

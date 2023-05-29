import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

interface Props {
  time?: string;
  title: string;
  icon: IconProp;
  left?: string;
  children: React.ReactNode;
}

function ProjectTimeline(props: Props) {
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

  return (
    <div className="timeline-container">
      <Fade bottom>
        <div className="content">
          <TitleDiv>
            <span className="time">{props?.time}</span>
            <h3 className="title" style={{ marginBlockEnd: 0 }}>
              {props.title}
            </h3>
          </TitleDiv>
          {props.children}
        </div>
      </Fade>
      <IconBox>
        <FontAwesomeIcon icon={props.icon} />
      </IconBox>
    </div>
  );
}

export default ProjectTimeline;

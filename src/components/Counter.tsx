import React, { useState } from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

interface Props {
  className?: string;
  description: string;
  count: number;
  icon: IconProp;
  iconSize?: SizeProp;
}

const Box = styled.div({
  float: 'left',
  color: '#dedeea',
  fontSize: '36px',
});

function Counter({ icon, iconSize, count, description, className }: Props) {
  const [loaded, setLoaded] = useState<boolean>(false);

  const onChange = (isVisible: boolean): void => {
    if (isVisible && !loaded) {
      setLoaded(true);
    }
  };

  return (
    <div className={className}>
      <div className="fact-item">
        <Box>
          <FontAwesomeIcon icon={icon} size={iconSize} />
        </Box>
        <div className="details">
          <h3 className="mb-0 mt-0 number">
            <em className="count">
              <VisibilitySensor onChange={onChange} delayedCall>
                <CountUp start={0} end={loaded ? count : 0} />
              </VisibilitySensor>
            </em>
          </h3>
          <p className="mb-0">{description}</p>
        </div>
      </div>
      <div className="spacer d-md-none d-lg-none" data-height="30" />
    </div>
  );
}

export default Counter;

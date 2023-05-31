import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

interface Props {
  title: string;
  percent: number;
  backgroundColor?: string;
}

function Skill({ title, percent, backgroundColor }: Props) {
  const [completed, setCompleted] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const onChange = (isVisible: boolean) => {
    if (isVisible && !loaded) {
      setCompleted(percent);
      setLoaded(true);
    }
  };

  const bgColor = backgroundColor ?? '#f1f1f1';

  return (
    <div className="skill-item mb-4">
      <VisibilitySensor onChange={onChange}>
        <div className="skill-info clearfix">
          <h4 className="float-start mb-3 mt-0">{title}</h4>
          {/* <span className="float-end">{`${props.percent}%`}</span> */}
        </div>
      </VisibilitySensor>
      <div className="progress">
        <div className="progress-bar data-background" style={{ width: `${completed}%`, backgroundColor: `${bgColor}` }} />
      </div>
    </div>
  );
}

export default Skill;

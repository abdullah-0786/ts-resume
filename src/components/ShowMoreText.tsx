import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

function ShowMoreText({ text }: Props) {
  const [showMore, setShowMore] = useState(false);

  const ShowMoreText = styled.p({ display: 'inline', color: 'blueviolet', cursor: 'pointer' });

  return (
    <div>
      <p style={{ display: 'inline' }}>{showMore ? text : text.substring(0, 50)}</p>{' '}
      <ShowMoreText onClick={() => setShowMore(e => !e)}>...show {showMore ? 'less' : 'more'}</ShowMoreText>
    </div>
  );
}

export default ShowMoreText;

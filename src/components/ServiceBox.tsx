import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  backgroundColor: string;
  image: string;
  children: React.ReactNode;
}

function ServiceBox({ title, backgroundColor, image, children }: Props) {
  const bgColor = backgroundColor ?? '#342054';
  const Wrapper = styled.div`
    background-color: ${bgColor};
  `;

  return (
    <Wrapper className="service-box rounded data-background padding-30 text-center text-light shadow-blue mb-4">
      <img src={image} alt={title} />
      <h3 className="mb-3 mt-0">{title}</h3>
      {children}
    </Wrapper>
  );
}

export default ServiceBox;

import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import about from '../data/about';

const StyledFooter = styled.footer({
  marginTop: '110px',
});

function Footer() {
  return (
    <StyledFooter className="footer">
      <Container>
        <span className="copyright">
          © {new Date().getFullYear()} {about.username}.
        </span>
      </Container>
    </StyledFooter>
  );
}

export default Footer;

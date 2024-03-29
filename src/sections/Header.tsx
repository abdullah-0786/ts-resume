import React from 'react';
import { Scroller } from '../components';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import details from '../data/details';
import { NavbarVisibilityContextProps, useNavbarVisibility } from '../contexts';

const Logo = styled.span({
  color: '#fff',
  fontSize: '36px',
  fontFamily: 'Rubik, sans-serif',
  fontWeight: 700,
  lineHeight: '36px',
});

const Dot = styled.span({
  color: '#006B38FF',
  // color: '#ff4c60',
  display: 'inline',
});

function Header() {
  const { navbarVisibility } = useNavbarVisibility() as NavbarVisibilityContextProps;

  return (
    <header
      className="kd-header fixed-top"
      style={{
        opacity: navbarVisibility ? '1' : '0',
        transition: 'all .2s',
        visibility: navbarVisibility ? 'visible' : 'hidden',
      }}
    >
      <Navbar id="navbar" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="nav-logo">
            <Logo>
              {details.firstName}
              <Dot>{details.middleName}</Dot>
              {details.lastName}
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="ms-auto" as="ul">
              <Nav.Item as="li">
                <Scroller href="#home" className="nav-link">
                  Home
                </Scroller>
              </Nav.Item>
              <Nav.Item as="li">
                <Scroller href="#about" className="nav-link">
                  About
                </Scroller>
              </Nav.Item>
              <Nav.Item as="li">
                <Scroller href="#education" className="nav-link">
                  Education &amp; Experience
                </Scroller>
              </Nav.Item>
              {/* <Nav.Item as="li">
                  <Scroller href="#recommendations" className="nav-link">Recommendations</Scroller>
                </Nav.Item> */}
              <Nav.Item as="li">
                <Scroller href="#skills" className="nav-link">
                  Skills
                </Scroller>
              </Nav.Item>
              <Nav.Item as="li">
                <Scroller href="#projects" className="nav-link">
                  Projects
                </Scroller>
              </Nav.Item>
              <Nav.Item as="li">
                <Scroller href="#contact" className="nav-link">
                  Contact
                </Scroller>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

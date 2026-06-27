import React from 'react';
import { Scroller } from '../components';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import details from '../data/details';
import { NavbarVisibilityContextProps, useNavbarVisibility, ThemeContextProps, useTheme } from '../contexts';

const ThemeToggle = styled.button({
  background: 'transparent',
  border: 'none',
  color: 'var(--nav-text)',
  fontSize: '20px',
  cursor: 'pointer',
  padding: 0,
  lineHeight: 1,
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'color 0.2s ease, transform 0.2s ease',
  '&:hover': { color: 'var(--accent)', transform: 'scale(1.1)' },
});

const Logo = styled.span({
  color: 'var(--nav-text)',
  fontSize: '36px',
  fontFamily: 'Rubik, sans-serif',
  fontWeight: 700,
  lineHeight: '36px',
  transition: 'color 0.3s ease',
});

const Dot = styled.span({
  color: 'var(--accent)',
  display: 'inline',
});

function Header() {
  const { navbarVisibility } = useNavbarVisibility() as NavbarVisibilityContextProps;
  const { theme, toggleTheme } = useTheme() as ThemeContextProps;

  return (
    <header
      className="kd-header fixed-top"
      style={{
        opacity: navbarVisibility ? '1' : '0',
        transition: 'all .2s',
        visibility: navbarVisibility ? 'visible' : 'hidden',
      }}
    >
      <Navbar id="navbar" expand="lg" variant={theme === 'dark' ? 'dark' : 'light'}>
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
              <Nav.Item as="li" className="d-flex align-items-center">
                <ThemeToggle
                  type="button"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                </ThemeToggle>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

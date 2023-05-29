import React from 'react';
import { Header, Home, Footer, About, Education, Experience, Contact, Skills, Projects } from '../sections';
import { Row, Col, Container } from 'react-bootstrap';
import ScrollTopArrow from './ScrollTopArrow';

import '../components/Icons';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Container>
          <Row>
            <Col md={6}>
              <Experience />
            </Col>
            <Col md={6}>
              <Education />
            </Col>
          </Row>
        </Container>
        {/* <Services /> */}
        {/* <Review /> */}
        {/* <Tools /> */}
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTopArrow />
    </>
  );
}

export default App;

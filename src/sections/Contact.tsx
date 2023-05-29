import React, { useRef } from 'react';
import { Section } from '../components';
import { Row, Col, Button, Form } from 'react-bootstrap';
import contact, { email } from '../data/contact';

function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const senderRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const handleEmailClick = () => {
    const name = nameRef.current?.value ?? '';
    const sender = senderRef.current?.value ?? '';
    const subject = subjectRef.current?.value ?? '';
    const body = bodyRef.current?.value ?? '';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `***** Information Received from Resume Site Contact Us *****\n\nName: ${name}\nEmail: ${sender}\n\n${body}\n\nRegards ${name}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact" title="Get In Touch">
      <Row>
        <Col md={4}>
          <div className="contact-info">
            <h3>{contact.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: contact.subTitle }} />
          </div>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4" controlId="inputName">
                <Form.Control ref={nameRef} type="text" className="kd-form-control" placeholder="Your name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4" controlId="inputEmail">
                <Form.Control ref={senderRef} type="email" className="kd-form-control" placeholder="Email address" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group className="mb-4" controlId="inputSubject">
                <Form.Control ref={subjectRef} type="text" className="kd-form-control" placeholder="Subject" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group className="mb-4" controlId="inputMessage">
                <Form.Control ref={bodyRef} as="textarea" className="kd-form-control" placeholder="Message" style={{ height: '150px' }} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button variant="kd" onClick={handleEmailClick}>
                Send Message
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default Contact;

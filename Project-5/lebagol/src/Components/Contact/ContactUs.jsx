import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsEnvelope, BsClock, BsGeoAlt, BsArrowRight } from 'react-icons/bs';

const ContactFormSection = () => {
  return (
    <Container fluid style={{ padding: '60px 100px', fontFamily: 'Kalnia, sans-serif' }}>
      <Row>
        {/* Left Column - Form */}
        <Col lg={8} style={{ paddingRight: '40px' }}>
          <h2 style={{ fontWeight: 500, fontSize: '35px', marginBottom: '10px' }}>Get In Touch</h2>
          <p
            style={{
              marginBottom: '30px',
              color: '#5c5c5c',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
            }}
          >
            Your email address will not be published. Required fields are marked{' '}
            <span style={{ color: 'red' }}>*</span>
          </p>

          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Your Name *"
                style={{
                  padding: '18px',
                  borderRadius: 0,
                  border: '1px solid #ddd',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '16px',
                }}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email Address *"
                style={{
                  padding: '18px',
                  borderRadius: 0,
                  border: '1px solid #ddd',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '16px',
                }}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Your Message *"
                style={{
                  padding: '18px',
                  borderRadius: 0,
                  border: '1px solid #ddd',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '16px',
                }}
              />
            </Form.Group>

            <Button
              type="submit"
              style={{
                backgroundColor: '#e60000',
                border: 'none',
                borderRadius: '35px',
                padding: '12px 30px',
                fontWeight: 500,
                fontSize: '18px',
                color: '#fff',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              <BsArrowRight style={{ marginRight: '10px' }} />
              Post Message
            </Button>
          </Form>
        </Col>

        {/* Right Column - Contact Info */}
        <Col lg={4}>
          {[
            {
              icon: <BsEnvelope size={24} color="#e60000" />,
              title: 'Contact Us',
              lines: [
                <>
                  Call us:{' '}
                  <span style={{ color: '#e60000', fontWeight: '600' }}>
                    +(406) 555–0120
                  </span>
                </>,
                'Email: support@example.com',
              ],
            },
            {
              icon: <BsClock size={24} color="#e60000" />,
              title: 'Opening Hours',
              lines: ['Mon – Sat: 7.00 am – 8.00 pm', 'Sunday: 8.00 am – 6.00 pm'],
            },
            {
              icon: <BsGeoAlt size={24} color="#e60000" />,
              title: 'Our Office',
              lines: ['2972 Westheimer Rd. Santa', 'Ana, Illinois, USA'],
            },
          ].map((item, idx) => (
            <div key={idx} className="mb-5 d-flex align-items-start gap-3">
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: '1px solid #f1f1f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h5 style={{ fontWeight: 500 ,fontSize: "25px"}}>{item.title}</h5>
                {item.lines.map((line, i) => (
                  <p
                    key={i}
                    style={{
                      margin: 0,
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '17px',
                      color: '#555555',
                      latterSpacing: '0.5px',
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactFormSection;

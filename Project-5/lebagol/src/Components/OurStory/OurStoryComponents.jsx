import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OurStoryBg from '../../assets/blog_bc.jpg'; 

const OurStory = () => {
  return (
    <div style={{ backgroundColor: '#fff', fontFamily: 'DM Sans, sans-serif' }}>
      
      {/* Hero Section */}
      <div
        style={{
          width: '100%',
          height: '290px',
          backgroundImage: `url(${OurStoryBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '100px',
            paddingBottom: '100px',
          }}
        >
          <h1
            className="text-white fw-bold mb-2"
            style={{ fontFamily: 'Kalnia, serif', fontSize: '48px' }}
          >
            Our Story
          </h1>
          <p className="text-white fs-6">
            <span
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s ease, text-decoration 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.color = 'red';
                e.target.style.textDecoration = 'underline';
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'white';
                e.target.style.textDecoration = 'none';
              }}
            >
              Home Page
            </span>{' '}
            / Our Story
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-5">
        <Container>
          <Row className="gy-5">
            {/* Our Company */}
            <Col xs={12} md={4}>
              <h2 className="fw-bold" style={{ fontSize: '32px' }}>Our company</h2>
              <p className="fw-semibold">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
              </p>
              <ul style={{ paddingLeft: '1rem', listStyleType: 'none' }}>
                <li>✔ Top quality products</li>
                <li>✔ Best customer service</li>
                <li>✔ 30–days money back guarantee</li>
              </ul>
            </Col>

            {/* Our Team */}
            <Col xs={12} md={4}>
              <h2 className="fw-bold" style={{ fontSize: '32px' }}>Our team</h2>
              <p className="fw-semibold">Lorem set sint occaecat cupidatat non</p>
              <p>
                Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </Col>

            {/* Testimonials */}
            <Col xs={12} md={4}>
              <h2 className="fw-bold" style={{ fontSize: '32px' }}>Testimonials</h2>
              <p>
                “Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.”
              </p>
              <p className="fw-semibold">Lorem ipsum dolor sit</p>

              <p>
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.”
              </p>
              <p className="fw-semibold">Ipsum dolor sit</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurStory;

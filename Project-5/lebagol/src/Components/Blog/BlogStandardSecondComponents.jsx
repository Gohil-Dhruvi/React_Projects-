import React from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import BlogSidebar from '../Blog/BlogSideComponents';
import cardData from './CardData';

function BlogStandardSecond() {
  const categories = ['Food News', 'Food Reviews'];

  return (
    <Container fluid className="my-5">
      <Row>
        {/* LEFT CONTENT AREA */}
        <Col lg={9} md={12}>
          <Row className="g-4">
            {cardData.map((card) => (
              <Col key={card.id} lg={12}>
                <Card className="h-100 border-0">
                  <div className="position-relative" style={{ overflow: 'hidden' }}>
                    <Card.Img
                      src={card.mainImage}
                      alt="Main"
                      style={{ objectFit: 'cover', width: '100%', height: '506px' }}
                    />
                    <Button
                      variant="light"
                      className="position-absolute top-0 start-0 m-4 px-3 p-0 border text-danger bg-white fs-6 fw-semibold rounded-4 text-uppercase"
                      onMouseOver={(e) => {
                        e.target.classList.replace('text-danger', 'text-white');
                        e.target.classList.replace('bg-white', 'bg-danger');
                        e.target.classList.add('border-0');
                      }}
                      onMouseOut={(e) => {
                        e.target.classList.replace('text-white', 'text-danger');
                        e.target.classList.replace('bg-danger', 'bg-white');
                        e.target.classList.remove('border-0');
                      }}
                    >
                      {card.category}
                    </Button>
                  </div>

                  <Card.Body>
                    <Card.Title>
                      <Row className="align-items-center mb-3">
                        <Col xs="auto">
                          <Image src={card.userImage} alt="User" roundedCircle width={40} height={40} />
                        </Col>
                        <Col className="fs-6 text-secondary">
                          <span>By </span>
                          <span
                            className="pe-3"
                            style={{ color: 'red', transition: 'color 0.3s', cursor: 'pointer' }}
                            onMouseOver={(e) => (e.target.style.color = 'black')}
                            onMouseOut={(e) => (e.target.style.color = 'red')}
                          >
                            {card.author}
                          </span>
                          <span
                            className="pe-3"
                            style={{ color: '#6c757d', transition: 'color 0.3s', cursor: 'pointer' }}
                            onMouseOver={(e) => (e.target.style.color = 'black')}
                            onMouseOut={(e) => (e.target.style.color = '#6c757d')}
                          >
                            {card.date}
                          </span>
                        </Col>
                      </Row>
                    </Card.Title>

                    <Card.Text
                      className="fw-bold fs-3"
                      style={{
                        fontFamily: 'DM Sans',
                        transition: 'color 0.3s',
                        cursor: 'pointer'
                      }}
                      onMouseOver={(e) => (e.target.style.color = 'red')}
                      onMouseOut={(e) => (e.target.style.color = 'black')}
                    >
                      {card.title}
                    </Card.Text>

                    <Card.Text className="text-secondary">{card.description}</Card.Text>

                    <Link
                      to={`/blog/${card.id}`}
                      className="fw-semibold text-decoration-none d-inline-flex align-items-center"
                      style={{ color: 'black', transition: 'color 0.3s' }}
                      onMouseOver={(e) => (e.target.style.color = 'red')}
                      onMouseOut={(e) => (e.target.style.color = 'black')}
                    >
                      <FaArrowRight style={{ color: 'red', marginRight: '5px' }} />
                      Read More
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* RIGHT SIDEBAR */}
        <Col lg={3} md={12} className="d-none d-lg-block">
          <BlogSidebar categories={categories} />
        </Col>
      </Row>
    </Container>
  );
}

export default BlogStandardSecond;

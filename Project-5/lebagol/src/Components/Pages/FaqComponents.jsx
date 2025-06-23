import { useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import bgImage from '../../assets/blog_bc.jpg'; 

const FaqComp = () => {
  const [activeKey, setActiveKey] = useState("");

  const faq = [
    { question: "What about payment security ?", answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "When should I receive my shipment?", answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "What happens to my shipment if I cancel?", answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.." },
    { question: "What are some types of projects you enjoy?", answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "What is included in your service?", answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "What warranties do I have for my shipments?", answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "Can I get payment terms?", answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "Accurate responses to client’s requirements", answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "How can I track my shipments?", answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "What payment methods are supported?", answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." }
  ];

  const left = faq.slice(0, 5);
  const right = faq.slice(5, 10);

  const handleToggle = (key) => {
    setActiveKey(prevKey => (prevKey === key ? "" : key));
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          width: '100%',
          height: '290px',
          backgroundImage: `url(${bgImage})`,
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
            style={{ fontFamily: 'Kalnia, sans-serif' }}
          >
            FAQ's
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
            </span>{" "}
            / FAQ's
          </p>
        </div>
      </div>

       {/* FAQ Section */}
      <div className="bg-white py-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        <Container>
          {/* Section Heading */}
          <h2 className="text-center fw-semibold mb-5" style={{ fontSize: '34px', color: '#333' }}>
            Frequently asked questions from our support
          </h2>
          <Row>
            {[left, right].map((section, colIndex) => (
              <Col xs={12} md={6} key={colIndex}>
                <Accordion activeKey={activeKey}>
                  {section.map((item, index) => {
                    const actualIndex = colIndex === 0 ? index : index + 5;
                    return (
                      <Accordion.Item
                        eventKey={actualIndex.toString()}
                        key={actualIndex}
                        className="mb-3"
                      >
                         <Accordion.Header onClick={() => handleToggle(actualIndex.toString())}>
                          <span className="fw-bold fs-6">{item.question}</span>
                        </Accordion.Header>
                        <Accordion.Body style={{
                          color: '#555555',
                          fontSize: '16px',
                          lineHeight: 1.6,
                        }}>
                          {item.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FaqComp;

// src/Components/Footer.jsx
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase">BookMyShow</h5>
            <p>Your ultimate destination for movies, shows, and entertainment!</p>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="text-uppercase">Explore</h6>
            <ul className="list-unstyled">
              <li>Movies</li>
              <li>Events</li>
              <li>Plays</li>
              <li>Sports</li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="text-uppercase">Support</h6>
            <ul className="list-unstyled">
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} BookMyShow Clone. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <Container>
        <Row className="mb-4">
          {/* Logo & Description */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="text-uppercase mb-3">BookMyShow</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Your one-stop destination for movies, events, plays, and more.
              Book tickets instantly and enjoy seamless entertainment.
            </p>
            <div className="d-flex gap-3 mt-3">
              <FaFacebookF className="text-light fs-5" />
              <FaTwitter className="text-light fs-5" />
              <FaInstagram className="text-light fs-5" />
              <FaYoutube className="text-light fs-5" />
            </div>
          </Col>

          {/* Explore */}
          <Col md={3} sm={6} className="mb-4">
            <h6 className="text-uppercase mb-3">Explore</h6>
            <ul className="list-unstyled" style={{ fontSize: "14px" }}>
              <li>Now Showing</li>
              <li>Coming Soon</li>
              <li>Events</li>
              <li>Plays</li>
              <li>Sports</li>
            </ul>
          </Col>

          {/* Support */}
          <Col md={3} sm={6} className="mb-4">
            <h6 className="text-uppercase mb-3">Support</h6>
            <ul className="list-unstyled" style={{ fontSize: "14px" }}>
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Customer Care</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3} sm={6} className="mb-4">
            <h6 className="text-uppercase mb-3">Contact</h6>
            <p style={{ fontSize: "14px" }}>
              Email: support@bookmyshow.com
              <br />
              Phone: +91 99999 99999
              <br />
              Mumbai, India
            </p>
          </Col>
        </Row>

        <hr className="bg-light" />
        <Row>
          <Col className="text-center py-2" style={{ fontSize: "13px" }}>
            &copy; {new Date().getFullYear()} BookMyShow Clone. Made with ❤️ by Dhruvi Gohil. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

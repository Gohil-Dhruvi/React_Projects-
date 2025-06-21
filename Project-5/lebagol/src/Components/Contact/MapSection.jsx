import { Container, Row, Col } from "react-bootstrap";

const MapSection = () => {
  return (
    <Container fluid className="px-0">
      <Row className="gx-0">
        <Col className="px-0">
          <div
            style={{
              width: "100%",
              height: "600px",
              overflow: "hidden",
              borderBottom: "3px solid red",
            }}
          >
            <iframe
              title="Sarthana Surat Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.750559019446!2d72.88673507502497!3d21.20421558047256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbbba6e16a1%3A0x5b18cf1cb8ec0f52!2sSarthana%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1718096282753!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MapSection;

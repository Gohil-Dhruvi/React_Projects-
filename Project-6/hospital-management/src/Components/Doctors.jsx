import { Container, Row, Col, Card } from "react-bootstrap";

const doctors = [
  { id: 1, name: "Dr. Priya Sharma", specialty: "Cardiologist", email: "priya@hospital.com" },
  { id: 2, name: "Dr. Arjun Mehta", specialty: "Neurologist", email: "arjun@hospital.com" },
  { id: 3, name: "Dr. Sneha Verma", specialty: "Pediatrician", email: "sneha@hospital.com" },
];

const Doctors = () => (
  <Container className="mb-5">
    <h2 className="text-center text-primary mb-4 fw-bold">Our Doctors</h2>
    <Row>
      {doctors.map(doc => (
        <Col key={doc.id} sm={12} md={6} lg={4} className="mb-4">
          <Card className="shadow-lg border-0 h-100">
            <Card.Body>
              <Card.Title className="text-success">{doc.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{doc.specialty}</Card.Subtitle>
              <Card.Text><strong>Email:</strong> {doc.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Doctors;

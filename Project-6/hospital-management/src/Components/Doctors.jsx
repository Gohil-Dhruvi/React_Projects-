import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaHospitalAlt, FaStar } from "react-icons/fa";
import doctor1 from "../assets/Cardiologist.webp";
import doctor2 from "../assets/Neurologist.webp";
import doctor3 from "../assets/Pediatrician.webp";
import doctor4 from "../assets/Orthopedic.webp";
import doctor5 from "../assets/Dermatologist.webp";
import doctor6 from "../assets/ENTSpecialist.webp";

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    email: "priya@hospital.com",
    phone: "9876543210",
    experience: "10+ years",
    hospital: "Apollo Hospital",
    availability: "Mon - Fri",
    rating: 4.8,
    image: doctor1,
  },
  {
    id: 2,
    name: "Dr. Arjun Mehta",
    specialty: "Neurologist",
    email: "arjun@hospital.com",
    phone: "9876543222",
    experience: "12+ years",
    hospital: "Medicity Hospital",
    availability: "Mon - Sat",
    rating: 4.9,
    image: doctor2,
  },
  {
    id: 3,
    name: "Dr. Sneha Verma",
    specialty: "Pediatrician",
    email: "sneha@hospital.com",
    phone: "9876543233",
    experience: "8+ years",
    hospital: "Care Hospital",
    availability: "Tue - Sun",
    rating: 4.7,
    image: doctor3,
  },
  {
    id: 4,
    name: "Dr. Ravi Patel",
    specialty: "Orthopedic",
    email: "ravi@hospital.com",
    phone: "9876543244",
    experience: "9+ years",
    hospital: "Global Hospital",
    availability: "Mon - Fri",
    rating: 4.6,
    image: doctor4,
  },
  {
    id: 5,
    name: "Dr. Nisha Kapoor",
    specialty: "Dermatologist",
    email: "nisha@hospital.com",
    phone: "9876543255",
    experience: "11+ years",
    hospital: "SkinCare Clinic",
    availability: "Wed - Sun",
    rating: 4.9,
    image: doctor5,
  },
  {
    id: 6,
    name: "Dr. Aman Gupta",
    specialty: "ENT Specialist",
    email: "aman@hospital.com",
    phone: "9876543266",
    experience: "7+ years",
    hospital: "City Hospital",
    availability: "Mon - Sat",
    rating: 4.5,
    image: doctor6,
  },
];

const Doctors = () => (
  <Container className="my-5">
    <h2 className="text-center text-primary fw-bold mb-4">Meet Our Experienced Doctors</h2>
    <Row>
      {doctors.map((doc) => (
        <Col key={doc.id} sm={12} md={6} lg={4} className="mb-4">
          <Card className="shadow-lg border-0 h-100">
            <Card.Img
              variant="top"
              src={doc.image}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="text-success fs-4">{doc.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{doc.specialty}</Card.Subtitle>

              <Card.Text className="mb-1">
                <FaEnvelope className="me-2 text-danger" />
                {doc.email}
              </Card.Text>

              <Card.Text className="mb-1">
                <FaPhone className="me-2 text-primary" />
                {doc.phone}
              </Card.Text>

              <Card.Text className="mb-1">
                <FaHospitalAlt className="me-2 text-success" />
                {doc.hospital}
              </Card.Text>

              <Card.Text className="mb-1">
                <strong>Experience:</strong> {doc.experience}
              </Card.Text>

              <Card.Text className="mb-1">
                <strong>Available:</strong>{" "}
                <Badge bg="info" text="dark">
                  {doc.availability}
                </Badge>
              </Card.Text>

              <Card.Text>
                <strong>Rating:</strong>{" "}
                <Badge bg="warning" text="dark">
                  {doc.rating}
                </Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Doctors;

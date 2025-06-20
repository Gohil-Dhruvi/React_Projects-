import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Navbar,
  Nav,
  Row,
  Carousel,
} from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import iImage from "../assets/i.webp";
import i2Image from "../assets/healthcare.webp";
import i3Image from "../assets/human-hospital.webp";
import "./HospitalManagement.css"

const getStorageData = () => {
  return JSON.parse(localStorage.getItem("patients")) || [];
};

const HospitalManagement = () => {
  const initialState = {
    id: "",
    name: "",
    age: "",
    email: "",
    gender: "",
    contact: "",
    disease: "",
    doctor: "",
  };

  const [form, setForm] = useState(initialState);
  const [patients, setPatients] = useState(getStorageData());
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      const updated = patients.map((p) => (p.id === form.id ? form : p));
      setPatients(updated);
      setIsEdit(false);
    } else {
      const id = generateUniqueId({ length: 6, useLetters: false });
      const newPatient = { ...form, id };
      setPatients([...patients, newPatient]);
    }
    setForm(initialState);
  };

  const handleDelete = (id) => {
    const updated = patients.filter((p) => p.id !== id);
    setPatients(updated);
  };

  const handleEdit = (id) => {
    const found = patients.find((p) => p.id === id);
    setForm(found);
    setIsEdit(true);
  };

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">🏥 Hospital Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#">Dashboard</Nav.Link>
              <Nav.Link href="#">Patients</Nav.Link>
              <Nav.Link href="#">Doctors</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Container className="mb-5">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src={iImage}
              alt="First slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>24/7 Medical Support</h3>
              <p>Compassionate care for everyone.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src={i2Image}
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Expert Doctors</h3>
              <p>Your health is our top priority.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src={i3Image}
              alt="Third slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Modern Facilities</h3>
              <p>We ensure the best technology for treatment.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Form */}
      <Container>
        <h2 className="text-center text-primary mb-4 fw-bold">
          {isEdit ? "✏️ Edit Patient" : "➕ Add New Patient"}
        </h2>
        <Row className="mb-5">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="shadow border-0">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      name="age"
                      value={form.age}
                      onChange={handleChange}
                      placeholder="Enter age"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <div>
                      <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        type="radio"
                        value="Male"
                        checked={form.gender === "Male"}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        type="radio"
                        value="Female"
                        checked={form.gender === "Female"}
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control
                      type="text"
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="Enter contact number"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Disease</Form.Label>
                    <Form.Control
                      type="text"
                      name="disease"
                      value={form.disease}
                      onChange={handleChange}
                      placeholder="Enter disease"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Doctor Assigned</Form.Label>
                    <Form.Control
                      type="text"
                      name="doctor"
                      value={form.doctor}
                      onChange={handleChange}
                      placeholder="Enter doctor’s name"
                      required
                    />
                  </Form.Group>

                  <Button
                    variant={isEdit ? "warning" : "primary"}
                    type="submit"
                    className="w-100"
                  >
                    {isEdit ? "Update Patient" : "Add Patient"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Patient Records */}
        <Row className="mt-4">
          <h3 className="text-center mb-4 text-secondary">Patient Records</h3>
          {patients.length > 0 ? (
            patients.map((p) => (
              <Col key={p.id} xs={12} sm={6} md={4} className="mb-4">
                <Card className="shadow-lg border-0 h-100">
                  <Card.Body>
                    <h5 className="fw-bold text-primary">
                      {p.name} <span className="text-muted">(ID: {p.id})</span>
                    </h5>
                    <hr />
                    <p><strong>Age:</strong> {p.age}</p>
                    <p><strong>Email:</strong> {p.email}</p>
                    <p><strong>Gender:</strong> {p.gender}</p>
                    <p><strong>Contact:</strong> {p.contact}</p>
                    <p><strong>Disease:</strong> {p.disease}</p>
                    <p><strong>Doctor:</strong> {p.doctor}</p>
                    <div className="d-flex justify-content-between mt-3">
                      <Button
                        variant="outline-warning"
                        size="sm"
                        onClick={() => handleEdit(p.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete(p.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center text-muted">No patient data found.</p>
            </Col>
          )}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">&copy; {new Date().getFullYear()} Hospital Management System</p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <Nav className="justify-content-end">
                <Nav.Link href="#" className="text-light px-2">Privacy</Nav.Link>
                <Nav.Link href="#" className="text-light px-2">Terms</Nav.Link>
                <Nav.Link href="#" className="text-light px-2">Help</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default HospitalManagement;

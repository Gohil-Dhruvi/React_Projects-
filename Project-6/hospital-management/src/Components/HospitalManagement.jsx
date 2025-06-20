import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Card, Form, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import generateUniqueId from "generate-unique-id";
import iImage from "../assets/healthmetter.png";
import i2Image from "../assets/modern.png";
import i3Image from "../assets/support.png";

const STORAGE_KEY = "patients_data";
const getStorage = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const HospitalManagement = () => {
  const initial = { id: "", name: "", age: "", email: "", gender: "", contact: "", disease: "", doctor: "" };
  const [form, setForm] = useState(initial);
  const [patients, setPatients] = useState(getStorage());
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(patients)), [patients]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (isEdit) {
      setPatients(patients.map(p => p.id === form.id ? form : p));
    } else {
      setPatients([...patients, { ...form, id: generateUniqueId({ length: 6, useLetters: false }) }]);
    }
    setForm(initial);
    setIsEdit(false);
  };
  const handleEdit = id => {
    setForm(patients.find(p => p.id === id));
    setIsEdit(true);
  };
  const handleDelete = id => {
    if (window.confirm("Delete this patient?")) {
      setPatients(patients.filter(p => p.id !== id));
    }
  };

  return (
    <Container>
      <Carousel fade className="mb-5">
        {[iImage, i2Image, i3Image].map((img, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 rounded"
              src={img}
              alt={`slide${i}`}
              style={{ height: "400px", objectFit: "cover" }}
            />

            <Carousel.Caption>
              <h3>{["24/7 Support", "Expert Doctors", "Modern Facilities"][i]}</h3>
              <p>{["Compassionate care", "Your health matters", "Latest technology"][i]}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="text-center text-primary mb-4 fw-bold">
        {isEdit ? "Edit Patient" : "Add New Patient"}
      </h2>

      <Row className="mb-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow border-0">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                {["name", "age", "email", "contact", "disease", "doctor"].map((f, i) => (
                  <Form.Group key={i} className="mb-3">
                    <Form.Label>{f.charAt(0).toUpperCase() + f.slice(1)}</Form.Label>
                    <Form.Control
                      type={f === "age" ? "number" : f === "email" ? "email" : "text"}
                      name={f} value={form[f]} onChange={handleChange}
                      placeholder={`Enter ${f}`} required
                    />
                  </Form.Group>
                ))}
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <div>
                    {["Male", "Female"].map(g => (
                      <Form.Check inline key={g}
                        name="gender" type="radio" label={g}
                        value={g} checked={form.gender === g}
                        onChange={handleChange} />
                    ))}
                  </div>
                </Form.Group>

                <Button variant={isEdit ? "warning" : "primary"} type="submit" className="w-100">
                  {isEdit ? "Update Patient" : "Add Patient"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="text-center mb-4 text-secondary">Patient Records</h3>
      <Row>
        {patients.length ? patients.map(p => (
          <Col key={p.id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="shadow-lg border-0 h-100">
              <Card.Body>
                <h5 className="fw-bold text-primary">
                  {p.name} <span className="text-muted">(ID: {p.id})</span>
                </h5>
                <hr />
                {Object.keys(p).filter(k => k !== "id").map(k => (
                  <p key={k}><strong>{k.charAt(0).toUpperCase() + k.slice(1)}:</strong> {p[k]}</p>
                ))}
                <div className="d-flex justify-content-between mt-3">
                  <Button size="sm" variant="outline-warning" onClick={() => handleEdit(p.id)}>
                    <FaEdit /> Edit
                  </Button>
                  <Button size="sm" variant="outline-danger" onClick={() => handleDelete(p.id)}>
                    <FaTrash /> Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )) : (
          <Col><p className="text-center text-muted">No patient data found.</p></Col>
        )}
      </Row>
    </Container>
  );
};

export default HospitalManagement;

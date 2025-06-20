import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import generateUniqueId from "generate-unique-id";

const STORAGE_KEY = "patients_data";

const getStorageData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const Patients = () => {
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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
  }, [patients]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      setPatients(patients.map((p) => (p.id === form.id ? form : p)));
      setIsEdit(false);
    } else {
      const newPatient = { ...form, id: generateUniqueId({ length: 6, useLetters: false }) };
      setPatients([...patients, newPatient]);
    }

    setForm(initialState);
  };

  const handleEdit = (id) => {
    const selected = patients.find((p) => p.id === id);
    if (selected) {
      setForm(selected);
      setIsEdit(true);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this patient?")) {
      setPatients(patients.filter((p) => p.id !== id));
    }
  };

  return (
    <Container className="mb-5">
      <h2 className="text-center text-primary mb-4 fw-bold">
        {isEdit ? "Edit Patient" : "Add New Patient"}
      </h2>

      <Row className="mb-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow border-0">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                {["name", "age", "email", "contact", "disease", "doctor"].map((field, i) => (
                  <Form.Group className="mb-3" key={i}>
                    <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                    <Form.Control
                      type={field === "age" ? "number" : field === "email" ? "email" : "text"}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      placeholder={`Enter ${field}`}
                      required
                    />
                  </Form.Group>
                ))}

                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <div>
                    {["Male", "Female"].map((g) => (
                      <Form.Check
                        inline
                        key={g}
                        type="radio"
                        name="gender"
                        label={g}
                        value={g}
                        checked={form.gender === g}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                </Form.Group>

                <Button type="submit" variant={isEdit ? "warning" : "primary"} className="w-100">
                  {isEdit ? "Update Patient" : "Add Patient"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="text-center text-secondary mb-4">Patient Records</h3>
      <Row>
        {patients.length > 0 ? (
          patients.map((p) => (
            <Col key={p.id} xs={12} sm={6} md={4} className="mb-4">
              <Card className="shadow-lg border-0 h-100">
                <Card.Body>
                  <h5 className="fw-bold text-primary">
                    {p.name} <span className="text-muted">(ID: {p.id})</span>
                  </h5>
                  <hr />
                  {Object.entries(p)
                    .filter(([key]) => key !== "id")
                    .map(([key, value]) => (
                      <p key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                      </p>
                    ))}
                  <div className="d-flex justify-content-between mt-3">
                    <Button variant="outline-warning" size="sm" onClick={() => handleEdit(p.id)}>
                      <FaEdit /> Edit
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(p.id)}>
                      <FaTrash /> Delete
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
  );
};

export default Patients;

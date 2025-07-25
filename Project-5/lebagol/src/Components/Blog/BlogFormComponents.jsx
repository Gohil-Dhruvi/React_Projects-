import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

function LeaveReplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comments: '',
    saveInfo: false,
  });

  <style>
        {`

          .reply-btn-custom {
            background-color: #dc3545;
            color: white;
            border: none;
            transition: background-color 0.3s;
            padding: 5px 12px;
            font-size: 14px;
          }

          .reply-btn-custom:hover {
            background-color: black;
          }
        `}
      </style>

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const redFocusStyle = {
    borderColor: 'red',
    boxShadow: '0 0 0 0.2rem rgba(220, 53, 69, 0.25)',
  };

  return (
    <Container className="my-5">
      <h4 className="mb-2 fw-bold">Leave a Reply</h4>
      <p className="text-muted mb-4">
        Your email address will not be published. Required fields are marked{' '}
        <span className="text-danger">*</span>
      </p>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col xs={12} sm={12} md={6} lg={4} className="mb-3 mb-md-0">
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                onFocus={(e) => (e.target.style = redFocusStyle)}
                onBlur={(e) => (e.target.style = {})}
              />
            </Form.Group>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="mb-3 mb-md-0">
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                onFocus={(e) => (e.target.style = redFocusStyle)}
                onBlur={(e) => (e.target.style = {})}
              />
            </Form.Group>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4}>
            <Form.Group controlId="formWebsite">
              <Form.Control
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                onFocus={(e) => (e.target.style = redFocusStyle)}
                onBlur={(e) => (e.target.style = {})}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formComments">
          <Form.Control
            as="textarea"
            name="comments"
            rows={4}
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            required
            onFocus={(e) => (e.target.style = redFocusStyle)}
            onBlur={(e) => (e.target.style = {})}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex align-items-start flex-column flex-md-row gap-2"
          controlId="formCheckbox"
        >
          <Form.Check
            type="checkbox"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleChange}
          />
          <Form.Label className="mb-0">
            Save my name, email, and website in this browser for the next time I comment.
          </Form.Label>
        </Form.Group>

        <Button type="submit" variant="danger" className="reply-btn-custom d-flex align-items-center gap-2 p-3 rounded-5">
          <FaArrowRight /> Post Comment
        </Button>
      </Form>
    </Container>
  );
}

export default LeaveReplyForm;

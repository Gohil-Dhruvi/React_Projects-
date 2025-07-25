import { useState, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInAsync } from "../Services/actions/userActions";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, errMSG } = useSelector((state) => state.userReducer);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setValidated(true);
      return;
    }

    // Dispatch Redux sign in
    dispatch(signInAsync(form));

    // Check local fallback
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: form.email, loggedIn: true })
      );
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow">
            <Card.Body>
              <h3 className="text-center mb-4">Sign In</h3>
              {errMSG && <p className="text-danger text-center">{errMSG}</p>}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid">
                    Please enter your password.
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid mt-4">
                  <Button type="submit" variant="danger" size="lg">
                    Login
                  </Button>
                </div>
              </Form>
              <div className="mt-3 text-center text-muted">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;

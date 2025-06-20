import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Layout = ({ children }) => (
  <>
    <Navbar expand="lg" variant="dark" className="mb-4 navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
         <img
        src={logo}
        alt="Hospital Logo"
        height="30"
        width="30"
        style={{ borderRadius: "5px", objectFit: "cover" }}
      />
        <span>Hospital Management</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/patients">Patients</Nav.Link>
            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {children}

    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} Hospital Management System</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-end">
              {["Privacy", "Terms", "Help"].map((label, i) => (
                <Nav.Link key={i} href="#" className="text-light px-2">{label}</Nav.Link>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  </>
);

export default Layout;

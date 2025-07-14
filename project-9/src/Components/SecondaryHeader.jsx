// src/Components/SecondaryHeader.jsx
import { Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SecondaryHeader = () => {
  return (
    <div className="bg-white border-bottom shadow-sm">
      <Container className="px-4">
        <Nav className="fw-semibold py-2">
          <Nav.Link as={Link} to="/" className="text-dark">
            Movies
          </Nav.Link>
          <Nav.Link as={Link} to="/events" className="text-dark">
            Events
          </Nav.Link>
          <Nav.Link as={Link} to="/plays" className="text-dark">
            Plays
          </Nav.Link>
          <Nav.Link as={Link} to="/sports" className="text-dark">
            Sports
          </Nav.Link>
          <Nav.Link as={Link} to="/activities" className="text-dark">
            Activities
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
};

export default SecondaryHeader;

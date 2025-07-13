import { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  InputGroup,
  Image,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [location, setLocation] = useState("Detecting...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Not Supported");
      setLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            const city =
              data?.address?.city ||
              data?.address?.town ||
              data?.address?.state ||
              "Unknown";
            setLocation(city);
          } catch (err) {
            console.error("Error fetching location:", err);
            setLocation("Unavailable");
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocation("Permission Denied");
          setLoading(false);
        }
      );
    }
  }, []);

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-2">
      <Container fluid className="px-4">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Image
            src="https://in.bmscdn.com/webin/common/icons/logo.svg"
            alt="BookMyShow Logo"
            height="40"
            className="me-2"
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          {/* Navigation Links */}
          <Nav className="me-auto fw-semibold">
            <Nav.Link as={Link} to="/" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/add-movie" className="text-dark">
              Add Movie
            </Nav.Link>
            <Nav.Link as={Link} to="/my-bookings" className="text-dark">
              My Bookings
            </Nav.Link>
          </Nav>

          {/* Center Search */}
          <Form className="d-none d-lg-flex mx-auto w-50">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports"
                className="rounded-start-pill"
              />
              <Button variant="danger" className="rounded-end-pill px-4">
                Search
              </Button>
            </InputGroup>
          </Form>

          {/* Right Side: Location + Sign In */}
          <Nav className="ms-auto align-items-center gap-2">
            <Button
              variant="outline-dark"
              className="rounded-pill d-none d-md-block px-3"
              title="Your Current Location"
            >
              📍{" "}
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                location
              )}
            </Button>
            <Button
              as={Link}
              to="/signin"
              variant="danger"
              className="rounded-pill px-4"
            >
              Sign In
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

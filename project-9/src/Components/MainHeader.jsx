// src/Components/MainHeader.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Form, Dropdown, Button, Image } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import Menu from "./Menu";
import logo from "../assets/logo.png";

const MainHeader = () => {
  const [location, setLocation] = useState("Select City");
  const [showMenu, setShowMenu] = useState(false);
  const cities = ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Hyderabad"];

  return (
    <>
      <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-2">
        <Container fluid className="px-4">
          {/* Hamburger icon + Logo */}
          <div className="d-flex align-items-center">
            <Link to="/">
              <Image src={logo} alt="BookMyShow" height="30" />
            </Link>
          </div>

          {/* Search Input */}
          <Form className="mx-lg-4 flex-grow-1">
            <Form.Control
              type="search"
              placeholder="Search for Movies, Events, Plays and more"
              className="rounded-pill"
            />
          </Form>

          {/* Location dropdown + Sign In */}
          <div className="d-flex align-items-center gap-2">
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" className="rounded-pill">
                📍 {location}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {cities.map((city) => (
                  <Dropdown.Item key={city} onClick={() => setLocation(city)}>
                    {city}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Button
              as={Link}
              to="/signin"
              variant="danger"
              className="rounded-pill px-4"
            >
              Sign In
            </Button>
            <FiMenu
              className="me-3"
              size={24}
              onClick={() => setShowMenu(true)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Container>
      </Navbar>

      {/* Offcanvas Menu */}
      <Menu show={showMenu} handleClose={() => setShowMenu(false)} />
    </>
  );
};

export default MainHeader;

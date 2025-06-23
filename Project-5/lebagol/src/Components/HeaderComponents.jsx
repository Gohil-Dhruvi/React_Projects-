import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BsSearch, BsPerson, BsBag, BsHeart } from "react-icons/bs";
import logo from "../assets/logo-primary.svg";
import { Link } from "react-router-dom";

const HeaderComponents = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#fff",
        padding: "10px 0",
        fontFamily: `"DM Sans", "HelveticaNeue-Light", "Helvetica Neue Light", 
                      "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif`,
        boxShadow: "0 1px 10px rgba(0,0,0,0.06)",
        position: "relative",
        top: 0,
        zIndex: 999,
      }}
    >
      <Container fluid className="px-5">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "59px", width: "174px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <style>
            {`
              .nav-link-item {
                color: #000;
                font-weight: 500;
                transition: all 0.3s ease;
                text-decoration: none;
              }

              .nav-link-item:hover {
                color: #dc3545;
                text-decoration: underline;
              }

              .dropdown-item-style .dropdown-item {
                transition: all 0.3s ease;
              }

              .dropdown-item-style .dropdown-item:hover {
                background-color: #f8f9fa;
                color: #dc3545;
                text-decoration: underline;
              }

              .icon-style {
                color: #000;
                transition: all 0.3s ease;
                cursor: pointer;
              }

              .icon-style:hover {
                color: #dc3545;
                transform: scale(1.1);
              }
            `}
          </style>

          {/* Center Nav Links */}
          <Nav className="mx-auto gap-4 text-capitalize">
            <NavDropdown title={<span className="nav-link-item">Home</span>} className="dropdown-item-style">
              <NavDropdown.Item as={Link} to="/">Home v1</NavDropdown.Item>
              <NavDropdown.Item href="#">Home v2</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/OurStory" className="nav-link-item">Our Story</Nav.Link>

            <NavDropdown title={<span className="nav-link-item">Shop</span>} className="dropdown-item-style">
              <NavDropdown.Item href="#">All Products</NavDropdown.Item>
              <NavDropdown.Item href="#">Categories</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={
              <span className="nav-link-item">
                <Link to="/blog" className="nav-link-item" style={{ textDecoration: 'none' }}>
                  Blog
                </Link>
              </span>
            } className="dropdown-item-style">
              <NavDropdown.Item as={Link} to="/blog/GrideView">Blog – Grid View</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog/SinglePost">Single Post</NavDropdown.Item>
            </NavDropdown>

           <NavDropdown title={<span className="nav-link-item">Pages</span>} className="dropdown-item-style">
              <NavDropdown.Item as={Link} to="/menu">Our Menu</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">FAQ's</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/not-found">404 Page</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact-us" className="nav-link-item">Contact</Nav.Link>
          </Nav>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center gap-4 ms-auto">
            <BsSearch size={18} className="icon-style" />
            <BsPerson size={18} className="icon-style" />
            <BsHeart size={18} className="icon-style" />
            <BsBag size={18} className="icon-style" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponents;

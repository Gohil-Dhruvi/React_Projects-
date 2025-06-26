import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import logo from '../assets/logo.png';

const CustomNavbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Add Product', path: '/add-product' },
    { name: 'Shop', path: '/shop' }
  ];

  return (
    <Navbar
      expand="lg"
      style={{
        background: 'linear-gradient(to right, #fff3f7, #e6ffe6)',
        padding: '12px 0',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
      }}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold d-flex align-items-center"
          style={{ color: '#e91e63', fontSize: '1.5rem' }}
        >
          <img src={logo} alt="logo" height="35" className="me-2" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-3">
            {navItems.map((item, i) => (
              <Nav.Link
                as={Link}
                to={item.path}
                key={i}
                className="fw-semibold"
                style={{
                  color: '#444',
                  marginRight: '15px',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#e91e63')}
                onMouseLeave={(e) => (e.target.style.color = '#444')}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>

          {/* Icon Buttons */}
          <div className="d-flex align-items-center">
            {[FiSearch, FiUser, FiShoppingCart].map((Icon, idx) => (
              <Button
                key={idx}
                variant="light"
                className="me-2 rounded-circle border-0 shadow-sm"
                style={{
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  transition: '0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fce4ec')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
              >
                <Icon size={18} color="#e91e63" />
              </Button>
            ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

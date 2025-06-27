// src/Components/CustomNavbar.jsx
import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart, FiLogOut } from 'react-icons/fi';
import logo from '../assets/logo.png';

const CustomNavbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.length);
    };
    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setShowSearch(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <Navbar expand="lg" style={{ background: 'linear-gradient(to right, #fff3f7, #e6ffe6)', padding: '12px 0', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center" style={{ color: '#e91e63', fontSize: '1.5rem' }}>
          <img src={logo} alt="logo" height="35" className="me-2" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-3">
            <Nav.Link as={Link} to="/" className="fw-semibold">Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className="fw-semibold">Products</Nav.Link>
            <Nav.Link as={Link} to="/add-product" className="fw-semibold">Add Product</Nav.Link>
            <Nav.Link as={Link} to="/shop" className="fw-semibold">Shop</Nav.Link>
          </Nav>

          {showSearch && (
            <Form className="d-flex me-3" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="text"
                placeholder="Search cakes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ borderRadius: '50px' }}
              />
            </Form>
          )}

          <div className="d-flex align-items-center">
            <Button variant="light" className="me-2 rounded-circle border-0 shadow-sm" onClick={() => setShowSearch(!showSearch)}>
              <FiSearch size={18} color="#e91e63" />
            </Button>

            {user ? (
              <>
                <span className="me-2 fw-semibold text-primary">Hi, {user.username}</span>
                <Button variant="light" className="me-2 rounded-circle border-0 shadow-sm" onClick={handleLogout}>
                  <FiLogOut size={18} color="red" />
                </Button>
              </>
            ) : (
              <Button
                variant="light"
                className="me-2 rounded-circle border-0 shadow-sm"
                as={Link}
                to="/login"
              >
                <FiUser size={18} color="#e91e63" />
              </Button>
            )}

            <div className="position-relative">
              <Button variant="light" className="me-2 rounded-circle border-0 shadow-sm" as={Link} to="/cart">
                <FiShoppingCart size={18} color="#e91e63" />
              </Button>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

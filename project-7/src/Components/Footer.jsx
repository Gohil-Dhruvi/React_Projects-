import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
      style={{
        background: '#e6ffe6',
        color: '#4e4e4e',
        paddingTop: '40px',
        paddingBottom: '20px',
        fontSize: '0.95rem',
      }}
    >
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <h5 style={{ color: '#e91e63', fontWeight: 'bold' }}>About Us</h5>
            <p>
              SweetCakes brings joy with every bite — delicious handcrafted cakes delivered to your door.
            </p>
          </Col>

          <Col md={4}>
            <h5 style={{ color: '#e91e63', fontWeight: 'bold' }}>Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { text: 'Home', link: '/' },
                { text: 'Products', link: '/products' },
                { text: 'Add Product', link: '/add-product' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    style={{
                      textDecoration: 'none',
                      color: '#4e4e4e',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#e91e63')}
                    onMouseLeave={(e) => (e.target.style.color = '#4e4e4e')}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4}>
            <h5 style={{ color: '#e91e63', fontWeight: 'bold' }}>Contact</h5>
            <address>
              <strong>SweetCakes, Inc.</strong><br />
              123 Celebration Lane<br />
              Surat, Gujarat 395003<br />
              <abbr title="Phone">P:</abbr> +91 98765 43210
            </address>
          </Col>
        </Row>

        <Row>
          <Col className="text-center pt-3">
            <p className="mb-0 text-muted">
              &copy; 2025 Flone. Made with 🍰 and 💖 All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cupcakeBanner from '../assets/banner27.jpg';
import vanillaBanner from '../assets/banner28.jpg';

const Home = () => {
  return (
    <Container className="my-5">
      {/* Hero Carousel */}
      <Carousel fade className="mb-5 shadow rounded overflow-hidden">
        <Carousel.Item>
          <img
            src={cupcakeBanner}
            alt="Cup Cakes"
            className="d-block w-100"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h1 className="fw-bold display-5">Cup Cakes</h1>
            <p className="text-light">Choose Your Products Here</p>
           
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={vanillaBanner}
            alt="Vanilla Cakes"
            className="d-block w-100"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h1 className="fw-bold display-5">Vanilla Cakes</h1>
            <p className="text-light">Choose Your Products Here</p>
            <Link to="/products" className="btn btn-warning fw-semibold px-4 py-2 mt-2 shadow-sm">
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Feature Boxes */}
      <Row className="text-center mb-5">
        {[
          { icon: 'truck', title: 'Free Shipping', text: 'On all orders above ₹1000' },
          { icon: 'undo', title: 'Easy Returns', text: '7-day return guarantee' },
          { icon: 'lock', title: 'Secure Payment', text: '100% encrypted checkout' }
        ].map((item, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <div
              className="p-4 h-100 border rounded shadow-sm hover-shadow"
              style={{
                backgroundColor:'rgb(242, 251, 204)',
              }}
            >
              <i className={`fas fa-${item.icon} fa-3x mb-3 text-warning`}></i>
              <h4 className="fw-semibold">{item.title}</h4>
              <p className="text-muted">{item.text}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Why Choose Us */}
      <div
        className="text-center p-5 rounded"
        style={{
          border: '2px dashed #ddfbcc'
        }}
      >
        <h2 className="text-danger mb-3 fw-bold">Why Choose Us?</h2>
        <p className="text-dark mx-auto" style={{ maxWidth: '700px', fontSize: '1.1rem' }}>
          We use the finest ingredients, provide doorstep delivery, and bake every order with love, joy,
          and sugar-dusted passion. Because you deserve sweetness in style.
        </p>
        <Link
          to="/products"
          className="btn btn-danger fw-bold px-4 py-2 mt-3 rounded-pill"
        >
          Explore Cakes
        </Link>
      </div>
    </Container>
  );
};

export default Home;

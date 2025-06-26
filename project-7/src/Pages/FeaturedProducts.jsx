import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cake1 from '../assets/1.jpg';
import cake2 from '../assets/2.jpg';
import cake3 from '../assets/3.jpg';
import cake4 from '../assets/4.jpg';
import cake5 from '../assets/5.jpg';
import cake6 from '../assets/6.jpg';
import cake7 from '../assets/7.jpg';
import cake8 from '../assets/8.jpg';
import cake9 from '../assets/banner25.jpg';
import cake10 from '../assets/banner24.jpg';

const products = [
  { id: 1, title: 'Chocolate Cake', image: cake1, price: '₹299' },
  { id: 2, title: 'Vanilla Cupcake', image: cake2, price: '₹149' },
  { id: 3, title: 'Strawberry Tart', image: cake3, price: '₹199' },
  { id: 4, title: 'Black Forest', image: cake4, price: '₹349' },
  { id: 5, title: 'Red Velvet', image: cake5, price: '₹399' },
  { id: 6, title: 'Blueberry Cheesecake', image: cake6, price: '₹279' },
  { id: 7, title: 'Mango Delight', image: cake7, price: '₹259' },
  { id: 8, title: 'Oreo Blast', image: cake8, price: '₹319' },
  { id: 9, title: 'Pineapple Pastry', image: cake9, price: '₹129' },
  { id: 10, title: 'Fudge Brownie', image: cake10, price: '₹189' },
];


const FeaturedProducts = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4 text-dark">Featured Products</h2>
      <p className="text-center text-muted mb-5">
        Delicious treats handpicked for you!
      </p>

      <Row>
        {products.map((product) => (
          <Col key={product.id} md={6} lg={4} xl={3} className="mb-4">
            <Card className="shadow-sm border-0 h-100">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="text-success fw-bold">{product.price}</Card.Text>
                <Link to={`/products/${product.id}`} className="btn btn-warning mt-auto">
                 Add to Cart
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;

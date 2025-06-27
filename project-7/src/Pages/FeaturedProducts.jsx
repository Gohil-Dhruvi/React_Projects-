import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Pagination
} from 'react-bootstrap';

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
  { id: 1, name: 'Chocolate Cake', image: cake1, price: 299, description: 'Rich chocolate layered cake.' },
  { id: 2, name: 'Vanilla Cupcake', image: cake2, price: 149, description: 'Soft vanilla cupcake with cream.' },
  { id: 3, name: 'Strawberry Tart', image: cake3, price: 199, description: 'Fresh strawberry tart.' },
  { id: 4, name: 'Black Forest', image: cake4, price: 349, description: 'Classic black forest with cherries.' },
  { id: 5, name: 'Red Velvet', image: cake5, price: 399, description: 'Moist red velvet with cream cheese.' },
  { id: 6, name: 'Blueberry Cheesecake', image: cake6, price: 279, description: 'Blueberry layered cheesecake.' },
  { id: 7, name: 'Mango Delight', image: cake7, price: 259, description: 'Tropical mango flavored cake.' },
  { id: 8, name: 'Oreo Blast', image: cake8, price: 319, description: 'Oreo infused cream cake.' },
  { id: 9, name: 'Pineapple Pastry', image: cake9, price: 129, description: 'Sweet pineapple pastry.' },
  { id: 10, name: 'Fudge Brownie', image: cake10, price: 189, description: 'Gooey chocolate fudge brownie.' },
];

const useQuery = () => new URLSearchParams(useLocation().search);

const FeaturedProducts = () => {
  const query = useQuery();
  const search = query.get('search')?.toLowerCase() || '';
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const result = products.filter(
      (p) =>
        p.name.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search) ||
        p.price.toString().includes(search)
    );
    setFiltered(result);
    setCurrentPage(1); // reset page on search change
  }, [search]);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.some((item) => item.id === product.id)) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('storage'));
      alert(`${product.name} added to cart!`);
    } else {
      alert('Already in cart!');
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProducts = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPagination = () => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return (
      <Pagination className="justify-content-center mt-4">
        {items}
      </Pagination>
    );
  };

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4 text-dark">🎂 Featured Cakes</h2>
      <p className="text-center text-muted mb-5">Delicious treats handpicked for you!</p>

      <Row>
        {paginatedProducts.length === 0 ? (
          <p className="text-center">No results found.</p>
        ) : (
          paginatedProducts.map((product) => (
            <Col key={product.id} md={6} lg={4} xl={3} className="mb-4">
              <Card
                className="shadow-sm h-100"
                style={{
                  border: 'none',
                  borderRadius: '15px',
                  overflow: 'hidden',
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                  }}
                />
                <Card.Body style={{ padding: '16px' }}>
                  <Card.Title
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#e91e63',
                    }}
                  >
                    {product.name}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontSize: '0.9rem',
                      color: '#555',
                      marginBottom: '1rem',
                    }}
                  >
                    {product.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-success">
                      ₹{product.price}
                    </span>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      style={{
                        fontSize: '0.8rem',
                        borderRadius: '20px',
                        padding: '6px 14px',
                        fontWeight: '600',
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Pagination */}
      {paginatedProducts.length > 0 && renderPagination()}
    </Container>
  );
};

export default FeaturedProducts;

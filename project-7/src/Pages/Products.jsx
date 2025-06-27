import { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import ProductCard from '../Components/ProductCard';
import { Link, useLocation } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('search')?.toLowerCase() || '';

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(saved);
  }, []);

  useEffect(() => {
    const result = products.filter((p) =>
      p.name.toLowerCase().includes(searchParam) ||
      p.description.toLowerCase().includes(searchParam) ||
      p.price.toString().includes(searchParam)
    );
    setFilteredProducts(result);
    setCurrentPage(1); 
  }, [products, searchParam]);

  const handleDelete = (id) => {
    const updated = products.filter((product) => product.id !== id);
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPagination = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
          {i}
        </Pagination.Item>
      );
    }
    return <Pagination className="justify-content-center mt-4">{items}</Pagination>;
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🎂 Our Products</h2>
        <Link to="/add-product" className="btn btn-primary">➕ Add Product</Link>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <h4>No matching products found</h4>
          <Link to="/add-product" className="btn btn-primary mt-3">Add Your First Product</Link>
        </div>
      ) : (
        <>
          <Row>
            {paginatedProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <ProductCard product={product} onDelete={handleDelete} />
              </Col>
            ))}
          </Row>
          {renderPagination()}
        </>
      )}
    </Container>
  );
};

export default Products;

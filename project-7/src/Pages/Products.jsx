import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../Components/ProductCard'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])

  // Load products from localStorage on component mount
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || []
    setProducts(savedProducts)
  }, [])

  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id)
    setProducts(updatedProducts)
    localStorage.setItem('products', JSON.stringify(updatedProducts))
  }

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Our Products</h2>
        <Link to="/add-product" className="btn btn-primary">
          Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-5">
          <h4>No products found</h4>
          <Link to="/add-product" className="btn btn-primary mt-3">
            Add Your First Product
          </Link>
        </div>
      ) : (
        <Row>
          {products.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={product} onDelete={handleDelete} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default Products
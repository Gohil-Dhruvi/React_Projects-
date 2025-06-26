import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || []
    const foundProduct = savedProducts.find(p => p.id === parseInt(id))
    setProduct(foundProduct)
  }, [id])

  if (!product) {
    return (
      <Container className="my-5 text-center">
        <h4>Product not found</h4>
        <Link to="/products" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </Container>
    )
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <div className="product-detail-img mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
            />
          </div>
        </Col>
        <Col md={6}>
          <Badge bg="secondary" className="mb-2">{product.category}</Badge>
          <h2>{product.name}</h2>
          <h4 className="text-primary mb-3">${product.price.toFixed(2)}</h4>
          <p className="mb-4">{product.description}</p>
          
          <div className="d-flex gap-3 mb-4">
            <Button variant="primary" size="lg">
              Add to Cart
            </Button>
            <Button variant="outline-secondary" size="lg" as={Link} to="/products">
              Back to Products
            </Button>
          </div>

          <div className="product-meta">
            <p><strong>SKU:</strong> FLN-{product.id}</p>
            <p><strong>Availability:</strong> In Stock</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
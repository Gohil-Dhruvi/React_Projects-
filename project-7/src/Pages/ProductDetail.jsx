import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  ListGroup,
  Card,
} from 'react-bootstrap'

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
        <h3 className="text-danger">Cake not found 🍰</h3>
        <Link to="/products" className="btn btn-outline-dark mt-3">
          Back to Products
        </Link>
      </Container>
    )
  }

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg border-0 rounded-4">
        <Row>
          {/* Image Side */}
          <Col md={6}>
            <div className="bg-light rounded-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid w-100 h-100 object-fit-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </Col>

          {/* Details Side */}
          <Col md={6}>
            <div className="px-3 pt-2">
              <Badge bg={product.type === 'eggless' ? 'success' : 'warning'} className="mb-3 text-uppercase px-3 py-2">
                {product.type}
              </Badge>

              <h2 className="fw-bold text-dark">{product.name}</h2>
              <p className="text-muted small">{product.description}</p>

              <h4 className="text-primary my-3">₹{parseFloat(product.price).toFixed(2)}</h4>

              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item><strong>Flavor:</strong> {product.flavor}</ListGroup.Item>
                <ListGroup.Item><strong>Weight:</strong> {product.weight} kg</ListGroup.Item>
                <ListGroup.Item><strong>Shape:</strong> {product.shape}</ListGroup.Item>
                <ListGroup.Item><strong>Occasion:</strong> {product.occasion}</ListGroup.Item>
                <ListGroup.Item>
                  <strong>Tags:</strong>{' '}
                  {product.tags.split(',').map((tag, idx) => (
                    <Badge
                      key={idx}
                      bg="info"
                      text="dark"
                      className="me-1 mb-1 text-capitalize"
                    >
                      {tag.trim()}
                    </Badge>
                  ))}
                </ListGroup.Item>
                <ListGroup.Item><strong>SKU:</strong> CAKE-{product.id}</ListGroup.Item>
                <ListGroup.Item><strong>Status:</strong> <span className="text-success">In Stock</span></ListGroup.Item>
              </ListGroup>

              <div className="d-flex gap-3 mt-4">
                <Button variant="dark" size="lg">
                  🛒 Add to Cart
                </Button>
                <Link to="/products" className="btn btn-outline-secondary btn-lg">
                  ← Back to Products
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default ProductDetail

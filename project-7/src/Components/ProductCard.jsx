import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi'

const ProductCard = ({ product, onDelete }) => {
  return (
    <Card className="h-100 product-card">
      <div className="product-img-container">
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <div className="product-actions">
          <Link to={`/products/${product.id}`} className="btn btn-sm btn-light rounded-circle me-2">
            <FiEye />
          </Link>
          <Link to={`/products/${product.id}/edit`} className="btn btn-sm btn-light rounded-circle me-2">
            <FiEdit />
          </Link>
          <Button variant="danger" size="sm" className="rounded-circle" onClick={() => onDelete(product.id)}>
            <FiTrash2 />
          </Button>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
        <Card.Text className="text-truncate">{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">${product.price.toFixed(2)}</span>
          <Button variant="outline-dark" size="sm">
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
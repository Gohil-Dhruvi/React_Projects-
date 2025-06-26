import { useState } from 'react'
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'

const AddProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: 'electronics',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddProduct({
      ...product,
      id: Date.now(),
      price: parseFloat(product.price)
    })
    setProduct({
      name: '',
      price: '',
      description: '',
      category: 'electronics',
      image: ''
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row className="mb-3">
        <Col md={6}>
          <FloatingLabel controlId="name" label="Product Name" className="mb-3">
            <Form.Control
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              placeholder="Product Name"
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="price" label="Price" className="mb-3">
            <Form.Control
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              step="0.01"
              min="0"
              placeholder="Price"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <FloatingLabel controlId="description" label="Description" className="mb-3">
        <Form.Control
          as="textarea"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
          style={{ height: '100px' }}
          placeholder="Description"
        />
      </FloatingLabel>

      <Row className="mb-3">
        <Col md={6}>
          <FloatingLabel controlId="category" label="Category" className="mb-3">
            <Form.Select
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home & Garden</option>
              <option value="beauty">Beauty</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="image" label="Image URL" className="mb-3">
            <Form.Control
              type="url"
              name="image"
              value={product.image}
              onChange={handleChange}
              required
              placeholder="Image URL"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <div className="text-center">
        <Button variant="dark" type="submit" size="lg">
          Add Product
        </Button>
      </div>
    </Form>
  )
}

export default AddProductForm
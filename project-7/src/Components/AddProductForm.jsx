import { useState } from 'react'
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'

const AddProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    flavor: '',
    weight: '',
    type: 'eggless',
    shape: '',
    occasion: '',
    tags: ''
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
      price: parseFloat(product.price),
      weight: parseFloat(product.weight),
      stock: parseInt(product.stock)
    })
    setProduct({
      name: '',
      price: '',
      description: '',
      image: '',
      flavor: '',
      weight: '',
      type: 'eggless',
      shape: '',
      occasion: '',
      tags: ''
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row className="mb-3">
        <Col md={6}>
          <FloatingLabel controlId="name" label="Cake Name" className="mb-3">
            <Form.Control
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              placeholder="Cake Name"
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
          <FloatingLabel controlId="flavor" label="Flavor" className="mb-3">
            <Form.Control
              type="text"
              name="flavor"
              value={product.flavor}
              onChange={handleChange}
              required
              placeholder="Flavor"
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="weight" label="Weight (kg)" className="mb-3">
            <Form.Control
              type="number"
              name="weight"
              value={product.weight}
              onChange={handleChange}
              required
              step="0.1"
              min="0.1"
              placeholder="Weight"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <FloatingLabel controlId="type" label="Type (Egg/Eggless)" className="mb-3">
            <Form.Select
              name="type"
              value={product.type}
              onChange={handleChange}
              required
            >
              <option value="eggless">Eggless</option>
              <option value="egg">With Egg</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="shape" label="Shape" className="mb-3">
            <Form.Control
              type="text"
              name="shape"
              value={product.shape}
              onChange={handleChange}
              required
              placeholder="Shape"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <FloatingLabel controlId="occasion" label="Occasion" className="mb-3">
            <Form.Control
              type="text"
              name="occasion"
              value={product.occasion}
              onChange={handleChange}
              required
              placeholder="Occasion"
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="tags" label="Tags (comma-separated)" className="mb-3">
            <Form.Control
              type="text"
              name="tags"
              value={product.tags}
              onChange={handleChange}
              placeholder="e.g. best seller, trending"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={12}>
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
          Add Cake
        </Button>
      </div>
    </Form>
  )
}

export default AddProductForm
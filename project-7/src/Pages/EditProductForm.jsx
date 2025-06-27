import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';

const EditProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const found = savedProducts.find((p) => p.id === parseInt(id));
    if (found) {
      setProduct(found);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...product,
      price: parseFloat(product.price),
      weight: parseFloat(product.weight),
    };
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedList = savedProducts.map((p) => (p.id === updated.id ? updated : p));
    localStorage.setItem('products', JSON.stringify(updatedList));
    navigate('/products');
  };

  if (!product) return <div className="text-center py-5">Loading...</div>;

  return (
    <Container className="my-5">
      <h3 className="mb-4 text-center text-primary">Edit Cake Product</h3>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="name" label="Cake Name" className="mb-3">
              <Form.Control type="text" name="name" value={product.name} onChange={handleChange} required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="price" label="Price" className="mb-3">
              <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel controlId="description" label="Description" className="mb-3">
          <Form.Control
            as="textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
            style={{ height: '100px' }}
            required
          />
        </FloatingLabel>

        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="flavor" label="Flavor" className="mb-3">
              <Form.Control type="text" name="flavor" value={product.flavor} onChange={handleChange} required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="weight" label="Weight (kg)" className="mb-3">
              <Form.Control type="number" name="weight" value={product.weight} onChange={handleChange} required />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="type" label="Type" className="mb-3">
              <Form.Select name="type" value={product.type} onChange={handleChange} required>
                <option value="eggless">Eggless</option>
                <option value="egg">With Egg</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="shape" label="Shape" className="mb-3">
              <Form.Control type="text" name="shape" value={product.shape} onChange={handleChange} required />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="occasion" label="Occasion" className="mb-3">
              <Form.Control type="text" name="occasion" value={product.occasion} onChange={handleChange} required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="tags" label="Tags" className="mb-3">
              <Form.Control type="text" name="tags" value={product.tags} onChange={handleChange} />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel controlId="image" label="Image URL" className="mb-3">
          <Form.Control type="url" name="image" value={product.image} onChange={handleChange} required />
        </FloatingLabel>

        <div className="text-center">
          <Button type="submit" variant="warning" size="lg" className="me-2">
            Update Cake
          </Button>
          <Button variant="secondary" size="lg" onClick={() => navigate('/products')}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditProductForm;
import { useState} from 'react'
import { Container, Alert } from 'react-bootstrap'
import AddProductForm from '../Components/AddProductForm'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  const [showAlert, setShowAlert] = useState(false)

  const handleAddProduct = (newProduct) => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || []
    const updatedProducts = [...savedProducts, newProduct]
    localStorage.setItem('products', JSON.stringify(updatedProducts))
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Add New Product</h2>
        <Link to="/products" className="btn btn-outline-secondary">
          View Products
        </Link>
      </div>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Product added successfully!
        </Alert>
      )}

      <AddProductForm onAddProduct={handleAddProduct} />
    </Container>
  )
}

export default AddProduct
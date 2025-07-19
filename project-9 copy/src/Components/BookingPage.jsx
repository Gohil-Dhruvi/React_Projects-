import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleMovie } from "../Services/actions/MovieActions";

const BookingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movie } = useSelector(state => state.movieReducer);
  const [tickets, setTickets] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    showTime: ""
  });

  useEffect(() => {
    dispatch(getSingleMovie(id));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    const bookingDetails = {
      movieId: movie.id,
      movieTitle: movie.title,
      tickets,
      totalAmount: movie.price * tickets,
      ...formData,
      bookingDate: new Date().toISOString()
    };
    
    // Save booking to localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(bookingDetails);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    
    setBookingSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (!movie) return <div className="text-center mt-5">Loading...</div>;

  return (
    <Container className="mt-4">
      {bookingSuccess && (
        <Alert variant="success" className="text-center">
          Booking successful! You'll be redirected to home page shortly.
        </Alert>
      )}

      <h1 className="text-center mb-4">Book Tickets for {movie.title}</h1>
      
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Img 
              variant="top" 
              src={movie.image} 
              style={{ height: '400px', objectFit: 'cover' }} 
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                <strong>Genre:</strong> {movie.genre}<br />
                <strong>Duration:</strong> {movie.duration} mins<br />
                <strong>Language:</strong> {movie.language}<br />
                <strong>Price per ticket:</strong> ₹{movie.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <h3 className="mb-4">Booking Details</h3>
              <Form onSubmit={handleBooking}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Number of Tickets</Form.Label>
                      <Form.Control
                        type="number"
                        min="1"
                        max="10"
                        value={tickets}
                        onChange={(e) => setTickets(parseInt(e.target.value) || 1)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Show Time</Form.Label>
                      <Form.Select 
                        name="showTime" 
                        value={formData.showTime} 
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Show Time</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Total Amount</Form.Label>
                  <Form.Control
                    type="text"
                    value={`₹${movie.price * tickets}`}
                    readOnly
                  />
                </Form.Group>

                <h5 className="mt-4 mb-3">Personal Details</h5>
                
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-grid gap-2 mt-4">
                  <Button variant="primary" type="submit" size="lg">
                    Confirm Booking
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingPage;
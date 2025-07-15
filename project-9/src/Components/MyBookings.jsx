import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Badge,
  Pagination,
} from "react-bootstrap";
import {
  FaTicketAlt,
  FaClock,
  FaRupeeSign,
  FaUser,
  FaCalendarAlt,
} from "react-icons/fa";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 3;

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored.reverse()); // Show latest first
  }, []);

  const indexOfLast = currentPage * bookingsPerPage;
  const indexOfFirst = indexOfLast - bookingsPerPage;
  const currentBookings = bookings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(bookings.length / bookingsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    const items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return (
      <Pagination className="justify-content-center mt-4">
        {items}
      </Pagination>
    );
  };

  if (bookings.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5957/5957526.png"
          alt="No bookings"
          width="150"
          className="mb-3"
        />
        <h4>No bookings found</h4>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-danger fw-bold">🎟️ My Bookings</h2>

      <Row xs={1} sm={2} md={2} lg={3} className="g-4">
        {currentBookings.map((booking, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-lg border-0">
              <Card.Body>
                <Card.Title className="text-primary fw-bold mb-3">
                  {booking.movieTitle}
                </Card.Title>
                <Card.Text className="mb-2">
                  <FaClock className="me-2 text-muted" />
                  <strong>Show:</strong> {booking.showTime}
                </Card.Text>
                <Card.Text className="mb-2">
                  <FaTicketAlt className="me-2 text-muted" />
                  <strong>Tickets:</strong> {booking.tickets}
                </Card.Text>
                <Card.Text className="mb-2">
                  <FaRupeeSign className="me-2 text-muted" />
                  <strong>Total:</strong> ₹{booking.totalAmount}
                </Card.Text>
                <Card.Text className="mb-2">
                  <FaUser className="me-2 text-muted" />
                  <strong>Name:</strong> {booking.name}
                </Card.Text>
                <Card.Text className="mb-2">
                  <FaCalendarAlt className="me-2 text-muted" />
                  <strong>Date:</strong>{" "}
                  {new Date(booking.bookingDate).toLocaleString()}
                </Card.Text>
                <Badge bg="success" className="mt-2">
                  Confirmed
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      {totalPages > 1 && renderPagination()}
    </Container>
  );
};

export default MyBookings;

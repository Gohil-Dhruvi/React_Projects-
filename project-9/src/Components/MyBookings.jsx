import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Badge,
  Pagination,
  Button,
} from "react-bootstrap";
import {
  FaTicketAlt,
  FaClock,
  FaRupeeSign,
  FaUser,
  FaCalendarAlt,
  FaTrashAlt,
} from "react-icons/fa";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 3;

  // Load bookings from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored.reverse()); // latest on top
  }, []);

  // Delete a booking
  const handleDelete = (indexToDelete) => {
    const actualIndex = bookings.length - 1 - (currentPage - 1) * bookingsPerPage - indexToDelete;
    const updated = [...bookings];
    updated.splice(actualIndex, 1);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify([...updated].reverse()));
  };

  // Pagination logic
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
      <Pagination className="justify-content-center mt-4">{items}</Pagination>
    );
  };

  // No bookings found UI
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

  // Main return
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-danger fw-bold">🎟️ My Bookings</h2>

      <Row xs={1} sm={2} md={2} lg={3} className="g-4">
        {currentBookings.map((booking, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-dark fw-bold fs-5 mb-3">
                  🎬 {booking.movieTitle}
                </Card.Title>

                <Card.Text className="mb-2">
                  <FaClock className="me-2 text-secondary" />
                  <strong>Show:</strong> {booking.showTime}
                </Card.Text>

                <Card.Text className="mb-2">
                  <FaTicketAlt className="me-2 text-secondary" />
                  <strong>Tickets:</strong> {booking.tickets}
                </Card.Text>

                <Card.Text className="mb-2">
                  <FaRupeeSign className="me-2 text-secondary" />
                  <strong>Total:</strong> ₹{booking.totalAmount}
                </Card.Text>

                <Card.Text className="mb-2">
                  <FaUser className="me-2 text-secondary" />
                  <strong>Name:</strong> {booking.name}
                </Card.Text>

                <Card.Text className="mb-2">
                  <FaCalendarAlt className="me-2 text-secondary" />
                  <strong>Date:</strong>{" "}
                  {new Date(booking.bookingDate).toLocaleString()}
                </Card.Text>

                <Badge bg="success" className="mt-2 px-3 py-2">
                  Confirmed
                </Badge>

                {/* Delete Button */}
                <div className="text-end mt-3">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrashAlt className="me-1" />
                    Delete
                  </Button>
                </div>
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

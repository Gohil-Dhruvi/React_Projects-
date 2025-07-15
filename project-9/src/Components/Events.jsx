import { useState } from "react";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";

// All Events Data
const events = [
  {
    id: 1,
    title: "Sunburn Goa 2025",
    type: "Music Festival",
    location: "Goa",
    date: "Dec 25, 2025",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-goa-2024-6-12-t-12-8-46.jpg",
  },
  {
    id: 2,
    title: "Zakir Khan Live",
    type: "Comedy",
    location: "Ahmedabad",
    date: "Aug 17, 2025",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-zakir-khan-live-2024-6-20-t-13-13-2.jpg",
  },
  {
    id: 3,
    title: "Arijit Singh Concert",
    type: "Music Concert",
    location: "Delhi",
    date: "Sep 1, 2025",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-arijit-singh-live-2024-5-31-t-11-45-1.jpg",
  },
  {
    id: 4,
    title: "India vs Pakistan - T20",
    type: "Cricket Match",
    location: "Ahmedabad",
    date: "Oct 20, 2025",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-india-vs-pakistan-2024-6-18-t-15-14-25.jpg",
  },
  {
    id: 5,
    title: "NH7 Weekender",
    type: "Music Festival",
    location: "Pune",
    date: "Dec 15, 2025",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-nh7-weekender-2024-7-01.jpg",
  },
  {
    id: 6,
    title: "Comicstaan Finals",
    type: "Stand-Up Comedy",
    location: "Bangalore",
    date: "Sep 10, 2025",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-comicstaan-2024-6-21-t-14-40-10.jpg",
  },
];

const Events = () => {
  const navigate = useNavigate();

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (number) => {
    setCurrentPage(number);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-3">🎫 Trending Events</h2>
      <p className="text-center text-muted mb-4">
        Explore top festivals, concerts, comedy shows, and sports events.
      </p>

      <Row>
        {currentEvents.map((event) => (
          <Col key={event.id} sm={12} md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={event.image}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "14px" }}>
                  <FaTicketAlt className="me-2 text-danger" />
                  {event.type} <br />
                  <FaMapMarkerAlt className="me-2 text-danger" />
                  {event.location} <br />
                  <FaCalendarAlt className="me-2 text-danger" />
                  {event.date}
                </Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  className="w-100"
                  onClick={() => navigate(`/book/${event.id}`)}
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev onClick={goToPrev} disabled={currentPage === 1} />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={currentPage === index + 1}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={goToNext} disabled={currentPage === totalPages} />
      </Pagination>
    </Container>
  );
};

export default Events;

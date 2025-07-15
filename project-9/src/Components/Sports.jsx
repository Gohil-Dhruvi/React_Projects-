// src/Components/Sports.jsx
import { useState } from "react";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";

// Sports Event List
const sportsData = [
  {
    id: 1,
    title: "India vs Pakistan - T20 World Cup",
    type: "Cricket",
    location: "Narendra Modi Stadium, Ahmedabad",
    date: "Oct 20, 2025",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-india-vs-pakistan-2024-6-18-t-15-14-25.jpg",
  },
  {
    id: 2,
    title: "Pro Kabaddi League 2025",
    type: "Kabaddi",
    location: "Chennai",
    date: "Sep 15, 2025",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-pro-kabaddi-league-2024-6-24-t-10-30-12.jpg",
  },
  {
    id: 3,
    title: "ISL - Mumbai City FC vs Kerala Blasters",
    type: "Football",
    location: "Mumbai",
    date: "Aug 25, 2025",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-indian-super-league-2024-6-20-t-12-10-10.jpg",
  },
  {
    id: 4,
    title: "Marathon 2025 - Bengaluru",
    type: "Marathon",
    location: "Bangalore",
    date: "Nov 2, 2025",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-marathon-2024-6-25-t-16-2-15.jpg",
  },
  // Add more if needed
];

const Sports = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 2;

  const indexOfLast = currentPage * eventsPerPage;
  const indexOfFirst = indexOfLast - eventsPerPage;
  const currentEvents = sportsData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sportsData.length / eventsPerPage);

  const renderPagination = () => (
    <Pagination>
      <Pagination.Prev
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      />
      {[...Array(totalPages)].map((_, i) => (
        <Pagination.Item
          key={i + 1}
          active={currentPage === i + 1}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );

  return (
    <Container className="py-5">
      <h2 className="text-center mb-3">🏆 Upcoming Sports Events</h2>
      <p className="text-center text-muted mb-4">
        Catch thrilling live matches and sports tournaments happening near you.
      </p>

      <Row>
        {currentEvents.map((sport) => (
          <Col key={sport.id} sm={12} md={6} lg={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={sport.image}
                alt={sport.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{sport.title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "14px" }}>
                  <FaTicketAlt className="me-2 text-danger" />
                  {sport.type} <br />
                  <FaMapMarkerAlt className="me-2 text-danger" />
                  {sport.location} <br />
                  <FaCalendarAlt className="me-2 text-danger" />
                  {sport.date}
                </Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  className="w-100"
                  onClick={() => navigate(`/book/${sport.id}`)}
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          {renderPagination()}
        </div>
      )}
    </Container>
  );
};

export default Sports;

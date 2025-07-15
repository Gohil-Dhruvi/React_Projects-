// src/Components/Plays.jsx
import { useState } from "react";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";

// Static Play Data
const plays = [
  {
    id: 101,
    title: "Mughal-e-Azam: The Musical",
    type: "Musical Play",
    location: "Mumbai",
    date: "Aug 15, 2025",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-mughal-e-azam-musical-2023-7-18-t-11-41-34.jpg",
  },
  {
    id: 102,
    title: "The Vagina Monologues",
    type: "Drama",
    location: "Delhi",
    date: "Sep 5, 2025",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-the-vagina-monologues-2023-9-28-t-10-49-17.jpg",
  },
  {
    id: 103,
    title: "Matilda – The Musical",
    type: "Family Play",
    location: "Bangalore",
    date: "Oct 1, 2025",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-matilda-musical-2024-6-25-t-14-21-0.jpg",
  },
  {
    id: 104,
    title: "Gagan Damama Bajyo",
    type: "Historical Drama",
    location: "Ahmedabad",
    date: "Nov 12, 2025",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gagan-damama-bajyo-2024-6-27-t-11-15-41.jpg",
  },
  // Add more plays here to test pagination
];

const Plays = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const playsPerPage = 2;

  const indexOfLast = currentPage * playsPerPage;
  const indexOfFirst = indexOfLast - playsPerPage;
  const currentPlays = plays.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(plays.length / playsPerPage);

  const renderPagination = () => (
    <Pagination>
      <Pagination.Prev
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      />
      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
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
      <h2 className="text-center mb-3">🎭 Featured Plays</h2>
      <p className="text-center text-muted mb-4">
        Explore popular stage performances, musicals, and dramas.
      </p>

      <Row>
        {currentPlays.map((play) => (
          <Col key={play.id} sm={12} md={6} lg={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={play.image}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{play.title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "14px" }}>
                  <FaTicketAlt className="me-2 text-danger" />
                  {play.type} <br />
                  <FaMapMarkerAlt className="me-2 text-danger" />
                  {play.location} <br />
                  <FaCalendarAlt className="me-2 text-danger" />
                  {play.date}
                </Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  className="w-100"
                  onClick={() => navigate(`/book/${play.id}`)}
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination UI */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          {renderPagination()}
        </div>
      )}
    </Container>
  );
};

export default Plays;

// src/Components/Activities.jsx
import { useState } from "react";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";

const activityData = [
  {
    id: 101,
    title: "Imagicaa Theme Park",
    type: "Adventure Park",
    location: "Mumbai-Pune Expressway",
    date: "Any day (Open All Week)",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-imagicaa-theme-park-2024-6-24-t-12-0-42.jpg",
  },
  {
    id: 102,
    title: "Hot Air Balloon Ride",
    type: "Adventure",
    location: "Lonavala",
    date: "Aug 2025 Weekends",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-hot-air-balloon-ride-2024-6-20-t-15-12-23.jpg",
  },
  {
    id: 103,
    title: "Snow Kingdom",
    type: "Indoor Snow Adventure",
    location: "Chennai",
    date: "Open Daily",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-snow-kingdom-2024-6-25-t-15-35-42.jpg",
  },
  {
    id: 104,
    title: "Mystery Rooms Escape Game",
    type: "Puzzle & Adventure",
    location: "Ahmedabad",
    date: "Open Daily",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-mystery-rooms-2024-6-25-t-14-23-19.jpg",
  },
];

const Activities = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = activityData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(activityData.length / itemsPerPage);

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
      <h2 className="text-center mb-3">🎉 Fun Activities & Adventures</h2>
      <p className="text-center text-muted mb-4">
        Explore exciting activities and weekend adventures in your area.
      </p>

      <Row>
        {currentItems.map((activity) => (
          <Col key={activity.id} sm={12} md={6} lg={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={activity.image}
                alt={activity.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "14px" }}>
                  <FaTicketAlt className="me-2 text-danger" />
                  {activity.type} <br />
                  <FaMapMarkerAlt className="me-2 text-danger" />
                  {activity.location} <br />
                  <FaCalendarAlt className="me-2 text-danger" />
                  {activity.date}
                </Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  className="w-100"
                  onClick={() => navigate(`/book/${activity.id}`)}
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

export default Activities;

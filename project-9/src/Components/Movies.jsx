import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Pagination,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsFilter } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";

// Static Movie List
const allMovies = [
  {
    id: 1,
    name: "Jawan",
    genre: "Action",
    language: "Hindi",
    image: "https://i.imgur.com/GfYBfRh.jpg",
  },
  {
    id: 2,
    name: "Oppenheimer",
    genre: "Drama",
    language: "English",
    image: "https://i.imgur.com/6B4cH6L.jpg",
  },
  {
    id: 3,
    name: "Leo",
    genre: "Thriller",
    language: "Tamil",
    image: "https://i.imgur.com/54W0pZp.jpg",
  },
  {
    id: 4,
    name: "Pathaan",
    genre: "Action",
    language: "Hindi",
    image: "https://i.imgur.com/bEDGmWo.jpg",
  },
  {
    id: 5,
    name: "KGF 2",
    genre: "Action",
    language: "Kannada",
    image: "https://i.imgur.com/epKZVRH.jpg",
  },
  {
    id: 6,
    name: "The Batman",
    genre: "Action",
    language: "English",
    image: "https://i.imgur.com/YU7X0qi.jpg",
  },
  {
    id: 7,
    name: "RRR",
    genre: "Action",
    language: "Telugu",
    image: "https://i.imgur.com/LkguBIF.jpg",
  },
  {
    id: 8,
    name: "Drishyam 2",
    genre: "Thriller",
    language: "Hindi",
    image: "https://i.imgur.com/tY9u6hE.jpg",
  },
];

const Movies = () => {
  const [genreFilter, setGenreFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;
  const navigate = useNavigate();

  const handleBook = (id) => {
    navigate(`/book/${id}`);
  };

  // Filter Logic
  const filteredMovies = allMovies.filter((movie) => {
    return (
      (genreFilter === "" || movie.genre === genreFilter) &&
      (languageFilter === "" || movie.language === languageFilter)
    );
  });

  // Pagination Logic
  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const renderPagination = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return <Pagination>{items}</Pagination>;
  };

  return (
    <Container fluid className="py-4">
      <h2
        className="mb-4 d-flex align-items-center"
        style={{
          color: "#d32f2f",
          fontWeight: "bold",
          paddingLeft: "20px",
        }}
      >
        <BiMoviePlay className="me-2" size={30} />
        Now Showing
      </h2>

      <Row>
        {/* Filter Sidebar */}
        <Col md={3} style={{ backgroundColor: "#fff3f3", padding: "20px" }}>
          <h5 style={{ color: "#d32f2f", fontWeight: "bold" }}>🎛 Filters</h5>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "500" }}>Genre</Form.Label>
            <Form.Select
              value={genreFilter}
              onChange={(e) => {
                setGenreFilter(e.target.value);
                setCurrentPage(1);
              }}
              style={{ borderColor: "#d32f2f" }}
            >
              <option value="">All Genres</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Thriller">Thriller</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "500" }}>Language</Form.Label>
            <Form.Select
              value={languageFilter}
              onChange={(e) => {
                setLanguageFilter(e.target.value);
                setCurrentPage(1);
              }}
              style={{ borderColor: "#d32f2f" }}
            >
              <option value="">All Languages</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
              <option value="Kannada">Kannada</option>
              <option value="Telugu">Telugu</option>
            </Form.Select>
          </Form.Group>

          <Button
            variant="outline-danger"
            className="w-100 rounded-pill"
            onClick={() => {
              setGenreFilter("");
              setLanguageFilter("");
              setCurrentPage(1);
            }}
          >
            <BsFilter className="me-1" />
            Clear Filters
          </Button>
        </Col>

        {/* Movie Cards Grid */}
        <Col md={9}>
          <Row className="px-3">
            {currentMovies.length > 0 ? (
              currentMovies.map((movie) => (
                <Col key={movie.id} md={6} lg={4} className="mb-4">
                  <Card
                    style={{
                      height: "100%",
                      border: "none",
                      boxShadow:
                        hoveredCard === movie.id
                          ? "0 6px 20px rgba(0, 0, 0, 0.2)"
                          : "0 4px 12px rgba(0, 0, 0, 0.1)",
                      transition: "box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredCard(movie.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        height: "300px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={movie.image}
                        alt={movie.name}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                          transform:
                            hoveredCard === movie.id
                              ? "scale(1.05)"
                              : "scale(1)",
                        }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{movie.name}</Card.Title>
                      <Card.Text className="text-muted mb-2">
                        <strong>Genre:</strong> {movie.genre} <br />
                        <strong>Language:</strong> {movie.language}
                      </Card.Text>
                      <div className="mt-auto">
                        <Button
                          variant="danger"
                          className="w-100 rounded-pill"
                          onClick={() => handleBook(movie.id)}
                        >
                          Book Now
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <p className="text-center mt-4">
                  No movies found with selected filters.
                </p>
              </Col>
            )}
          </Row>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-3">
              {renderPagination()}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;

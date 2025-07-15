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
    price: 150,
    duration: 130,
  },
  {
    id: 2,
    name: "Oppenheimer",
    genre: "Drama",
    language: "English",
    image: "https://i.imgur.com/6B4cH6L.jpg",
    price: 200,
    duration: 180,
  },
  {
    id: 3,
    name: "Leo",
    genre: "Thriller",
    language: "Tamil",
    image: "https://i.imgur.com/54W0pZp.jpg",
    price: 160,
    duration: 140,
  },
  {
    id: 4,
    name: "Pathaan",
    genre: "Action",
    language: "Hindi",
    image: "https://i.imgur.com/bEDGmWo.jpg",
    price: 170,
    duration: 145,
  },
  {
    id: 5,
    name: "KGF 2",
    genre: "Action",
    language: "Kannada",
    image: "https://i.imgur.com/epKZVRH.jpg",
    price: 180,
    duration: 155,
  },
  {
    id: 6,
    name: "The Batman",
    genre: "Action",
    language: "English",
    image: "https://i.imgur.com/YU7X0qi.jpg",
    price: 190,
    duration: 175,
  },
  {
    id: 7,
    name: "RRR",
    genre: "Action",
    language: "Telugu",
    image: "https://i.imgur.com/LkguBIF.jpg",
    price: 170,
    duration: 160,
  },
  {
    id: 8,
    name: "Drishyam 2",
    genre: "Thriller",
    language: "Hindi",
    image: "https://i.imgur.com/tY9u6hE.jpg",
    price: 150,
    duration: 130,
  },
];

const Movies = () => {
  const [genreFilter, setGenreFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;
  const navigate = useNavigate();

  const handleBook = (movie) => {
    localStorage.setItem("selectedMovie", JSON.stringify(movie));
    navigate(`/book/${movie.id}`);
  };

  const filteredMovies = allMovies.filter(
    (movie) =>
      (genreFilter === "" || movie.genre === genreFilter) &&
      (languageFilter === "" || movie.language === languageFilter)
  );

  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const renderPagination = () => (
    <Pagination>
      <Pagination.Prev
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
      />
      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={currentPage === index + 1}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );

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
        <Col md={3} style={{ padding: "20px", backgroundColor: "#fff" }}>
          <h5 style={{ color: "#d32f2f", fontWeight: "bold" }}>🎛 Filters</h5>

          <Form.Group className="mb-3">
            <Form.Label>Genre</Form.Label>
            <Form.Select
              value={genreFilter}
              onChange={(e) => {
                setGenreFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">All Genres</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Thriller">Thriller</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Language</Form.Label>
            <Form.Select
              value={languageFilter}
              onChange={(e) => {
                setLanguageFilter(e.target.value);
                setCurrentPage(1);
              }}
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

        {/* Movie Cards */}
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
                    <div style={{ overflow: "hidden", height: "300px" }}>
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
                            hoveredCard === movie.id ? "scale(1.05)" : "scale(1)",
                        }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{movie.name}</Card.Title>
                      <Card.Text className="text-muted mb-2">
                        <strong>Genre:</strong> {movie.genre} <br />
                        <strong>Language:</strong> {movie.language} <br />
                        <strong>Price:</strong> ₹{movie.price}
                      </Card.Text>
                      <div className="mt-auto">
                        <Button
                          variant="danger"
                          className="w-100 rounded-pill"
                          onClick={() => handleBook(movie)}
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
                <p className="text-center mt-4 text-danger">
                  No movies found with selected filters.
                </p>
              </Col>
            )}
          </Row>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              {renderPagination()}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;

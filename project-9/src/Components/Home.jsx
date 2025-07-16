import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions
import { deleteMovie, getAllMovies } from "../Services/actions/MovieActions";

// Components
import MovieCarousel from "./MovieCarousel";
import CategoryCards from "./Cards";

// Icons
import { FaTicketAlt, FaEye, FaEdit, FaTrash, FaPlus, FaFilm } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movies } = useSelector((state) => state.movieReducer);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const handleEdit = (id) => navigate(`/edit-movie/${id}`);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovie(id));
    }
  };
  const handleView = (id) => navigate(`/movie/${id}`);
  const handleBook = (id) => navigate(`/book/${id}`);

  return (
    <Container className="mt-4">
      {/* 1. Movie Carousel */}
      <MovieCarousel />

      {/* 2. Category Cards Section */}
      <CategoryCards />

      {/* 3. Now Showing Section */}
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2 className="text-danger"><FaFilm className="me-2" />Now Showing</h2>
        <Button variant="success" onClick={() => navigate("/add-movie")}>
          <FaPlus className="me-2" /> Add Movie
        </Button>
      </div>

      {movies && movies.length === 0 ? (
        <div className="text-center mt-5">
          <h4>No Movies Found</h4>
          <Button variant="primary" onClick={() => navigate("/add-movie")}>
            Add Your First Movie
          </Button>
        </div>
      ) : (
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 mb-5">
          {movies.map((movie) => (
            <Col key={movie._id || movie.id}>
              <Card className="h-100 shadow-sm border-0">
                {/* Smaller and rounded movie thumbnail */}
                <div className="text-center p-3">
                  <Card.Img
                    variant="top"
                    src={movie.image || "https://via.placeholder.com/200x300?text=No+Image"}
                    style={{
                      height: "200px",
                      width: "auto",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <Card.Body className="d-flex flex-column pt-0">
                  <Card.Title className="fw-bold text-dark text-center">
                    {movie.title}
                  </Card.Title>
                  <Card.Text className="text-muted text-center mb-2" style={{ fontSize: "14px" }}>
                    {movie.genre} • {movie.language}
                  </Card.Text>
                  <Card.Text className="text-success fw-semibold text-center mb-3">
                    ₹{movie.price}
                  </Card.Text>

                  {/* Action Buttons */}
                  <div className="d-grid gap-2 mt-auto">
                    <Button variant="primary" size="sm" onClick={() => handleBook(movie._id || movie.id)}>
                      <FaTicketAlt className="me-2" /> Book Now
                    </Button>
                    <Button variant="outline-secondary" size="sm" onClick={() => handleView(movie._id || movie.id)}>
                      <FaEye className="me-2" /> View Details
                    </Button>
                    <div className="d-flex gap-2">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEdit(movie._id || movie.id)}
                        className="flex-grow-1"
                      >
                        <FaEdit className="me-1" /> Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(movie._id || movie.id)}
                        className="flex-grow-1"
                      >
                        <FaTrash className="me-1" /> Delete
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home;

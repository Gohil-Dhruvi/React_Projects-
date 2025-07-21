import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions
import { deleteMovieAsync, getAllMoviesAsync } from "../Services/actions/MovieActions";

// Components
import MovieCarousel from "./MovieCarousel";
import CategoryCards from "./Cards";

// Icons
import { FaTicketAlt, FaEye, FaEdit, FaTrash, FaPlus, FaFilm } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movies, loading, error } = useSelector((state) => state.movieReducer);

  useEffect(() => {
    dispatch(getAllMoviesAsync());
  }, [dispatch]);

  const handleEdit = (id) => navigate(`/edit-movie/${id}`);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovieAsync(id));
    }
  };
  const handleView = (id) => navigate(`/movie/${id}`);
  const handleBook = (id) => navigate(`/book/${id}`);

  return (
    <Container className="mt-4">
      <MovieCarousel />
      <CategoryCards />

      <div className="d-flex justify-content-between align-items-center my-4">
        <h2 className="text-danger">
          <FaFilm className="me-2" />
          Now Showing
        </h2>
        <Button variant="success" onClick={() => navigate("/add-movie")}>
          <FaPlus className="me-2" /> Add Movie
        </Button>
      </div>

      {loading ? (
        <h4 className="text-center">Loading...</h4>
      ) : error ? (
        <h5 className="text-danger text-center">{error}</h5>
      ) : movies.length === 0 ? (
        <div className="text-center mt-5">
          <h4>No Movies Found</h4>
          <Button variant="primary" onClick={() => navigate("/add-movie")}>
            Add Your First Movie
          </Button>
        </div>
      ) : (
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 mb-5">
          {movies.map((movie) => (
            <Col key={movie._id}>
              <Card className="h-100 shadow-sm border-0">
                <div className="text-center p-3">
                  <Card.Img
                    variant="top"
                    src={movie.image || "https://via.placeholder.com/200x300?text=No+Image"}
                    style={{
                      height: "200px",
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

                  <div className="d-grid gap-2 mt-auto">
                    <Button variant="primary" size="sm" onClick={() => handleBook(movie._id)}>
                      <FaTicketAlt className="me-2" /> Book Now
                    </Button>
                    <Button variant="outline-secondary" size="sm" onClick={() => handleView(movie._id)}>
                      <FaEye className="me-2" /> View Details
                    </Button>
                    <div className="d-flex gap-2">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEdit(movie._id)}
                        className="flex-grow-1"
                      >
                        <FaEdit className="me-1" /> Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(movie._id)}
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


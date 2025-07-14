import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMovie, getAllMovies } from "../Services/actions/MovieActions";
import MovieCarousel from "../Components/MovieCarousel"; 

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

      <MovieCarousel />

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Now Showing</h1>
        <Button variant="success" onClick={() => navigate("/add-movie")}>
          Add New Movie
        </Button>
      </div>

      {/* No movies condition */}
      {movies.length === 0 ? (
        <div className="text-center mt-5">
          <h3>No Movies Found</h3>
          <Button variant="primary" onClick={() => navigate("/add-movie")}>
            Add Your First Movie
          </Button>
        </div>
      ) : (
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
          {movies.map((movie) => (
            <Col key={movie.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={movie.image || "https://via.placeholder.com/300x400?text=No+Image"}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {movie.genre} • {movie.language}
                  </Card.Text>
                  <Card.Text className="mt-auto fw-bold">₹{movie.price}</Card.Text>

                  <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" onClick={() => handleBook(movie.id)}>
                      Book Now
                    </Button>
                    <Button variant="outline-secondary" onClick={() => handleView(movie.id)}>
                      View Details
                    </Button>
                    <div className="d-flex gap-2">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEdit(movie.id)}
                        className="flex-grow-1"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(movie.id)}
                        className="flex-grow-1"
                      >
                        Delete
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


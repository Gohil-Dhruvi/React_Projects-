import { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
  Badge,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleMovieAsync } from "../Services/actions/MovieActions";

// React Icons
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTicketAlt, FaUserTie, FaUsers, FaInfoCircle, FaFilm } from "react-icons/fa";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movie, loading, errMSG } = useSelector((state) => state.movieReducer);

  useEffect(() => {
    if (id) {
      dispatch(getSingleMovieAsync(id));
    }
  }, [id, dispatch]);

  const handleBook = () => {
    navigate(`/book/${id}`);
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Loading movie details...</p>
      </div>
    );
  }

  if (errMSG) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Something went wrong!</h4>
        <p>{errMSG}</p>
      </div>
    );
  }

  if (!movie || Object.keys(movie).length === 0) {
    return (
      <div className="text-center mt-5 text-warning">
        <h4>Movie not found</h4>
      </div>
    );
  }

  return (
    <Container className="mt-5 mb-5">
      <Row className="g-4">
        {/* Left: Movie Poster */}
        <Col md={5}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Img
              variant="top"
              src={movie.image || "/default-poster.jpg"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default-poster.jpg";
              }}
              style={{
                height: "550px",
                objectFit: "cover",
                borderRadius: "20px 20px 0 0",
              }}
              alt={movie.title || "Movie Poster"}
            />
          </Card>
        </Col>

        {/* Right: Movie Details */}
        <Col md={7}>
          <div className="d-flex justify-content-between align-items-start flex-wrap">
            <div>
              <h2 className="fw-bold mb-2">
                <FaFilm className="me-2 text-primary" />
                {movie.title || "Untitled"}
              </h2>
              <div className="text-muted mb-3">
                <Badge bg="dark" className="me-2">{movie.genre || "Genre N/A"}</Badge>
                <Badge bg="secondary" className="me-2">{movie.language || "Language N/A"}</Badge>
                <Badge bg="info"><FaClock className="me-1" /> {movie.duration || "N/A"} mins</Badge>
              </div>
            </div>
            <div>
              <Button variant="outline-dark" onClick={() => navigate("/")}>
                <FaArrowLeft className="me-2" /> Back
              </Button>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="fw-semibold">
              <FaInfoCircle className="me-2" />
              About the Movie
            </h5>
            <p className="text-secondary">{movie.desc || "No description available."}</p>
          </div>

          <Row className="mt-4">
            <Col md={6}>
              <h6 className="text-muted mb-1"><FaUserTie className="me-1" /> Director</h6>
              <p className="fw-medium">{movie.director || "N/A"}</p>
            </Col>
            <Col md={6}>
              <h6 className="text-muted mb-1"><FaUsers className="me-1" /> Cast</h6>
              <p className="fw-medium">{movie.cast || "N/A"}</p>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <h6 className="text-muted mb-1"><FaCalendarAlt className="me-1" /> Release Date</h6>
              <p className="fw-medium">
                {movie.releaseDate
                  ? new Date(movie.releaseDate).toLocaleDateString()
                  : "N/A"}
              </p>
            </Col>
            <Col md={6}>
              <h6 className="text-muted mb-1"><FaTicketAlt className="me-1" /> Ticket Price</h6>
              <p className="fw-medium">₹{movie.price || "N/A"}</p>
            </Col>
          </Row>

          <div className="d-flex gap-3 mt-4">
            <Button variant="success" size="lg" onClick={handleBook}>
              <FaTicketAlt className="me-2" /> Book Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;

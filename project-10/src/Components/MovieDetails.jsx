import { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleMovieAsync } from "../Services/actions/MovieActions";
import { FaStar } from "react-icons/fa";

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
    <div
      style={{
        backgroundImage: `url(${movie.image || "/default-bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 0",
        position: "relative",
        color: "white",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          padding: "40px 20px",
        }}
      >
        <Container>
          <Row className="align-items-center">
            {/* Poster */}
            <Col md={4} className="mb-4 mb-md-0 text-center">
              <img
                src={movie.image || "/default-poster.jpg"}
                alt={movie.title || "Untitled Movie"}
                className="img-fluid rounded"
                style={{
                  height: "450px",
                  objectFit: "cover",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
                }}
              />
              <p className="text-center mt-2">In cinemas</p>
            </Col>

            {/* Details */}
            <Col md={8}>
              <h1 className="fw-bold display-5">{movie.title || "Untitled Movie"}</h1>

              {/* Rating */}
              <div className="d-flex align-items-center gap-2 mt-3 mb-2">
                <FaStar className="text-warning fs-4" />
                <span className="fs-5 fw-bold">{movie.rating || "N/A"}/10</span>
                <span className="text-muted">({movie.votes || "No votes"})</span>
              </div>

              {/* Rate Button */}
              <div className="d-flex gap-3 mb-3">
                <Button variant="light" size="sm">
                  Rate now
                </Button>
              </div>

              {/* Language + Tag */}
              <div className="mb-3 d-flex flex-wrap gap-2">
                <Badge bg="light" text="dark">2D</Badge>
                <Badge bg="light" text="dark">{movie.language || "N/A"}</Badge>
              </div>

              {/* Meta Info */}
              <div className="fs-6 text-light mt-2">
                {movie.duration || "N/A"} &bull;{" "}
                {movie.genre || "N/A"} &bull; UA16+ &bull;{" "}
                {movie.releaseDate
                  ? new Date(movie.releaseDate).toLocaleDateString(undefined, {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "N/A"}
              </div>

              {/* Book Button */}
              <div className="mt-4">
                <Button variant="danger" size="lg" onClick={handleBook}>
                  Book tickets
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MovieDetails;

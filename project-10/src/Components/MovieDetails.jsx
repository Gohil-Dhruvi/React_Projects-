import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleMovie } from "../Services/actions/MovieActions";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movie } = useSelector(state => state.movieReducer);

  useEffect(() => {
    dispatch(getSingleMovie(id));
  }, [id, dispatch]);

  const handleBook = () => {
    navigate(`/book/${id}`);
  };

  if (!movie) return <div className="text-center mt-5">Loading...</div>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img 
              variant="top" 
              src={movie.image} 
              style={{ height: '500px', objectFit: 'cover' }} 
            />
          </Card>
        </Col>
        <Col md={8}>
          <h1>{movie.title}</h1>
          <p className="text-muted">{movie.genre} • {movie.language} • {movie.duration} mins</p>
          
          <div className="my-4">
            <h4>About the Movie</h4>
            <p>{movie.desc}</p>
          </div>

          <Row className="my-4">
            <Col md={6}>
              <h5>Director</h5>
              <p>{movie.director}</p>
            </Col>
            <Col md={6}>
              <h5>Cast</h5>
              <p>{movie.cast}</p>
            </Col>
          </Row>

          <Row className="my-4">
            <Col md={6}>
              <h5>Release Date</h5>
              <p>{new Date(movie.releaseDate).toLocaleDateString()}</p>
            </Col>
            <Col md={6}>
              <h5>Ticket Price</h5>
              <p>₹{movie.price}</p>
            </Col>
          </Row>

          <div className="d-flex gap-3 mt-4">
            <Button 
              variant="success" 
              size="lg" 
              onClick={handleBook}
            >
              Book Tickets
            </Button>
            <Button 
              variant="outline-primary" 
              size="lg" 
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
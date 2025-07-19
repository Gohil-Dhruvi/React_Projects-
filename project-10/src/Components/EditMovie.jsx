import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovie, updateMovie } from "../Services/actions/MovieActions";
import { useNavigate, useParams } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movie } = useSelector(state => state.movieReducer);
  const [inputForm, setInputForm] = useState({
    id: "",
    title: "",
    desc: "",
    price: "",
    image: "",
    genre: "",
    language: "",
    duration: "",
    director: "",
    cast: "",
    releaseDate: ""
  });

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovie(inputForm));
    navigate("/");
  };

  useEffect(() => {
    if (movie) {
      setInputForm(movie);
    }
  }, [movie]);

  useEffect(() => {
    dispatch(getSingleMovie(id));
  }, [id]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Edit Movie</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={inputForm.title}
                onChange={handleChanged}
                placeholder="Enter Movie Title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
                placeholder="Enter Movie Description"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
                placeholder="Enter Ticket Price"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                name="genre"
                value={inputForm.genre}
                onChange={handleChanged}
                placeholder="Enter Genre (comma separated)"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
                placeholder="Enter Movie Image URL"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                name="language"
                value={inputForm.language}
                onChange={handleChanged}
                placeholder="Enter Language"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duration (minutes)</Form.Label>
              <Form.Control
                type="number"
                name="duration"
                value={inputForm.duration}
                onChange={handleChanged}
                placeholder="Enter Duration"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Director</Form.Label>
              <Form.Control
                type="text"
                name="director"
                value={inputForm.director}
                onChange={handleChanged}
                placeholder="Enter Director Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cast</Form.Label>
              <Form.Control
                type="text"
                name="cast"
                value={inputForm.cast}
                onChange={handleChanged}
                placeholder="Enter Cast (comma separated)"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="date"
                name="releaseDate"
                value={inputForm.releaseDate ? inputForm.releaseDate.split('T')[0] : ''}
                onChange={handleChanged}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="primary" type="submit" size="lg">
            Update Movie
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditMovie;
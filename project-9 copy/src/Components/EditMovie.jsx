import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovieAsync, updateMovieAsync } from "../Services/actions/MovieActions";
import { useNavigate, useParams } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movie, isUpdate, errMSG } = useSelector(state => state.movieReducer);

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

  // Handle form input change
  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovieAsync(inputForm));
  };

  // Set form data when movie is loaded
  useEffect(() => {
    if (movie) {
      setInputForm(movie);
    }
  }, [movie]);

  // Load movie on mount
  useEffect(() => {
    dispatch(getSingleMovieAsync(id));
  }, [id]);

  // Redirect after successful update
  useEffect(() => {
    if (isUpdate) navigate("/");
  }, [isUpdate]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Edit Movie</h1>
      {errMSG && <p className="text-danger">{errMSG}</p>}

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
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="date"
                name="releaseDate"
                value={inputForm.releaseDate ? inputForm.releaseDate.split("T")[0] : ""}
                onChange={handleChanged}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button type="submit" variant="primary" size="lg">
            Update Movie
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditMovie;

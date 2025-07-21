import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovieAsync, updateMovieAsync } from "../Services/actions/MovieActions";
import { useNavigate, useParams } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movie, isUpdate, errMSG } = useSelector((state) => state.movieReducer);

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
    releaseDate: "",
  });

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovieAsync(inputForm));
  };

  useEffect(() => {
    if (id) dispatch(getSingleMovieAsync(id));
  }, [id]);

  useEffect(() => {
    if (movie) {
      setInputForm({
        ...movie,
        releaseDate: movie.releaseDate?.split("T")[0] || "", // Normalize date
      });
    }
  }, [movie]);

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
            {[
              { label: "Title", name: "title", type: "text" },
              { label: "Description", name: "desc", as: "textarea", rows: 3 },
              { label: "Price", name: "price", type: "number" },
              { label: "Genre", name: "genre", type: "text" },
            ].map(({ label, name, type = "text", as, rows }) => (
              <Form.Group className="mb-3" key={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type={type}
                  as={as}
                  rows={rows}
                  name={name}
                  value={inputForm[name]}
                  onChange={handleChanged}
                  required
                />
              </Form.Group>
            ))}
          </Col>

          <Col md={6}>
            {[
              { label: "Image URL", name: "image" },
              { label: "Language", name: "language" },
              { label: "Duration (minutes)", name: "duration", type: "number" },
              { label: "Director", name: "director" },
              { label: "Cast", name: "cast" },
              { label: "Release Date", name: "releaseDate", type: "date" },
            ].map(({ label, name, type = "text" }) => (
              <Form.Group className="mb-3" key={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type={type}
                  name={name}
                  value={inputForm[name]}
                  onChange={handleChanged}
                  required
                />
              </Form.Group>
            ))}
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

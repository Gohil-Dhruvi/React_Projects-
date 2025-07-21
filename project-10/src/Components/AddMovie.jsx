import generateUniqueId from "generate-unique-id";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addMovieAsync } from "../Services/actions/MovieActions";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const initialState = {
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
  };

  const [inputForm, setInputForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCreate, errMSG } = useSelector((state) => state.movieReducer);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateUniqueId({ length: 6, useLetters: false });
    const movieData = { ...inputForm, id };
    dispatch(addMovieAsync(movieData));
  };

  useEffect(() => {
    if (isCreate) {
      setInputForm(initialState);
      navigate("/");
    }
  }, [isCreate]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Add New Movie</h1>
      {errMSG && <p className="text-danger">{errMSG}</p>}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            {/* Left Side Fields */}
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
            {/* Right Side Fields */}
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
          <Button variant="primary" type="submit" size="lg">
            Add Movie
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddMovie;

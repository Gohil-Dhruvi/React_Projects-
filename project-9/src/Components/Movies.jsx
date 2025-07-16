// Movies.jsx
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Collapse,
  Dropdown,
  ListGroup,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const moviesData = [
  {
    id: 1,
    title: "Jawan",
    desc: "Action / Drama",
    genre: "Action",
    language: "Hindi",
    format: "2D",
    cinema: "PVR Cinemas",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Jawan_film_poster.jpg",
    rating: "8.3/10",
    votes: "10.2K Votes",
    link: "/movie/1",
  },
  {
    id: 2,
    title: "Pathaan",
    desc: "Spy Thriller",
    genre: "Thriller",
    language: "Hindi",
    format: "IMAX",
    cinema: "INOX",
    image: "https://upload.wikimedia.org/wikipedia/en/6/65/Pathaan_film_poster.jpg",
    rating: "7.9/10",
    votes: "8.7K Votes",
    link: "/movie/2",
  },
  {
    id: 3,
    title: "RRR",
    desc: "Epic Action",
    genre: "Action",
    language: "Telugu",
    format: "3D",
    cinema: "Carnival Cinemas",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    rating: "8.7/10",
    votes: "12.3K Votes",
    link: "/movie/3",
  },
  {
    id: 4,
    title: "Animal",
    desc: "Crime Drama",
    genre: "Crime",
    language: "Hindi",
    format: "2D",
    cinema: "Miraj Cinemas",
    image: "https://upload.wikimedia.org/wikipedia/en/2/26/Animal_film_teaser_poster.jpg",
    rating: "7.6/10",
    votes: "6.9K Votes",
    link: "/movie/4",
  },
  {
    id: 5,
    title: "3 Idiots",
    desc: "Comedy / Education",
    genre: "Comedy",
    language: "Hindi",
    format: "2D",
    cinema: "Rajhans Cinemas",
    image: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
    rating: "9.1/10",
    votes: "14.7K Votes",
    link: "/movie/5",
  },
];

const languageOptions = ["Hindi", "English", "Gujarati", "Tamil", "Telugu"];
const genreOptions = ["Action", "Comedy", "Thriller", "Romance", "Crime"];
const formatOptions = ["2D", "3D", "IMAX", "4DX"];
const cinemas = [
  "PVR Cinemas",
  "INOX",
  "Carnival Cinemas",
  "Miraj Cinemas",
  "Rajhans Cinemas",
  "City Gold",
  "Mukta A2 Cinemas",
];

const Movies = () => {
  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [openLang, setOpenLang] = useState(true);
  const [showCinemas, setShowCinemas] = useState(false);

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const clearFilter = (type) => {
    if (type === "language") setSelectedLanguages([]);
    if (type === "genre") setSelectedGenre(null);
    if (type === "format") setSelectedFormat(null);
    if (type === "cinema") setSelectedCinema(null);
  };

  const filteredMovies = moviesData.filter((movie) => {
    const langMatch =
      selectedLanguages.length === 0 || selectedLanguages.includes(movie.language);
    const genreMatch = !selectedGenre || movie.genre === selectedGenre;
    const formatMatch = !selectedFormat || movie.format === selectedFormat;
    const cinemaMatch = !selectedCinema || movie.cinema === selectedCinema;
    return langMatch && genreMatch && formatMatch && cinemaMatch;
  });

  return (
    <Container fluid className="my-5">
      <Row>
        <h5 className="fw-bold mb-4 text-dark"> Filters</h5>
        <Col md={3}>
          <div
            className="p-4 shadow-sm rounded"
            style={{ background: "#fff", color: "#000" }}
          >

            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <span
                  className="fw-semibold"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenLang(!openLang)}
                >
                  Languages
                </span>
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger text-decoration-none"
                  onClick={() => clearFilter("language")}
                >
                  Clear
                </Button>
              </div>
              <Collapse in={openLang}>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {languageOptions.map((lang) => (
                    <Button
                      key={lang}
                      size="sm"
                      variant={selectedLanguages.includes(lang) ? "danger" : "outline-dark"}
                      style={{ borderRadius: "20px", fontSize: "13px" }}
                      onClick={() => toggleLanguage(lang)}
                    >
                      {lang}
                    </Button>
                  ))}
                </div>
              </Collapse>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-semibold">Genres</span>
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger text-decoration-none"
                  onClick={() => clearFilter("genre")}
                >
                  Clear
                </Button>
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" size="sm">
                  {selectedGenre || "Select Genre"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {genreOptions.map((genre) => (
                    <Dropdown.Item key={genre} onClick={() => setSelectedGenre(genre)}>
                      {genre}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-semibold">Format</span>
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger text-decoration-none"
                  onClick={() => clearFilter("format")}
                >
                  Clear
                </Button>
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" size="sm">
                  {selectedFormat || "Select Format"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {formatOptions.map((format) => (
                    <Dropdown.Item key={format} onClick={() => setSelectedFormat(format)}>
                      {format}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Browse by Cinemas Toggle */}
            <Button
              variant="outline-danger"
              className="mb-3 w-100"
              onClick={() => setShowCinemas(!showCinemas)}
            >
              {showCinemas ? "Hide Cinemas" : "Browse by Cinemas"}
            </Button>

            <Collapse in={showCinemas}>
              <div>
                <ListGroup>
                  {cinemas.map((cinema) => (
                    <ListGroup.Item
                      key={cinema}
                      active={selectedCinema === cinema}
                      onClick={() =>
                        setSelectedCinema(selectedCinema === cinema ? null : cinema)
                      }
                      style={{
                        cursor: "pointer",
                        backgroundColor: selectedCinema === cinema ? "#d32f2f" : "#fff",
                        color: selectedCinema === cinema ? "#fff" : "#000",
                        border: "1px solid #ccc",
                      }}
                    >
                      {cinema}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger text-decoration-none mt-2"
                  onClick={() => clearFilter("cinema")}
                >
                  Clear Cinemas
                </Button>
              </div>
            </Collapse>
          </div>
        </Col>

        <Col md={9}>
          <Row xs={2} sm={2} md={3} lg={4} className="g-4">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <Col key={movie.id}>
                  <Card
                    className="h-100 border-0 shadow-sm"
                    style={{ cursor: "pointer", borderRadius: "12px", background: "#fff", color: "#000" }}
                    onClick={() => navigate(movie.link)}
                  >
                    <div style={{ position: "relative" }}>
                      <Card.Img src={movie.image} alt={movie.title} style={{ height: "260px", objectFit: "cover" }} />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          background: "rgba(0,0,0,0.7)",
                          color: "#fff",
                          fontSize: "14px",
                          padding: "5px 10px",
                        }}
                      >
                        <FaStar color="#ffcc00" /> <strong>{movie.rating}</strong>
                        <span className="ms-2">{movie.votes}</span>
                      </div>
                    </div>
                    <Card.Body className="p-2">
                      <Card.Title
                        className="mb-1"
                        style={{ fontSize: "16px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                      >
                        {movie.title}
                      </Card.Title>
                      <Card.Text className="text-muted" style={{ fontSize: "13px" }}>
                        {movie.desc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <p className="text-center text-muted mt-4">No movies found.</p>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
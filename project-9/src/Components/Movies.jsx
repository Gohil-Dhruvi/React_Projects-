import { useState } from "react";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const moviesData = [
  { id: 1, title: "Jawan", desc: "Action / Drama", genre: "Action", language: "Hindi", image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Jawan_film_poster.jpg", rating: "8.3/10", votes: "10.2K Votes", link: "/movie/1" },
  { id: 2, title: "Pathaan", desc: "Spy Thriller", genre: "Thriller", language: "Hindi", image: "https://upload.wikimedia.org/wikipedia/en/6/65/Pathaan_film_poster.jpg", rating: "7.9/10", votes: "8.7K Votes", link: "/movie/2" },
  { id: 3, title: "RRR", desc: "Epic Action", genre: "Action", language: "Telugu", image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg", rating: "8.7/10", votes: "12.3K Votes", link: "/movie/3" },
  { id: 4, title: "Animal", desc: "Crime Drama", genre: "Crime", language: "Hindi", image: "https://upload.wikimedia.org/wikipedia/en/2/26/Animal_film_teaser_poster.jpg", rating: "7.6/10", votes: "6.9K Votes", link: "/movie/4" },
  { id: 5, title: "3 Idiots", desc: "Comedy / Education", genre: "Comedy", language: "Hindi", image: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg", rating: "9.1/10", votes: "14.7K Votes", link: "/movie/5" },
];

const genreOptions = ["All", "Action", "Comedy", "Thriller", "Crime"];
const languageOptions = ["All", "Hindi", "Telugu"];

const Movies = () => {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const filteredMovies = moviesData.filter((movie) => {
    const genreMatch = selectedGenre === "All" || movie.genre === selectedGenre;
    const languageMatch = selectedLanguage === "All" || movie.language === selectedLanguage;
    return genreMatch && languageMatch;
  });

  return (
    <Container fluid className="my-5">
      <Row>
        {/* Sidebar Filters */}
        <Col md={3} className="mb-4">
          <div className="p-3 bg-white shadow-sm rounded">
            <h5 className="text-danger mb-3">Filter</h5>

            <strong className="d-block mb-2">Genre</strong>
            {genreOptions.map((genre) => (
              <Form.Check
                key={genre}
                type="radio"
                name="genre"
                label={genre}
                checked={selectedGenre === genre}
                onChange={() => setSelectedGenre(genre)}
              />
            ))}

            <hr />

            <strong className="d-block mb-2">Language</strong>
            {languageOptions.map((lang) => (
              <Form.Check
                key={lang}
                type="radio"
                name="language"
                label={lang}
                checked={selectedLanguage === lang}
                onChange={() => setSelectedLanguage(lang)}
              />
            ))}
          </div>
        </Col>

        {/* Movie Cards */}
        <Col md={9}>
          <Row xs={2} sm={2} md={3} lg={4} className="g-4">
            {filteredMovies.map((item) => (
              <Col key={item.id}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  onClick={() => navigate(item.link)}
                  style={{ cursor: "pointer", borderRadius: "12px", overflow: "hidden" }}
                >
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      src={item.image}
                      alt={item.title}
                      style={{ height: "260px", objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "14px",
                        padding: "5px 10px",
                      }}
                    >
                      <FaStar color="red" /> <span>{item.rating}</span>{" "}
                      <span className="ms-2">{item.votes}</span>
                    </div>
                  </div>
                  <Card.Body style={{ padding: "10px" }}>
                    <Card.Title
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: "13px" }}>
                      {item.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;

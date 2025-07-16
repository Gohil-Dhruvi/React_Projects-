import { useState } from "react";
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const playsData = [
  { id: 1, title: "Bluffmaster Gujjubhai", desc: "Sanjeev Kumar Auditorium: Surat", language: "Gujarati", image: "https://i.imgur.com/5k6aaC7.jpg", date: "Fri, 18 Jul", link: "/play/1" },
  { id: 2, title: "Jar Tar Chi Goshta", desc: "Marathi Play", language: "Marathi", image: "https://i.imgur.com/xxxxx1.png", date: "Sat, 19 Jul", link: "/play/2" },
  { id: 3, title: "Court Martial", desc: "Courtroom Suspense", language: "Hindi", image: "https://i.imgur.com/0K5jNKJ.jpg", date: "Sun, 20 Jul", link: "/play/3" },
  { id: 4, title: "Hello Zindagi", desc: "Social Comedy", language: "Hindi", image: "https://i.imgur.com/lvb5UUE.jpg", date: "Mon, 21 Jul", link: "/play/4" },
  { id: 5, title: "Waiting For Godot", desc: "Absurdist Classic", language: "English", image: "https://i.imgur.com/1GtwSBf.jpg", date: "Tue, 22 Jul", link: "/play/5" },
];

const languageOptions = ["All", "Gujarati", "Marathi", "Hindi", "English"];

const Plays = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const filteredPlays = playsData.filter(
    (play) => selectedLanguage === "All" || play.language === selectedLanguage
  );

  return (
    <Container fluid className="my-5">
      <Row>
        {/* Sidebar Filters */}
        <Col md={3} className="mb-4">
          <div className="p-3 bg-white shadow-sm rounded">
            <h5 className="text-danger mb-3">Filter</h5>
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

        {/* Play Cards */}
        <Col md={9}>
          <Row xs={2} sm={2} md={3} lg={4} className="g-4">
            {filteredPlays.map((item) => (
              <Col key={item.id}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  onClick={() => navigate(item.link)}
                  style={{ cursor: "pointer", borderRadius: "12px", overflow: "hidden" }}
                >
                  <Card.Img
                    src={item.image}
                    alt={item.title}
                    style={{ height: "260px", objectFit: "cover" }}
                  />
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
                    <Card.Text className="text-muted" style={{ fontSize: "12px" }}>
                      {item.date}
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

export default Plays;

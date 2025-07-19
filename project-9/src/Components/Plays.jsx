// Plays.jsx - Fully Enhanced BookMyShow-style with Sidebar Filters and UI Enhancements
import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  InputGroup,
  Badge,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaRupeeSign } from "react-icons/fa";

const playsData = [
  {
    id: 1,
    title: "Bluffmaster Gujjubhai",
    desc: "Sanjeev Kumar Auditorium: Surat",
    language: "Gujarati",
    genre: "Comedy",
    category: "Drama",
    date: "2025-07-18",
    price: 800,
    location: "Surat",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00111300-dkkewrrhed-portrait.jpg",
    link: "/play/1",
  },
  {
    id: 2,
    title: "Jar Tar Chi Goshta",
    desc: "Classic Marathi Love Story",
    language: "Marathi",
    genre: "Romance",
    category: "Drama",
    date: "2025-07-19",
    price: 600,
    location: "Pune",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00443124-mlrjnrmrbr-portrait.jpg",
    link: "/play/2",
  },
  {
    id: 3,
    title: "Court Martial",
    desc: "Suspense Courtroom Drama",
    language: "Hindi",
    genre: "Thriller",
    category: "Suspense",
    date: "2025-07-20",
    price: 500,
    location: "Delhi",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-court-martial-0-2022-6-13-t-11-37-40.jpg",
    link: "/play/3",
  },
  {
    id: 4,
    title: "Hello Zindagi",
    desc: "Social Satirical Comedy",
    language: "Hindi",
    genre: "Comedy",
    category: "Social",
    date: "2025-07-21",
    price: 700,
    location: "Mumbai",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hello-zindagi-et00331298-1655801631.jpg",
    link: "/play/4",
  },
  {
    id: 5,
    title: "Waiting For Godot",
    desc: "English Absurdist Theatre",
    language: "English",
    genre: "Drama",
    category: "Classic",
    date: "2025-07-22",
    price: 1000,
    location: "Ahmedabad",
    image: "https://in.bmscdn.com/events/moviecard/ET00100116.jpg",
    link: "/play/5",
  },
];

const languageOptions = ["All", "Gujarati", "Marathi", "Hindi", "English"];
const categoryOptions = ["All", "Drama", "Suspense", "Social", "Classic"];
const priceOptions = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹501–₹800", min: 501, max: 800 },
  { label: "Above ₹800", min: 801, max: Infinity },
];

const Plays = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);

  const filtered = playsData.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchLang = selectedLanguage === "All" || item.language === selectedLanguage;
    const matchCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchDate = !selectedDate || item.date === selectedDate;
    const matchPrice =
      !selectedPrice || (item.price >= selectedPrice.min && item.price <= selectedPrice.max);
    return matchSearch && matchLang && matchCat && matchDate && matchPrice;
  });

  return (
    <Container fluid className="my-5">
      <Row>
        {/* Sidebar Filters */}
            <h5 className="text-dark fw-bold mb-4"> Filters</h5>
        <Col md={3} className="mb-4">
          <div className="p-4 rounded shadow-sm bg-light border">

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-dark">Search</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaSearch /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Title..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-dark">Language</Form.Label>
              <Form.Select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languageOptions.map((lang) => (
                  <option key={lang}>{lang}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-dark">Category</Form.Label>
              <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categoryOptions.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-dark">Date</Form.Label>
              <Form.Control
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="fw-semibold text-dark">Price</Form.Label>
              <Form.Select
                onChange={(e) => {
                  const selected = priceOptions.find((p) => p.label === e.target.value);
                  setSelectedPrice(selected || null);
                }}
              >
                <option>Choose Price</option>
                {priceOptions.map((range) => (
                  <option key={range.label}>{range.label}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        </Col>

        {/* Right Cards */}
        <Col md={9}>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {filtered.map((item) => (
              <Col key={item.id}>
                <Card
                  className="h-100 shadow-sm border-0"
                  onClick={() => navigate(item.link)}
                  style={{ cursor: "pointer", borderRadius: "14px" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    style={{ height: "230px", objectFit: "cover", borderTopLeftRadius: "14px", borderTopRightRadius: "14px" }}
                  />
                  <Card.Body className="px-3">
                    <Card.Title className="fw-bold text-dark" style={{ fontSize: "15px" }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: "13px" }}>
                      {item.desc}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="text-muted" style={{ fontSize: "12px" }}>
                        <FaCalendarAlt className="me-1" /> {item.date}
                      </span>
                      <span className="text-muted" style={{ fontSize: "12px" }}>
                        <FaMapMarkerAlt className="me-1" /> {item.location}
                      </span>
                    </div>
                    <div className="mt-2 text-end">
                      <Badge bg="danger">
                        <FaRupeeSign className="me-1" />{item.price}
                      </Badge>
                    </div>
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
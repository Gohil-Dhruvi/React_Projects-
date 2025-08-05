import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Collapse,
  Button,
  Dropdown,
  ListGroup,
  Form,
  Badge,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const eventsData = [
  {
    id: 1,
    title: "TELLING LIES – A Stand‑up Solo by Aashish Solanki",
    desc: "Stand‑up Comedy",
    category: "Comedy",
    language: "Hindi",
    price: 499,
    date: "2025-07-19",
    location: "Ahmedabad",
    organizer: "Aashish Solanki Live",
    tag: "Trending",
    type: "Offline",
    image: "https://in.bmscdn.com/events/moviecard/ET00452692.jpg",
    link: "/events/telling-lies-ashish-solanki",
  },
  {
    id: 2,
    title: "Vaatu Aapda Malak Ni",
    desc: "Gujarati Folk Music & Literature",
    category: "Music & Literature",
    language: "Gujarati",
    price: 299,
    date: "2025-05-08",
    location: "Ahmedabad",
    organizer: "Gujarati Lok Sangeet Mandal",
    tag: "Popular",
    type: "Offline",
    image: "https://in.bmscdn.com/events/moviecard/ET00447466.jpg",
    link: "/events/vaatu-aapda-malak-ni",
  },
  {
    id: 3,
    title: "Small World",
    desc: "Short Film",
    category: "Film Festival",
    language: "English",
    price: 0,
    date: "2025-07-01",
    location: "Multiple Cities",
    organizer: "Indie Film Network",
    tag: "Official Selection",
    type: "Online",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-small-world-0-2024-7-3-t-5-39-42.jpg",
    link: "/events/small-world-short-film",
  },
  {
    id: 4,
    title: "Short Film Adda",
    desc: "Monthly Short‑Film Screening",
    category: "Film & Culture",
    language: "Multi-language",
    price: 150,
    date: "2025-08-01",
    location: "Mumbai",
    organizer: "Adda Collective",
    tag: "Monthly",
    type: "Offline",
    image: "https://assets-in.bmscdn.com/nmcms/desktop/media-desktop-short-film-adda-2025-7-6-t-11-23-6.jpg",
    link: "/events/short-film-adda",
  },
  {
    id: 5,
    title: "Rambo Circus",
    desc: "Family Circus Show",
    category: "Family Entertainment",
    language: "Visual",
    price: 399,
    date: "2025-07-18",
    location: "Delhi & Pune",
    organizer: "Rambo Circus",
    tag: "Running",
    type: "Offline",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00346481-psnrersdpc-portrait.jpg",
    link: "/events/rambo-circus",
  },
];

const categoryOptions = ["Music", "Entertainment", "Food", "Fashion", "Technology"];
const languageOptions = ["English", "Hindi"];
const typeOptions = ["Online", "Offline"];
const priceRanges = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹501 - ₹1000", min: 501, max: 1000 },
  { label: "Above ₹1000", min: 1001, max: Infinity },
];

const Events = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [search, setSearch] = useState("");
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);
  
  const filteredEvents = eventsData.filter((event) => {
    const matchCategory = !selectedCategory || event.category === selectedCategory;
    const matchLanguage = !selectedLanguage || event.language === selectedLanguage;
    const matchType = !selectedType || event.type === selectedType;
    const matchDate = !selectedDate || event.date === selectedDate;
    const matchPrice =
    !selectedPrice || (event.price >= selectedPrice.min && event.price <= selectedPrice.max);
    const matchSearch = event.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchLanguage && matchType && matchDate && matchPrice && matchSearch;
  });
  

  return (
    <Container className="my-5">
      <Row>
        <Col md={3}>
            <h5 className="fw-bold mb-4 text-dark">Filters</h5>
          <div className="p-4 shadow-sm rounded" style={{ background: "#fff", color: "#000" }}>

            <Form.Control
              type="text"
              placeholder="Search Events"
              className="mb-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="outline-dark" size="sm">
                {selectedCategory || "Select Category"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categoryOptions.map((cat) => (
                  <Dropdown.Item key={cat} onClick={() => setSelectedCategory(cat)}>
                    {cat}
                  </Dropdown.Item>
                ))}
                <Dropdown.Item onClick={() => setSelectedCategory(null)}>Clear</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="outline-dark" size="sm">
                {selectedLanguage || "Select Language"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languageOptions.map((lang) => (
                  <Dropdown.Item key={lang} onClick={() => setSelectedLanguage(lang)}>
                    {lang}
                  </Dropdown.Item>
                ))}
                <Dropdown.Item onClick={() => setSelectedLanguage(null)}>Clear</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="outline-dark" size="sm">
                {selectedType || "Select Type"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {typeOptions.map((type) => (
                  <Dropdown.Item key={type} onClick={() => setSelectedType(type)}>
                    {type}
                  </Dropdown.Item>
                ))}
                <Dropdown.Item onClick={() => setSelectedType(null)}>Clear</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control
              type="date"
              className="mb-2"
              value={selectedDate || ""}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            {selectedDate && (
              <Button
                size="sm"
                variant="link"
                className="text-danger text-decoration-none mb-3"
                onClick={() => setSelectedDate(null)}
              >
                Clear Date
              </Button>
            )}

            <Button
              variant="outline-danger"
              size="sm"
              className="w-100 mb-3"
              onClick={() => setShowMoreFilters(!showMoreFilters)}
            >
              {showMoreFilters ? "Hide Price Filter" : "More Filters"}
            </Button>

            <Collapse in={showMoreFilters}>
              <div>
                {priceRanges.map((range) => (
                  <ListGroup.Item
                    key={range.label}
                    active={selectedPrice?.label === range.label}
                    onClick={() => setSelectedPrice(range)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: selectedPrice?.label === range.label ? "#d32f2f" : "#fff",
                      color: selectedPrice?.label === range.label ? "#fff" : "#000",
                      border: "1px solid #ccc",
                      marginBottom: "5px",
                    }}
                  >
                    {range.label}
                  </ListGroup.Item>
                ))}
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger text-decoration-none mt-2"
                  onClick={() => setSelectedPrice(null)}
                >
                  Clear Price
                </Button>
              </div>
            </Collapse>
          </div>
        </Col>

        <Col md={9}>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((item) => (
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
                      {item.tag && (
                        <Badge
                          bg="danger"
                          style={{
                            position: "absolute",
                            top: 10,
                            left: 10,
                            padding: "5px 10px",
                          }}
                        >
                          {item.tag}
                        </Badge>
                      )}
                    </div>
                    <Card.Body className="p-2">
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
                        {item.desc} | {item.location}
                      </Card.Text>
                      <Card.Text className="text-muted" style={{ fontSize: "12px" }}>
                        {item.date} | ₹{item.price} | {item.organizer} | {item.type}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <p className="text-center text-muted mt-4">No events found.</p>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
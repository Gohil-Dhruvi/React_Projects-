// Events.jsx
import { useState } from "react";
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

const eventsData = [
  {
    id: 1,
    title: "Sunburn Goa",
    desc: "Music Festival",
    category: "Music",
    language: "English",
    price: 1500,
    date: "2025-07-23",
    location: "Goa",
    organizer: "Sunburn India",
    tag: "Trending",
    type: "Offline",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Sunburn_Festival_2019.jpg",
    link: "/event/1",
  },
  {
    id: 2,
    title: "Comic Con India",
    desc: "Pop Culture",
    category: "Entertainment",
    language: "English",
    price: 800,
    date: "2025-07-24",
    location: "Delhi",
    organizer: "Comic Con Group",
    tag: "Popular",
    type: "Offline",
    image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/11/17/2554136-comic-con.jpg",
    link: "/event/2",
  },
  {
    id: 3,
    title: "Food Fest",
    desc: "Culinary Delights",
    category: "Food",
    language: "Hindi",
    price: 500,
    date: "2025-07-25",
    location: "Mumbai",
    organizer: "Food Lovers",
    tag: "New",
    type: "Offline",
    image: "https://www.fabhotels.com/blog/wp-content/uploads/2018/05/Food-Festivals-in-India.jpg",
    link: "/event/3",
  },
  {
    id: 4,
    title: "Fashion Week",
    desc: "Style Showcase",
    category: "Fashion",
    language: "English",
    price: 1200,
    date: "2025-07-26",
    location: "Bangalore",
    organizer: "Fashion World",
    tag: "Hot",
    type: "Offline",
    image: "https://images.livemint.com/img/2022/03/24/600x338/Lakme_Fashion_Week_2022_1648114973913_1648114984088.jpg",
    link: "/event/4",
  },
  {
    id: 5,
    title: "Tech Conference",
    desc: "Innovative Talks",
    category: "Technology",
    language: "English",
    price: 2000,
    date: "2025-07-27",
    location: "Hyderabad",
    organizer: "Tech Expo India",
    tag: "Featured",
    type: "Online",
    image: "https://cdn.pixabay.com/photo/2016/11/29/04/15/technology-1869592_1280.jpg",
    link: "/event/5",
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
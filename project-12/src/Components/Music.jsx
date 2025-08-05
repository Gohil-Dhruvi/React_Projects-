import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  Accordion,
  Stack,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const music = [
  {
    id: 1,
    title: "Krishnaa – Music, Bliss and Beyond",
    desc: "Live Concert at Sanjeev Kumar Auditorium",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-krishnaa-music-bliss-and-beyond-0-2025-7-1-t-6-56-23.jpg",
    date: "Sun, 24 Aug 2025",
    category: "Live",
    price: 500,
    tag: "Spiritual",
    link: "/music/krishnaa-bliss-beyond",
  },
  {
    id: 2,
    title: "HAR DIL JO PYAR KAREGA – Surat",
    desc: "Tribute Music Concert",
    image:
      "https://image.tmdb.org/t/p/original/66CpsF2lrolmsHI2BgZH16Cb7EB.jpg",
    date: "Sun, 27 Jul 2025",
    category: "Tribute",
    price: 300,
    tag: "Bollywood",
    link: "/music/har-dil-jo-pyar-karega-surat",
  },
  {
    id: 3,
    title: "AN EVENING WITH KRISHNA – Surat & Ahmedabad",
    desc: "Classical / Spiritual Concert",
    image: "https://in.bmscdn.com/events/moviecard/ET00417398.jpg",
    date: "Thu, 13 Aug 2025",
    category: "Classical",
    price: 400,
    tag: "Spiritual",
    link: "/music/evening-with-krishna",
  },
  {
    id: 4,
    title: "Vaatu Aapda Malak Ni",
    desc: "Gujarati Folk Music",
    image: "https://in.bmscdn.com/events/moviecard/ET00447466.jpg",
    date: "Sun, 31 Aug 2025",
    category: "Folk",
    price: 200,
    tag: "Gujarati",
    link: "/music/vaatu-aapda-malak-ni",
  },
  {
    id: 5,
    title: "Surat Jamming Session by IJC",
    desc: "Live Band Jam at Otlo The Cafe",
    image: "https://in.bmscdn.com/events/moviecard/ET00453504.jpg",
    date: "Fri, 25 Jul 2025",
    category: "Jam",
    price: 0,
    tag: "Band",
    link: "/music/surat-jamming-session-ijc",
  },
];

const Music = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedTag("");
    setSelectedPrice("");
  };

  const filteredMusic = music.filter((item) => {
    const matchCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchTag = selectedTag ? item.tag === selectedTag : true;
    const matchPrice =
      selectedPrice === "free"
        ? item.price === 0
        : selectedPrice === "lt500"
        ? item.price > 0 && item.price <= 500
        : selectedPrice === "500to1000"
        ? item.price > 500 && item.price <= 1000
        : selectedPrice === "gt1000"
        ? item.price > 1000
        : true;

    return matchCategory && matchTag && matchPrice;
  });

  return (
    <Container className="my-5">
      <Row>
        {/* Filters */}
        <Col md={3} className="mb-4">
          <h5 className="fw-bold mb-3">Filters</h5>
          <Accordion defaultActiveKey="0">
            {/* Categories */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Categories</Accordion.Header>
              <Accordion.Body>
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  size="sm"
                >
                  <option value="">All</option>
                  {[...new Set(music.map((a) => a.category))].map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Form.Select>
                <div className="text-end mt-2">
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => setSelectedCategory("")}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    Clear
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* Tags */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Tags</Accordion.Header>
              <Accordion.Body>
                <Form.Select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  size="sm"
                >
                  <option value="">All</option>
                  {[...new Set(music.map((a) => a.tag))].map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </Form.Select>
                <div className="text-end mt-2">
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => setSelectedTag("")}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    Clear
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* Price */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <Form.Select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  size="sm"
                >
                  <option value="">All</option>
                  <option value="free">Free</option>
                  <option value="lt500">₹0–₹500</option>
                  <option value="500to1000">₹500–₹1000</option>
                  <option value="gt1000">Above ₹1000</option>
                </Form.Select>
                <div className="text-end mt-2">
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => setSelectedPrice("")}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    Clear
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Button
            className="w-100 mt-4"
            variant="outline-danger"
            onClick={clearFilters}
          >
            Clear All Filters
          </Button>
        </Col>

        {/* Music Cards */}
        <Col md={9}>
          <Row xs={1} sm={2} md={2} lg={3} className="g-4">
            {filteredMusic.map((item) => (
              <Col key={item.id}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  onClick={() => navigate(item.link)}
                  style={{
                    cursor: "pointer",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img
                    src={item.image}
                    alt={item.title}
                    style={{
                      height: "260px",
                      objectFit: "cover",
                      borderRadius: "12px 12px 0 0",
                    }}
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

export default Music;
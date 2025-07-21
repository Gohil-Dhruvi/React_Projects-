import { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const activities = [
  {
    id: 1,
    title: "AquaImagicaa Surat",
    desc: "Water Park Adventure",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363752-hvljntpbae-portrait.jpg",
    date: "Sat, 19 Jul – Sun, 31 Aug 2025",
    category: "Adventure",
    price: 799,
    tag: "Water Park",
    link: "/activity/aquaimagicaa-surat",
  },
  {
    id: 2,
    title: "Statue of Belief",
    desc: "Spiritual Tourism",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00388297-dsxmgrxeqc-portrait.jpg",
    date: "Ongoing",
    category: "Spiritual",
    price: 399,
    tag: "Tourism",
    link: "/activity/statue-of-belief",
  },
  {
    id: 3,
    title: "Keseraiya Navaratri",
    desc: "Festive Dance Celebration",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyMiBTZXAgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453920-rbdxgstqmj-portrait.jpg",
    date: "Starts Mon, 25 Sep 2025",
    category: "Festival",
    price: 299,
    tag: "Garba",
    link: "/activity/keseraiya-navaratri",
  },
  {
    id: 4,
    title: "Friendship Forever 3.0",
    desc: "Community Fun Meet",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453368-xepemxpmnh-portrait.jpg",
    date: "Sat, 2 Aug 2025",
    category: "Community",
    price: 0,
    tag: "Friends",
    link: "/activity/friendship-forever-3-0",
  },
  {
    id: 5,
    title: "Jus Jumpin – VR Surat",
    desc: "Kid-Friendly Amusement Zone",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00437449-cayydrnvtt-portrait.jpg",
    date: "Sat, 19 Jul – Thu, 31 Jul 2025",
    category: "Kids",
    price: 250,
    tag: "VR Zone",
    link: "/activity/jus-jumpin-vr-surat",
  },
];

const Activities = () => {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const clearFilters = () => {
    setSelectedDate("");
    setSelectedCategory("");
    setSelectedTag("");
    setSelectedPrice("");
  };

  const filteredActivities = activities.filter((item) => {
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
            {/* Date */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Date</Accordion.Header>
              <Accordion.Body>
                <Stack direction="vertical" gap={2}>
                  {["Today", "Tomorrow", "This Weekend"].map((label) => (
                    <Button
                      key={label}
                      variant={selectedDate === label ? "danger" : "outline-danger"}
                      size="sm"
                      onClick={() =>
                        setSelectedDate(selectedDate === label ? "" : label)
                      }
                    >
                      {label}
                    </Button>
                  ))}
                  <Form.Check type="checkbox" label="Custom Range (Coming soon)" disabled />
                  <div className="text-end mt-2">
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => setSelectedDate("")}
                      style={{
                        textDecoration: "none",
                        color: "red",
                      }}
                    >
                      Clear
                    </Button>
                  </div>

                </Stack>
              </Accordion.Body>
            </Accordion.Item>

            {/* Categories */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Categories</Accordion.Header>
              <Accordion.Body>
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  size="sm"
                >
                  <option value="">All</option>
                  {[...new Set(activities.map((a) => a.category))].map((cat) => (
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
                    style={{
                      textDecoration: "none",
                      color: "red",
                    }}
                  >
                    Clear
                  </Button>
                </div>

              </Accordion.Body>
            </Accordion.Item>

            {/* Tags */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>More Filters</Accordion.Header>
              <Accordion.Body>
                <Form.Select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  size="sm"
                >
                  <option value="">All</option>
                  {[...new Set(activities.map((a) => a.tag))].map((tag) => (
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
                    style={{
                      textDecoration: "none",
                      color: "red",
                    }}
                  >
                    Clear
                  </Button>
                </div>

              </Accordion.Body>
            </Accordion.Item>

            {/* Price */}
            <Accordion.Item eventKey="3">
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
                    style={{
                      textDecoration: "none",
                      color: "red",
                    }}
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
          <Button className="w-100 mt-2" variant="outline-dark">
            Browse by Venues
          </Button>
        </Col>

        {/* Activity Cards */}
        <Col md={9}>
          <Row xs={1} sm={2} md={2} lg={3} className="g-4">
            {filteredActivities.map((item) => (
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

export default Activities;

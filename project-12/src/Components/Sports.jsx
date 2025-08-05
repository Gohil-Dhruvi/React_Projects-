import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Form, Accordion, Stack, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const sports = [
  {
    id: 1,
    title: "Chess Championship (Online) – All Ages",
    desc: "Virtual Rapid/Blitz Tournament",
    category: "Chess",
    type: "Online",
    mode: "Virtual",
    date: "2025-07-20 to 2025-07-27",
    location: "Online",
    price: 0,
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00442137-ljzjkpynhj-portrait.jpg",
    link: "/sport/chess-online-all-ages",
  },
  {
    id: 2,
    title: "Fit Ride",
    desc: "Virtual Cycling – 10 / 20 / 100 KM",
    category: "Cycling",
    type: "Fitness",
    mode: "Virtual",
    date: "2025-07-19 to 2025-07-27",
    location: "Online",
    price: 499,
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00449071-cddmlykzgw-portrait.jpg",
    link: "/sport/fit-ride",
  },
  {
    id: 3,
    title: "India Marathon – Get T‑Shirt & Medal by Courier",
    desc: "Virtual Run: 5K / 10K / 21K",
    category: "Running",
    type: "Marathon",
    mode: "Virtual",
    date: "2025-07-20",
    location: "Online",
    price: 899,
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00423283-thmlvqqfuf-portrait.jpg",
    link: "/sport/india-marathon-virtual",
  },
  {
    id: 4,
    title: "Bharat Cycling Challenge – Get Medal by Courier",
    desc: "Virtual Cycling – 10 / 25 / 50 / 100 KM",
    category: "Cycling",
    type: "Challenge",
    mode: "Virtual",
    date: "2025-07-20 to 2026-01-18",
    location: "Online",
    price: 299,
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453301-wrwzcbfnct-portrait.jpg",
    link: "/sport/bharat-cycling-challenge",
  },
  {
    id: 5,
    title: "Kargil Vijay Diwas Walkathon",
    desc: "Virtual Walkathon (Medal by Courier)",
    category: "Walking",
    type: "Walkathon",
    mode: "Virtual",
    date: "2025-07-17 to 2025-07-31",
    location: "Online",
    price: 0,
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00451014-tcuxvjwgfv-portrait.jpg",
    link: "/sport/kargil-vijay-diwas-walkathon",
  },
];

const Sports = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const clearFilters = () => {
    setSelectedDate("");
    setSelectedCategory("");
    setSelectedType("");
    setSelectedPrice("");
  };

  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);
  const filteredSports = sports.filter((item) => {
    const matchCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchType = selectedType ? item.type === selectedType : true;
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
    const matchDate = selectedDate ? item.date.includes(selectedDate) : true;

    return matchCategory && matchType && matchPrice && matchDate;
  });

  return (
    <Container className="my-5">
      <Row>
        {/* Filters */}
        <Col md={3} className="mb-4">
          <h5 className="fw-bold mb-3">Filters</h5>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Date</Accordion.Header>
              <Accordion.Body>
                <Form.Control
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  size="sm"
                />
                <div className="text-end mt-2">
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => setSelectedDate("")}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    Clear
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Category</Accordion.Header>
              <Accordion.Body>
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  size="sm"
                >
                  <option value="">All</option>
                  {[...new Set(sports.map((a) => a.category))].map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
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

            <Accordion.Item eventKey="2">
              <Accordion.Header>Type</Accordion.Header>
              <Accordion.Body>
                <Form.Select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  size="sm"
                >
                  <option value="">All</option>
                  {[...new Set(sports.map((a) => a.type))].map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </Form.Select>
                <div className="text-end mt-2">
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => setSelectedType("")}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    Clear
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>

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
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    Clear
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Button className="w-100 mt-4" variant="outline-danger" onClick={clearFilters}>
            Clear All Filters
          </Button>
        </Col>

        {/* Cards */}
        <Col md={9}>
          <Row xs={1} sm={2} md={2} lg={3} className="g-4">
            {filteredSports.map((item) => (
              <Col key={item.id}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  onClick={() => navigate(item.link)}
                  style={{ cursor: "pointer", borderRadius: "12px", overflow: "hidden" }}
                >
                  <Card.Img
                    src={item.image}
                    alt={item.title}
                    style={{ height: "260px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                  />
                  <Card.Body style={{ padding: "10px" }}>
                    <Card.Title style={{ fontSize: "16px", fontWeight: "600" }}>{item.title}</Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: "13px" }}>{item.desc}</Card.Text>
                    <Card.Text className="text-muted" style={{ fontSize: "12px" }}>{item.date}</Card.Text>
                    <Card.Text style={{ fontSize: "13px", color: "#000" }}>
                      ₹{item.price}
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

export default Sports;
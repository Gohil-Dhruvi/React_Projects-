import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const music = [
  { id:1, title:"TELLING LIES", desc:"Standup Comedy", image:"https://i.imgur.com/VPF7ZAl.png", date:"Fri, 7 Aug", link:"/music/1" },
  { id:2, title:"Comedy Shows", desc:"25+ Events", image:"https://i.imgur.com/B5kqAts.png", date:"Ongoing", link:"/music/2" },
  { id:3, title:"Classical Night", desc:"Indian Classical", image:"https://cdn.pixabay.com/photo/2017/10/20/15/22/tabla.jpg", date:"Sat, 8 Aug", link:"/music/3" },
  { id:4, title:"Rock Concert", desc:"Live Rock Band", image:"https://cdn.pixabay.com/photo/2017/01/16/19/36/concert-1988432_1280.jpg", date:"Sun, 9 Aug", link:"/music/4" },
  { id:5, title:"Jazz Evening", desc:"Smooth Jazz", image:"https://cdn.pixabay.com/photo/2015/11/19/20/13/jazz-1057575_1280.jpg", date:"Mon, 10 Aug", link:"/music/5" },
];

const Music = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-dark">Music</h2>
      <Row xs={2} sm={2} md={3} lg={4} xl={5} className="g-4">
        {music.map((item) => (
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
                <Card.Title style={{ fontSize: "16px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {item.title}
                </Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "13px" }}>
                  {item.desc}
                </Card.Text>
                <Card.Text className="text-muted" style={{ fontSize: "12px" }}>{item.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Music;

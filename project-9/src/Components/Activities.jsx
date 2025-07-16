import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const activities = [
  { id:1, title:"Scuba Diving", desc:"Underwater Adventure", image:"https://www.scubadiving.com/sites/scubadiving.com/files/100scubaistock.jpg", date:"Sun, 2 Aug", link:"/activity/1" },
  { id:2, title:"Hot Air Balloon", desc:"Sky View", image:"https://upload.wikimedia.org/wikipedia/commons/b/b5/MassAscension2013.jpg", date:"Mon, 3 Aug", link:"/activity/2" },
  { id:3, title:"Camping Night", desc:"Bonfire & Music", image:"https://upload.wikimedia.org/wikipedia/commons/6/66/Camping_woodland.jpg", date:"Tue, 4 Aug", link:"/activity/3" },
  { id:4, title:"Go Karting", desc:"Speed Fun", image:"https://media.istockphoto.com/id/1450043501/photo/kart-racing.jpg", date:"Wed, 5 Aug", link:"/activity/4" },
  { id:5, title:"Imagicaa Theme Park", desc:"Thrill & Adventure", image:"https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-imagicaa-theme-park.jpg", date:"Thu, 6 Aug", link:"/activity/5" },
];

const Activities = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-dark">Activities</h2>
      <Row xs={2} sm={2} md={3} lg={4} xl={5} className="g-4">
        {activities.map((item) => (
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

export default Activities;

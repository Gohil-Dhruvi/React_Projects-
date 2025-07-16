import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const sports = [
  { id:1, title:"India vs Pakistan", desc:"T20 Match", image:"https://imgk.timesnownews.com/story/Ind_Pak_Asia_Cup.jpg", date:"Tue, 28 Jul", link:"/sport/1" },
  { id:2, title:"Pro Kabaddi", desc:"Live League", image:"https://assets.sportstar.thehindu.com/2023/12/05/Pro-Kabaddi-league-2023--2.jpg", date:"Wed, 29 Jul", link:"/sport/2" },
  { id:3, title:"ISL Football", desc:"Indian Super League", image:"https://staticg.sportskeeda.com/editor/2022/10/51dd3-16661714630335-1920.jpg", date:"Thu, 30 Jul", link:"/sport/3" },
  { id:4, title:"Marathon", desc:"Fitness Challenge", image:"https://www.nptrun.com/images/about-marathon.jpg", date:"Fri, 31 Jul", link:"/sport/4" },
  { id:5, title:"Badminton Premier", desc:"Fast & Furious", image:"https://www.sportsadda.com/static-assets/waf-images/f2/84/5b/16-9/0SyVyUeOBl.jpg", date:"Sat, 1 Aug", link:"/sport/5" },
];

const Sports = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-dark">Sports</h2>
      <Row xs={2} sm={2} md={3} lg={4} xl={5} className="g-4">
        {sports.map((item) => (
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

export default Sports;

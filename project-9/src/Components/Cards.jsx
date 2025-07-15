import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const data = {
  Movies: [
    {
      id: 1,
      title: "Jawan",
      description: "Action, Drama",
      image: "https://i.imgur.com/GfYBfRh.jpg",
      link: "/movie/1",
    },
    {
      id: 2,
      title: "Pathaan",
      description: "Spy Thriller",
      image: "https://i.imgur.com/QVShzPH.jpg",
      link: "/movie/2",
    },
    {
      id: 3,
      title: "RRR",
      description: "Epic Action",
      image: "https://i.imgur.com/2uql4AI.jpg",
      link: "/movie/3",
    },
    {
      id: 4,
      title: "Animal",
      description: "Crime Drama",
      image: "https://i.imgur.com/YaKUqSS.jpg",
      link: "/movie/4",
    },
    {
      id: 5,
      title: "3 Idiots",
      description: "Comedy, Education",
      image: "https://i.imgur.com/6StU3oW.jpg",
      link: "/movie/5",
    },
  ],
  Plays: [
    {
      id: 1,
      title: "Mughal-e-Azam",
      description: "Musical Drama",
      image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-mughal-e-azam-musical-2023-7-18-t-11-41-34.jpg",
      link: "/play/1",
    },
    {
      id: 2,
      title: "Court Martial",
      description: "Suspense Courtroom",
      image: "https://i.imgur.com/0K5jNKJ.jpg",
      link: "/play/2",
    },
    {
      id: 3,
      title: "Hello Zindagi",
      description: "Social Comedy",
      image: "https://i.imgur.com/lvb5UUE.jpg",
      link: "/play/3",
    },
    {
      id: 4,
      title: "Waiting For Godot",
      description: "Absurdist Classic",
      image: "https://i.imgur.com/1GtwSBf.jpg",
      link: "/play/4",
    },
    {
      id: 5,
      title: "Chanakya",
      description: "Historical Play",
      image: "https://i.imgur.com/5k6aaC7.jpg",
      link: "/play/5",
    },
  ],
  Events: [
    {
      id: 1,
      title: "Sunburn Goa",
      description: "Music Festival",
      image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-goa-2024-6-12-t-12-8-46.jpg",
      link: "/event/1",
    },
    {
      id: 2,
      title: "Comic Con India",
      description: "Pop Culture Event",
      image: "https://i.imgur.com/JRYeGaX.jpg",
      link: "/event/2",
    },
    {
      id: 3,
      title: "Food Fest",
      description: "Culinary Delights",
      image: "https://i.imgur.com/7g8eAga.jpg",
      link: "/event/3",
    },
    {
      id: 4,
      title: "Fashion Week",
      description: "Style Showcase",
      image: "https://i.imgur.com/UmePt7O.jpg",
      link: "/event/4",
    },
    {
      id: 5,
      title: "Tech Conference",
      description: "Innovative Talks",
      image: "https://i.imgur.com/yj6kI7B.jpg",
      link: "/event/5",
    },
  ],
  Sports: [
    {
      id: 1,
      title: "India vs Pakistan",
      description: "T20 Match",
      image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-india-vs-pakistan-2024-6-18-t-15-14-25.jpg",
      link: "/sport/1",
    },
    {
      id: 2,
      title: "Pro Kabaddi",
      description: "Live League",
      image: "https://i.imgur.com/btKTV5m.jpg",
      link: "/sport/2",
    },
    {
      id: 3,
      title: "ISL Football",
      description: "Indian Super League",
      image: "https://i.imgur.com/xKuyXzQ.jpg",
      link: "/sport/3",
    },
    {
      id: 4,
      title: "Marathon",
      description: "Fitness Challenge",
      image: "https://i.imgur.com/E6hYMiZ.jpg",
      link: "/sport/4",
    },
    {
      id: 5,
      title: "Badminton Premier",
      description: "Fast & Furious Rallies",
      image: "https://i.imgur.com/sWTCXiD.jpg",
      link: "/sport/5",
    },
  ],
  Activities: [
    {
      id: 1,
      title: "Imagicaa Theme Park",
      description: "Thrill & Adventure",
      image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-imagicaa-theme-park-2024-6-24-t-12-0-42.jpg",
      link: "/activity/1",
    },
    {
      id: 2,
      title: "Scuba Diving",
      description: "Underwater Adventure",
      image: "https://i.imgur.com/jNNH9Af.jpg",
      link: "/activity/2",
    },
    {
      id: 3,
      title: "Hot Air Balloon",
      description: "Sky View Experience",
      image: "https://i.imgur.com/8LE9q4P.jpg",
      link: "/activity/3",
    },
    {
      id: 4,
      title: "Camping Night",
      description: "Bonfire & Music",
      image: "https://i.imgur.com/ZRE7kxk.jpg",
      link: "/activity/4",
    },
    {
      id: 5,
      title: "Go Karting",
      description: "Speed Fun",
      image: "https://i.imgur.com/NIV6qN8.jpg",
      link: "/activity/5",
    },
  ],
};

const CategorySectionCards = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      {Object.entries(data).map(([category, cards]) => (
        <div key={category} className="mb-5">
          <h2 className="mb-4 text-primary">🎟 {category}</h2>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {cards.map((item) => (
              <Col key={item.id}>
                <Card
                  className="h-100 shadow-sm"
                  onClick={() => navigate(item.link)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="text-muted">{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default CategorySectionCards;

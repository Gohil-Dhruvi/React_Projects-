import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const data = {
  Movies: [
    { id:1, title:"Jawan", desc:"Action / Drama", image:"https://upload.wikimedia.org/wikipedia/en/f/f9/Jawan_film_poster.jpg", rating:"8.3/10", votes:"10.2K Votes", link:"/movie/1" },
    { id:2, title:"Pathaan", desc:"Spy Thriller", image:"https://upload.wikimedia.org/wikipedia/en/6/65/Pathaan_film_poster.jpg", rating:"7.9/10", votes:"8.7K Votes", link:"/movie/2" },
    { id:3, title:"RRR", desc:"Epic Action", image:"https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg", rating:"8.7/10", votes:"12.3K Votes", link:"/movie/3" },
    { id:4, title:"Animal", desc:"Crime Drama", image:"https://upload.wikimedia.org/wikipedia/en/2/26/Animal_film_teaser_poster.jpg", rating:"7.6/10", votes:"6.9K Votes", link:"/movie/4" },
    { id:5, title:"3 Idiots", desc:"Comedy / Education", image:"https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg", rating:"9.1/10", votes:"14.7K Votes", link:"/movie/5" },
  ],
  Plays: [
    { id:1, title:"Bluffmaster Gujjubhai", desc:"Sanjeev Kumar Auditorium: Surat", image:"https://i.imgur.com/5k6aaC7.jpg", date:"Fri, 18 Jul", link:"/play/1" },
    { id:2, title:"Jar Tar Chi Goshta", desc:"Marathi Play", image:"https://i.imgur.com/xxxxx1.png", date:"Sat, 19 Jul", link:"/play/2" },
    { id:3, title:"Court Martial", desc:"Courtroom Suspense", image:"https://i.imgur.com/0K5jNKJ.jpg", date:"Sun, 20 Jul", link:"/play/3" },
    { id:4, title:"Hello Zindagi", desc:"Social Comedy", image:"https://i.imgur.com/lvb5UUE.jpg", date:"Mon, 21 Jul", link:"/play/4" },
    { id:5, title:"Waiting For Godot", desc:"Absurdist Classic", image:"https://i.imgur.com/1GtwSBf.jpg", date:"Tue, 22 Jul", link:"/play/5" },
  ],
  Events: [
    { id:1, title:"Sunburn Goa", desc:"Music Festival", image:"https://upload.wikimedia.org/wikipedia/commons/1/1d/Sunburn_Festival_2019.jpg", date:"Thu, 23 Jul", link:"/event/1" },
    { id:2, title:"Comic Con India", desc:"Pop Culture", image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/11/17/2554136-comic-con.jpg", date:"Fri, 24 Jul", link:"/event/2" },
    { id:3, title:"Food Fest", desc:"Culinary Delights", image:"https://www.fabhotels.com/blog/wp-content/uploads/2018/05/Food-Festivals-in-India.jpg", date:"Sat, 25 Jul", link:"/event/3" },
    { id:4, title:"Fashion Week", desc:"Style Showcase", image:"https://images.livemint.com/img/2022/03/24/600x338/Lakme_Fashion_Week_2022_1648114973913_1648114984088.jpg", date:"Sun, 26 Jul", link:"/event/4" },
    { id:5, title:"Tech Conference", desc:"Innovative Talks", image:"https://cdn.pixabay.com/photo/2016/11/29/04/15/technology-1869592_1280.jpg", date:"Mon, 27 Jul", link:"/event/5" },
  ],
  Sports: [
    { id:1, title:"India vs Pakistan", desc:"T20 Match", image:"https://imgk.timesnownews.com/story/Ind_Pak_Asia_Cup.jpg", date:"Tue, 28 Jul", link:"/sport/1" },
    { id:2, title:"Pro Kabaddi", desc:"Live League", image:"https://assets.sportstar.thehindu.com/2023/12/05/Pro-Kabaddi-league-2023--2.jpg", date:"Wed, 29 Jul", link:"/sport/2" },
    { id:3, title:"ISL Football", desc:"Indian Super League", image:"https://staticg.sportskeeda.com/editor/2022/10/51dd3-16661714630335-1920.jpg", date:"Thu, 30 Jul", link:"/sport/3" },
    { id:4, title:"Marathon", desc:"Fitness Challenge", image:"https://www.nptrun.com/images/about-marathon.jpg", date:"Fri, 31 Jul", link:"/sport/4" },
    { id:5, title:"Badminton Premier", desc:"Fast & Furious", image:"https://www.sportsadda.com/static-assets/waf-images/f2/84/5b/16-9/0SyVyUeOBl.jpg", date:"Sat, 1 Aug", link:"/sport/5" },
  ],
  Activities: [
    { id:1, title:"Scuba Diving", desc:"Underwater Adventure", image:"https://www.scubadiving.com/sites/scubadiving.com/files/100scubaistock.jpg", date:"Sun, 2 Aug", link:"/activity/1" },
    { id:2, title:"Hot Air Balloon", desc:"Sky View", image:"https://upload.wikimedia.org/wikipedia/commons/b/b5/MassAscension2013.jpg", date:"Mon, 3 Aug", link:"/activity/2" },
    { id:3, title:"Camping Night", desc:"Bonfire & Music", image:"https://upload.wikimedia.org/wikipedia/commons/6/66/Camping_woodland.jpg", date:"Tue, 4 Aug", link:"/activity/3" },
    { id:4, title:"Go Karting", desc:"Speed Fun", image:"https://media.istockphoto.com/id/1450043501/photo/kart-racing.jpg", date:"Wed, 5 Aug", link:"/activity/4" },
    { id:5, title:"Imagicaa Theme Park", desc:"Thrill & Adventure", image:"https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-imagicaa-theme-park.jpg", date:"Thu, 6 Aug", link:"/activity/5" },
  ],
  Music: [
    { id:1, title:"TELLING LIES", desc:"Standup Comedy", image:"https://i.imgur.com/VPF7ZAl.png", date:"Fri, 7 Aug", link:"/music/1" },
    { id:2, title:"Comedy Shows", desc:"25+ Events", image:"https://i.imgur.com/B5kqAts.png", date:"Ongoing", link:"/music/2" },
    { id:3, title:"Classical Night", desc:"Indian Classical", image:"https://cdn.pixabay.com/photo/2017/10/20/15/22/tabla.jpg", date:"Sat, 8 Aug", link:"/music/3" },
    { id:4, title:"Rock Concert", desc:"Live Rock Band", image:"https://cdn.pixabay.com/photo/2017/01/16/19/36/concert-1988432_1280.jpg", date:"Sun, 9 Aug", link:"/music/4" },
    { id:5, title:"Jazz Evening", desc:"Smooth Jazz", image:"https://cdn.pixabay.com/photo/2015/11/19/20/13/jazz-1057575_1280.jpg", date:"Mon, 10 Aug", link:"/music/5" },
  ],
};

const CategorySectionCards = () => {
  const navigate = useNavigate();

  const renderFooterText = (item) => {
    if (item.rating) {
      return <>
        <FaStar color="red" /> <span>{item.rating}</span> <span className="ms-2">{item.votes}</span>
      </>;
    }
    return <span>{item.date}</span>;
  };

  return (
    <Container className="my-5">
      {Object.entries(data).map(([category, cards]) => (
        <div key={category} className="mb-5">
          <h2 className="mb-4 text-dark">{category}</h2>
          <Row xs={2} sm={2} md={3} lg={4} xl={5} className="g-4">
            {cards.map((item) => (
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
                      style={{ height: "260px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "14px",
                        padding: "5px 10px",
                      }}
                    >
                      {renderFooterText(item)}
                    </div>
                  </div>
                  <Card.Body style={{ padding: "10px" }}>
                    <Card.Title style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: "13px" }}>
                      {item.desc}
                    </Card.Text>
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

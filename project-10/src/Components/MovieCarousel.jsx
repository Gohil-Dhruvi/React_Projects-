import { Carousel } from "react-bootstrap";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const MovieCarousel = () => {
  const bannerImages = [
    {
      id: 1,
      image: banner1,
      title: "Blockbuster Premieres"
    },
    {
      id: 2,
      image: banner2,
      title: "Trending Now"
    },
    {
      id: 3,
      image: banner3,
      title: "Must Watch Shows"
    }
  ];

  return (
    // <Carousel fade className="mb-4">
    <Carousel fade interval={3000}>
      {bannerImages.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            src={item.image}
            className="d-block w-100"
            alt={item.title}
            style={{ height: "300px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;

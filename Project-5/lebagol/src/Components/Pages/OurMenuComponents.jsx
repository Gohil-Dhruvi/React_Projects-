import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Cream from '../../assets/menu-1.png';
import Ripple from '../../assets/menu-2.png';
import Dough from '../../assets/menu-3.png';
import BRipple from '../../assets/menu-4.png';
import Pineapple from '../../assets/menu-5.png';
import HalfGallon from '../../assets/menu-6.png';
import BananaSplit from '../../assets/menu-7.png';
import PineappleSundae from '../../assets/menu-8.png';
import ChocolateSundae from '../../assets/menu-9.png';
import RegularMilkshake from '../../assets/menu-10.png';
import Kiddie from '../../assets/menu-11.png';
import Regular from '../../assets/menu-12.png';
import Waffle from '../../assets/menu-13.png';
import Sugar from '../../assets/menu-14.png';
import Jacketed from '../../assets/menu-15.png';

const OuerMenu2 = () => {
  const [menu] = useState([
    {
      category: 'Ice Cream Flavors',
      items: [
        { name: "Cookies'n Cream", price: '$124.50', img: Cream },
        { name: 'Chocolate Ripple', price: '$124.50', img: Ripple },
        { name: 'Cookie Dough', price: '$124.50', img: Dough },
        { name: 'Butter Ripple', price: '$124.50', img: BRipple },
        { name: 'Pineapple', price: '$124.50', img: Pineapple },
      ],
    },
    {
      category: 'Ice Cream Items',
      items: [
        { name: 'Half Gallon', price: '$124.50', img: HalfGallon },
        { name: 'Banana Split', price: '$124.50', img: BananaSplit },
        { name: 'Pineapple Sundae', price: '$124.50', img: PineappleSundae },
        { name: 'Chocolate Sundae', price: '$124.50', img: ChocolateSundae },
        { name: 'Regular Milkshake', price: '$124.50', img: RegularMilkshake },
      ],
    },
    {
      category: 'Ice Cream Cone',
      items: [
        { name: 'Kiddie', price: '$124.50', img: Kiddie },
        { name: 'Regular', price: '$124.50', img: Regular },
        { name: 'Waffle Cones', price: '$124.50', img: Waffle },
        { name: 'Sugar Cone', price: '$124.50', img: Sugar },
        { name: 'Jacketed Cones', price: '$124.50', img: Jacketed },
      ],
    },
  ]);

  // Inline style objects
  const containerStyle = {
    backgroundColor: '#fff',
    padding: '3rem 1rem',
    overflow: 'hidden',
  };

  const categoryLabelStyle = {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    backgroundColor: 'red',
    color: 'white',
    padding: '15px 8px',
    fontWeight: 'bold',
    fontSize: '14px',
    letterSpacing: '2px',
    lineHeight: '20px',
    textAlign: 'center',
    borderRadius: '4px',
    marginRight: '10px',
    height: 'fit-content',
  };

  const imageStyle = {
    maxWidth: '200px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  const nameStyle = {
    fontSize: '19px',
    color: '#333',
    fontWeight: 600,
  };

  const priceStyle = {
    fontSize: '16px',
    fontWeight: 600,
    color: '#dc3545', 
  };

  return (
    <Container fluid style={containerStyle}>
      {menu.map((section, idx) => (
        <Row key={idx} className="align-items-start mb-5 d-flex">
          <Col xs={12} className="d-flex">
            <div style={categoryLabelStyle}>{section.category}</div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4} 
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 }, 
              }}
            >
              {section.items.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="text-center">
                    <img src={item.img} alt={item.name} style={imageStyle} className="img-fluid mb-2"  />
                    <div style={nameStyle}>{item.name}</div>
                    <div style={priceStyle}>{item.price}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default OuerMenu2;

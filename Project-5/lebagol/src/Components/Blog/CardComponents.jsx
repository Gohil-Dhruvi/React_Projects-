import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function CardComponents() {
    const [cards] = useState([
        {
            id: 1,
            title: 'The Best Ways to Cool Off This Summer',
            description: 'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery ...',
            date: 'March 8, 2024',
            mainImage: '../src/assets/fruit-strw.jpg',
            userImage: '../src/assets/user.jpg',
            category: 'Ingredients',
            author: 'admin',
        },
        {
            id: 2,
            title: 'French Vanilla Ice Cream For Any Occasion',
            description: 'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery ...',
            date: 'March 9, 2024',
            mainImage: '../src/assets/Vanilla.jpg',
            userImage: '../src/assets/user.jpg',
            category: 'Food News',
            author: 'admin',
        },
        {
            id: 3,
            title: 'Fancy Figs? Make this Ice Cream',
            description: 'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery ...',
            date: 'March 10, 2024',
            mainImage: '../src/assets/fancy-strawberry.jpg',
            userImage: '../src/assets/user.jpg',
            category: 'Gluten Free',
            author: 'admin',
        },
        {
            id: 2,
            title: 'Cabernet Chocolate Chunk Ice Cream',
            description: 'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery ...',
            date: 'March 9, 2024',
            mainImage: '../src/assets/vanilla-strawberry.jpg',
            userImage: '../src/assets/user.jpg',
            category: 'Food Reviews',
            author: 'admin',
        },
        {
            id: 3,
            title: '5 Dreamy Ice Cream Hacks for Summer',
            description: 'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery ...',
            date: 'March 10, 2024',
            mainImage: '../src/assets/fruit-strawberry.jpg',
            userImage: '../src/assets/user.jpg',
            category: 'Ingredients',
            author: 'admin',
        },
        {
            id: 2,
            title: 'The Best Ice Cream You’ll Never Eat',
            description: 'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery ...',
            date: 'March 9, 2024',
            mainImage: '../src/assets/chocalate.jpg',
            userImage: '../src/assets/user.jpg',
            category: 'Vegetarian',
            author: 'admin',
        },
        {
            id: 3,
            title: 'What’s Better Than Ice Cream?',
            description: 'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery ...',
            date: 'March 10, 2024',
            mainImage: '../src/assets/strawberry.jpg',
            userImage: '../src/assets/user.jpg',
            category: 'Food Reviews',
            author: 'admin',
        },
        {
            id: 2,
            title: 'Homemade Ice Cream… in a Vitamix?',
            description: 'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery ...',
            date: 'March 9, 2024',
            mainImage: '../src/assets/vitamix.jpg',
            userImage: '../src/assets/user.jpg',
            category: 'Food News',
            author: 'admin',
        },
        {
            id: 3,
            title: '5 Dreamy Ice Cream Hacks for Summer',
            description: 'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery ...',
            date: 'March 10, 2024',
            mainImage: '../src/assets/techniques.jpg',
            userImage: '../src/assets/user.jpg',
            category: 'Techniques',
            author: 'admin',
        },
        {
            id: 3,
            title: 'The Best Ways to Cool Off This Summer',
            description: 'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery ...',
            date: 'March 10, 2024',
            mainImage: '../src/assets/gluten.jpg',
            userImage: '../src/assets/user.jpg',
            category: 'Gluten Free',
            author: 'admin',
        }
    ]);
    return (
        <Container fluid className="my-5 ">
            <Row className="g-4">
                {cards.map((card) => (
                    <Col key={card.id} lg={4} md={6} sm={12}>
                        <Card className="h-100 border-0">
                            {/* Image section with button over it */}
                            <div className="position-relative" style={{
                                overflow: 'hidden',
                                width: '391px',
                                height: '296px'
                            }}>
                                <Card.Img
                                    src={card.mainImage}
                                    alt="Main"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                                <Button
                                    variant="light"
                                    className="position-absolute top-0 start-0 m-4 px-3 p-0 border text-danger bg-white fs-6 fw-semibold rounded-4 transition text-uppercase"
                                    style={{ transition: 'all 0.3s ease' }}
                                    onMouseOver={(e) => {
                                        e.target.classList.remove('text-danger', 'bg-white');
                                        e.target.classList.add('text-white', 'bg-danger', 'border-0');
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.classList.remove('text-white', 'bg-danger');
                                        e.target.classList.add('text-danger', 'bg-white');
                                    }}
                                >
                                    {card.category}
                                </Button>
                            </div>

                            {/* Card content */}
                            <Card.Body>
                                <Card.Title>
                                    <Row className="align-items-center mb-3">
                                        <Col xs="auto">
                                            <Image
                                                src={card.userImage}
                                                alt="User"
                                                roundedCircle
                                                width={40}
                                                height={40}
                                            />
                                        </Col>
                                        <Col className="fs-6 text-secondary"><span>By </span>
                                            <span
                                                className="pe-3"
                                                style={{ color: 'red', cursor: 'pointer' }}
                                                onMouseOver={(e) => (e.target.style.color = '#000000')}
                                                onMouseOut={(e) => (e.target.style.color = 'red')}
                                            >
                                                {card.author}
                                            </span>
                                            <span
                                                className="pe-3"
                                                style={{ color: '#6c757d', cursor: 'pointer' }}
                                                onMouseOver={(e) => (e.target.style.color = '#000000')}
                                                onMouseOut={(e) => (e.target.style.color = '#6c757d')}
                                            >
                                                {card.date}
                                            </span>
                                        </Col>

                                    </Row>
                                </Card.Title>

                                <Card.Text className="fw-bold fs-3" style={{
                                    fontFamily: `"DM sans`, fontWeight: 300
                                }}>{card.title}</Card.Text>
                                <Card.Text className="text-secondary fs-6">{card.description}</Card.Text>

                                <Link
                                    to={`/blog/${card.id}`}
                                    className="fw-semibold text-decoration-none d-inline-flex align-items-center"
                                    style={{ color: 'black', transition: 'color 0.3s' }}
                                    onMouseOver={(e) => (e.target.style.color = 'red')}
                                    onMouseOut={(e) => (e.target.style.color = 'black')}
                                >
                                    <FaArrowRight style={{ color: 'red', marginRight: '5px' }} />
                                    Read More
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <Pagination/> */}
        </Container>
    );
}

export default CardComponents;

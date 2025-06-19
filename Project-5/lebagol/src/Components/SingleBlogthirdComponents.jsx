import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import fruitImage from '../assets/blog_single_img2.jpg';

function SingleBlog() {
    const blog = {
        id: 1,
        title: 'Simple Mango Sorbet',
        description:
            'These recipes are sure to give you a delicious cooldown this summer! This is the first step to ice cream making, and if you’re looking to dabble into more ice cream flavors using different techniques and equipment, visit our other blogs like one for making Cabernet Chocolate Chunk Ice Cream or one for Honey Roasted Fig Ice Cream. On The Chopping Blog, we have different types of ice cream recipes to follow using different types of techniques, so this summer you can become a professional ice cream maker!',
        desc:
            'This no churn ice cream is sure to not only impress you but everyone around you. It tastes delicious, and no one will be able to tell it didn’t come from an ice cream maker. They may even think this ice cream is store-bought!',
        mainImage: fruitImage,
    };

    return (
        <Container fluid className="py-5 mt-4">
            <Row>
                <Col xs={12} md={10} lg={9}>
                        <div className="border-0 p-3 p-md-4">
                            {/* Blog Image */}
                        <Image
                            src={blog.mainImage}
                            alt="Blog Main"
                            className="mb-4"
                            style={{ height: '500px', objectFit: 'cover', width: '860px' }}
                        />

                        {/* Blog Title */}
                        <h2 className="fw-bold mb-4 text-dark" style={{ fontFamily: 'DM Sans', fontSize: '2.5rem' , width:'800px'}}>
                            {blog.title}
                        </h2>

                        {/* Main Description */}
                        <p className="text-secondary fs-5" style={{width:'850px'}}>{blog.description}</p>

                        {/* Extra Description */}
                        <p className="text-secondary fs-5 mb-0" style={{width:'850px'}}>{blog.desc}</p>
                        </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SingleBlog;

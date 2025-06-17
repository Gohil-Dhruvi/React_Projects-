import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import BlogSidebar from './BlogSiderComponents';
import LeaveReplyForm from './BlogFormComponents';

import fruitImage from '../assets/fruit-strw.jpg';
import userImage from '../assets/user.jpg';
import SingleBlogSecondComponents from './SingleBlogSecondComponents';
import CommentsSection from './CommentsSection';
import RecentPosts from './PrevPostComponents';
import SingleBlogLinkComponents from './SingleBlogLinkComponents';

function SingleBlog() {
    const blog = {
        id: 1,
        title: 'The Best Ways to Cool Off This Summer',
        description:
            'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery stores, but why not make some yourself at home? Most of us buy ice cream, popsicles, and sorbets at the store because it is easier and making these frozen treats is something that can look a bit intimidating, but it’s actually easier than you may think.',
        desc:
            'No churn ice cream recipes start with a base of heavy whipping cream, condensed milk, and vanilla extract or vanilla bean. And if you want to be creative, just add any of your favorite flavors or ice cream add ins. As for equipment, all you will need is a stand mixer or hand mixer, resealable container and plastic wrap.',
        date: 'March 8, 2024',
        mainImage: fruitImage,
        userImage: userImage,
        author: 'admin',
    };

    const categories = ['Food News', 'Food Reviews', 'Gluten Free', 'Ingredients', 'Techniques', 'Vegetarian'];

    return (
        <Container fluid className="py-4 mt-5">
            <Row>
                {/* Blog Content Area */}
                <Col lg={9} md={12}>
                    {/* Blog Card */}
                    <Card className="border-0 p-4 mb-4">
                        {/* Author and Date Info */}
                        <div className="d-flex align-items-center mb-3">
                            <Image
                                src={blog.userImage}
                                alt="User"
                                roundedCircle
                                width={40}
                                height={40}
                                className="me-3"
                            />
                            <Col className="fs-6 text-secondary">
                                <span>By </span>
                                <span
                                    className="pe-3"
                                    style={{ color: 'red', cursor: 'pointer' }}
                                    onMouseOver={(e) => (e.target.style.color = '#000000')}
                                    onMouseOut={(e) => (e.target.style.color = 'red')}
                                >
                                    {blog.author}
                                </span>
                                <span
                                    className="pe-3"
                                    style={{ color: '#6c757d', cursor: 'pointer' }}
                                    onMouseOver={(e) => (e.target.style.color = '#000000')}
                                    onMouseOut={(e) => (e.target.style.color = '#6c757d')}
                                >
                                    {blog.date}
                                </span>
                            </Col>
                        </div>

                        {/* Blog Title */}
                        <h2 className="fw-bold mb-4" style={{ fontFamily: 'DM Sans', fontSize: '40px' }}>
                            {blog.title}
                        </h2>

                        {/* Short Description */}
                        <p className="text-secondary">{blog.description}</p>

                        {/* Main Blog Image */}
                        <Card.Img
                            src={blog.mainImage}
                            alt="Main"
                            className="w-100 my-3"
                            style={{ height: '500px', objectFit: 'cover', borderRadius: '0' }}
                        />

                        {/* Full Description */}
                        <p className="text-secondary">{blog.desc}</p>
                    </Card>

                    {/* Extra Blog Content Section */}
                    <SingleBlogSecondComponents />
                    <SingleBlogLinkComponents />
                    <RecentPosts />
                    <CommentsSection />
                    {/* Leave a Reply Form */}
                    <LeaveReplyForm />
                </Col>

                {/* Sidebar on Right (hidden on screens < 1200px) */}
                <Col lg={3} md={12} className="d-none d-lg-block">
                    <BlogSidebar categories={categories} />
                </Col>
            </Row>
        </Container>
    );
}

export default SingleBlog;

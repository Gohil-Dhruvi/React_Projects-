import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import BlogSidebar from './BlogSiderComponents';
import LeaveReplyForm from './BlogFormComponents';

import blogImage from '../assets/blog_single_img1.jpg';
import userImage from '../assets/user.jpg';
import SingleBlogLinkComponents from './SingleBlogLinkComponents';
import SingleBlogThirdComponents from './SingleBlogthirdComponents';
import RecentPosts from './PrevPostComponents';
import CommentsSection from './CommentsSection';

function SingleBlogSecondComponents() {
  const blog = {
    id: 2,
    title: 'Strawberry Swirl No Churn Ice Cream',
    description:
      'Scroll down for a printable version of this recipe Yield: 6 servings Prep Time: 15 minutes Cook Time: 10 minutes Freeze Time: 6 – 8 hours Total Time: 6 hours and 25 minutes 2 cups heavy whipping cream 14 oz condensed milk 1 1/2 cups strawberries, small diced 1/3 cup sugar 1 teaspoon vanilla',
    desc:
      'If you are looking for something fruitier and dairy free, I suggest a sorbet! They are very easy to make and my favorite go to summer sorbet is mango.',
      step:'1. In a small saucepan, add strawberries and sugar, cook for 10 minutes until the sugar is dissolved and the strawberries are soft, and the mixture is a syrup consistency, then let cool to room temperature.',
      step1:'2. In a bowl, completely combine the condensed milk and vanilla.',
      step2:'3. Once the strawberry mixture is cool, with a blender or an immersion blender, blend the mixture until smooth and resembles a sauce.',
    date: 'March 9, 2024',
    mainImage: blogImage,
    userImage: userImage,
    author: 'admin',
  };


  return (
    <Container fluid className="py-4">
      <Row>
        {/* Blog Content */}
        <Col lg={9} md={12}>
          <Card className="border-0 p-4">
            {/* Title */}
            <h2 className="fw-bold mb-4" style={{ fontFamily: 'DM Sans', fontSize: '40px' }}>
              {blog.title}
            </h2>

            {/* 2 Column Layout */}
            <Row className="align-items-center">
              {/* Text */}
              <Col md={6} className="mb-3 mb-md-0">
                <p className="text-secondary p-3">{blog.description}</p>
              </Col>

              {/* Image */}
              <Col md={6}>
                <Card.Img
                  src={blog.mainImage}
                  alt="Main"
                  style={{ height: '400px',width:'480px', objectFit: 'cover', borderRadius: '0' }}
                />
              </Col>
                <p className="text-secondary">{blog.desc}</p>
                <p className="text-secondary m-0 ps-5">{blog.step}</p>
                <p className="text-secondary m-0 ps-5">{blog.step1}</p>
                <p className="text-secondary m-0 ps-5">{blog.step2}</p>

            </Row>
          </Card>
          <SingleBlogThirdComponents/>
        </Col>

      </Row>
    </Container>
  );
}

export default SingleBlogSecondComponents;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import cardData from './CardData';
import BlogSidebar from './BlogSiderComponents';
import LeaveReplyForm from './BlogFormComponents';
import SingleBlogSecondComponents from './SingleBlogSecondComponents';
import CommentsSection from './CommentsSection';
import RecentPosts from './PrevPostComponents';
import SingleBlogLinkComponents from './SingleBlogLinkComponents';

function SingleBlog() {
  const { id } = useParams();
  const blog = cardData.find((item) => item.id === parseInt(id));

  const categories = ['Food News', 'Food Reviews', 'Gluten Free', 'Ingredients', 'Techniques', 'Vegetarian'];

  if (!blog) return <p className="text-center my-5">Post not found</p>;

  return (
    <Container fluid className="py-4 mt-5">
      <Row>
        {/* Main Content */}
        <Col lg={9} md={12}>
          <Card className="border-0 p-4 mb-4">
            {/* Author Info */}
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
                  onMouseOver={(e) => (e.target.style.color = '#000') }
                  onMouseOut={(e) => (e.target.style.color = 'red') }
                >
                  {blog.author}
                </span>
                <span
                  className="pe-3"
                  style={{ color: '#6c757d', cursor: 'pointer' }}
                  onMouseOver={(e) => (e.target.style.color = '#000') }
                  onMouseOut={(e) => (e.target.style.color = '#6c757d') }
                >
                  {blog.date}
                </span>
              </Col>
            </div>

            {/* Title */}
            <h2
              className="fw-bold mb-4"
              style={{
                fontFamily: 'DM Sans',
                fontSize: '40px',
                transition: 'color 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => (e.target.style.color = 'red')}
              onMouseOut={(e) => (e.target.style.color = '')}
            >
              {blog.title}
            </h2>

            {/* Short Description */}
            <p className="text-secondary">{blog.description}</p>

            {/* Blog Image */}
            <Card.Img
              src={blog.mainImage}
              alt="Main"
              className="w-100 my-3"
              style={{ height: '500px', objectFit: 'cover' }}
            />

            {/* Full Description */}
            <p className="text-secondary">{blog.desc}</p>
          </Card>

          {/* Extra Components */}
          <SingleBlogSecondComponents />
          <SingleBlogLinkComponents />
          <RecentPosts />
          <CommentsSection />
          <LeaveReplyForm />
        </Col>

        {/* Sidebar */}
        <Col lg={3} md={12} className="d-none d-lg-block">
          <BlogSidebar categories={categories} />
        </Col>
      </Row>
    </Container>
  );
}

export default SingleBlog;

import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaReply } from 'react-icons/fa';
import userImg from '../assets/user.jpg'; // ✅ Your actual image path

const comments = [
  {
    name: 'Joe Doe',
    date: 'March 18, 2024',
    description: 'This is exactly what I was looking for, thank you so much for these tutorials',
    userImage: userImg,
  },
  {
    name: 'Mike',
    date: 'June 10, 2025',
    description: 'It would be great to try this theme for my businesses',
    userImage: userImg,
  },
  {
    name: 'Elicia',
    date: 'June 10, 2025',
    description: 'What a nice article. It keeps me reading more and more!',
    userImage: userImg,
  },
];

function CommentsSection() {
  return (
    <div className="p-3">
      <h5 className="mb-4 fw-bold fs-4 border-bottom pb-2 text-uppercase" style={{ letterSpacing: '1px' }}>
        Comments
      </h5>

      <style>
        {`

          .reply-btn-custom {
            background-color: #dc3545;
            color: white;
            border: none;
            transition: background-color 0.3s;
            padding: 5px 12px;
            font-size: 14px;
          }

          .reply-btn-custom:hover {
            background-color: black;
          }
        `}
      </style>

      {comments.map((comment, index) => (
        <div key={index} className="mb-4">
          <Row className="align-items-start g-3">
            {/* User Image: hidden on screen width ≤ 1023px */}
            <Col xs={12} sm={2} md="auto" className="d-none d-lg-flex justify-content-center justify-content-sm-start">
              <Image
                src={comment.userImage}
                alt={comment.name}
                roundedCircle
                width={60}
                height={60}
                className="border shadow-sm"
              />
            </Col>

            {/* Content */}
            <Col xs={12} sm={10} md>
              <div
                className="p-5 p-sm-4 shadow-sm mb-3 w-100 d-flex flex-column"
                style={{ backgroundColor: '#FAF2E7' }}
              >
                {/* Name & Date */}
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2">
                  <div>
                    <h6 className="fw-bold mb-1">{comment.name}</h6>
                    <small className="text-secondary">{comment.date}</small>
                  </div>

                  {/* Reply Button: Moves to bottom on small screen */}
                  <div className="mt-2 btn-sm px-3 py-1 d-flex align-items-center gap-1">
                    <Button className="reply-btn-custom rounded-5">
                      <FaReply /> Reply
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-0 text-muted mt-3" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  {comment.description}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default CommentsSection;

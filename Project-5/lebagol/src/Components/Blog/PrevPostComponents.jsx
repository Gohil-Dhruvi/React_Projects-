import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import blogImage1 from '../../assets/Vanilla.jpg';

function RecentPosts() {
  const recentPosts = [
    {
      mainImage: blogImage1,
      title: 'French Vanilla Ice Cream For Any Occasion',
    },
  ];

  return (
    <div className="p-3">
      <h5 className="mb-3 fw-bold fs-4 pb-2">Recent Posts</h5>

      {recentPosts.map((post, index) => (
        <div
          key={index}
          className="d-flex align-items-start py-3 border-top border-bottom"
        >
          {/* Post Image */}
          <img 
            src={post.mainImage}
            alt={post.title}
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              marginRight: '15px',
            }}
          />

          {/* Text Content */}
          <div className="d-flex flex-column">
            {/* Arrow + Label */}
            <div className="d-flex align-items-center text-muted mb-1 ">
              <FaArrowLeft className="me-2" />
              <span className='uppercase'>Previous Post</span>
            </div>

            {/* Title */}
            <h6
              className="mb-1"
              style={{
                fontSize: '16px',
                lineHeight: '1.4',
                cursor: 'pointer',
                transition: 'color 0.3s',
                width: '199px', 
                height: '52px' 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'red')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              {post.title}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentPosts;

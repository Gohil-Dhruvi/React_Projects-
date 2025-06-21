import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SingleBlogLinkComponents() {
  const tags = [
    '#Favorite',
    '#Gluten Free',
    '#Ice Cream',
    '#Novelties',
    '#Pints',
    '#Recipes',
    '#Sandwiches',
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="d-flex flex-wrap gap-2 mb-3">
      {tags.map((item, index) => (
        <span
          key={index}
          className={`px-3 py-1 rounded-pill text-decoration-none fw-medium ${
            hoveredIndex === index ? 'text-danger' : 'text-secondary'
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ cursor: 'pointer', fontSize: '16px' }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default SingleBlogLinkComponents;

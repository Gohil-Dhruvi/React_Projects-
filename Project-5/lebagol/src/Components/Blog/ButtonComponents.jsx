import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

function ButtonComp({ category = 'Category', showCategory = true }) {
  const [readHover, setReadHover] = useState(false);

  return (
    <>
      {/* Category Button (top-left of card image) */}
      {showCategory && (
        <Button
          variant="light"
          className="position-absolute top-0 start-0 m-4 px-3 p-0 border text-danger bg-white fs-6 fw-semibold rounded-4 text-uppercase"
          style={{ transition: 'all 0.3s ease' }}   
          onMouseOver={(e) => {
            e.target.classList.remove('text-danger', 'bg-white');
            e.target.classList.add('text-white', 'bg-danger');
          }}
          onMouseOut={(e) => {
            e.target.classList.remove('text-white', 'bg-danger');
            e.target.classList.add('text-danger', 'bg-white');
          }}
        >
          {category}
        </Button>
      )}

      {/* Read More Button (bottom of card) */}
      <Button
        variant="link"
        className="fw-semibold text-decoration-none p-0 border-0 bg-transparent mt-2"
        style={{
          color: readHover ? '#000000' : 'red',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '1rem',
        }}
        onMouseEnter={() => setReadHover(true)}
        onMouseLeave={() => setReadHover(false)}
      >
        <FaArrowRight />
        Read More
      </Button>
    </>
  );
}

export default ButtonComp;

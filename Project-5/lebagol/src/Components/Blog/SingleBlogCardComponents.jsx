import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import Khulfi from '../../assets/sb_banner.jpg';
import PopularTags from './PopularTagsComponents';

function BannerCard() {
  return (
    <div className="mt-4">
      {/* Banner Image with Overlay */}
      <div
        className="position-relative mb-4 w-100 shadow rounded-3 overflow-hidden"
        style={{ height: '460px' }}
      >
        {/* Background Image */}
        <Image
          src={Khulfi}
          alt="Gelato Offers"
          fluid
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />

        {/* Overlay Content */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center px-3"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <h4
            className="fw-bold mb-2"
            style={{
              fontFamily: '"Tirelessly love you", sans-serif',
              fontSize: '36px',
            }}
          >
            Gelato Offers
          </h4>
          <p
            className="mb-4"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '28px',
            }}
          >
            Find it here
          </p>

          <Button
            variant="light"
            className="d-inline-flex align-items-center justify-content-center px-4 py-2 border bg-white text-dark fs-6 fw-semibold rounded-4 gap-2 shop-btn"
          >
            <span className="arrow-icon transition order-0">
              <FaArrowRight />
            </span>
            <span className="order-1">Shop Now</span>
          </Button>
        </div>
      </div>

      {/* Popular Tags Below Banner */}
      <PopularTags />

      {/* Scoped Hover CSS */}
      <style>{`
        .transition {
          transition: all 0.3s ease;
        }
        .shop-btn:hover .arrow-icon {
          order: 2;
          transform: translateX(6px);
        }
      `}</style>
    </div>
  );
}

export default BannerCard;

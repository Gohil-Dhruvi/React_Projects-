import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import fruitStr from '../assets/fruit-strw.jpg';
import vanilla from '../assets/Vanilla.jpg';
import strawberry from '../assets/strawberry.jpg';
import VanilaStr from '../assets/vanilla-strawberry.jpg';
import FruitStr from '../assets/fruit-strawberry.jpg';
import BannerCard from './SingleBlogCardComponents';

function BlogSidebar({ categories }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isFocused, setIsFocused] = useState(false);

    const recentPosts = [
        {
            title: 'The Best Ways to Cool Off This Summer',
            date: 'March 8, 2024',
            mainImage: fruitStr,
        },
        {
            title: 'French Vanilla Ice Cream For Any Occasion',
            date: 'March 8, 2024',
            mainImage: vanilla,
        },
        {
            title: 'Fancy Figs? Make this Ice Cream',
            date: 'March 8, 2024',
            mainImage: strawberry,
        },
        {
            title: 'Cabernet Chocolate Chunk Ice Cream',
            date: 'March 8, 2024',
            mainImage: VanilaStr,
        },
        {
            title: '5 Dreamy Ice Cream Hacks for Summer',
            date: 'March 8, 2024',
            mainImage: FruitStr,
        },
    ];

    return (
        <div className="mt-5 px-2" style={{ fontFamily: 'DM Sans' }}>
            {/* Search Section */}
            <h5 className="fw-bold mb-3 fs-4">Search</h5>
            <div className="mb-4">
                <InputGroup
                    style={{
                        border: `1px solid ${isFocused ? 'red' : '#ced4da'}`,
                        borderRadius: '15px',
                        overflow: 'hidden',
                    }}
                >
                    <Form.Control
                        type="text"
                        placeholder="Search blog..."
                        className="shadow-none border-0"
                        style={{ borderRadius: '0', boxShadow: 'none' }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <InputGroup.Text
                        className="bg-white border-0"
                        style={{
                            borderRadius: '0',
                            paddingRight: '16px',
                            paddingLeft: '10px',
                        }}
                    >
                        <FaSearch />
                    </InputGroup.Text>
                </InputGroup>
            </div>

            {/* Blog Categories */}
            <h5 className="mb-3 fw-bold fs-4">Blog Categories</h5>
            <ul className="list-unstyled">
                {categories.map((cat, idx) => (
                    <li
                        key={idx}
                        className="mb-3"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <span
                                className={`fw-bold ${hoveredIndex === idx ? 'text-danger' : 'text-secondary'}`}
                                style={{ cursor: 'pointer', fontSize: '15px' }}
                            >
                                {cat}
                            </span>
                            <span
                                className={`fw-bold ${hoveredIndex === idx ? 'text-danger' : 'text-muted'}`}
                                style={{ fontSize: '14px' }}
                            >
                                (3)
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Recent Posts */}
            <h5 className="mb-3 fw-bold fs-4">Recent Posts</h5>
            {recentPosts.map((post, index) => (
                <div className="d-flex mb-3" key={index}>
                    <img
                        src={post.mainImage}
                        alt={post.title}
                        className="flex-shrink-0"
                        style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            marginRight: '15px',
                        }}
                    />
                    <div style={{ flex: '1' }}>
                        <h6
                            className="fw-bold mb-1 mt-1"
                            style={{ fontSize: '15px', lineHeight: '1.4', cursor: 'pointer' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'red')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                        >
                            {post.title}
                        </h6>
                        <small className="text-muted fw-bold">{post.date}</small>
                    </div>
                </div>
            ))}

            {/* Banner Card at bottom */}
            <BannerCard />
        </div>
    );
}

export default BlogSidebar;

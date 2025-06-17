import React from 'react';
import { Badge } from 'react-bootstrap';

function PopularTags() {
    const tags = [
        'Favorite', 'Gluten Free', 'Ice Cream', 'Novelties',
        'Pints', 'Popsicles', 'Recipes', 'Sandwiches',
    ];

    // Hover handlers
    const handleMouseOver = (e) => {
        e.style.backgroundColor = '#000000';
        e.style.color = '#ffffff';
        e.style.borderColor = '#000000';
    };

    const handleMouseOut = (e) => {
        e.style.backgroundColor = '#ffffff';
        e.style.color = '#000000';
        e.style.borderColor = '#000000';
    };

    return (
        <div className="m-3 p-3">
            <h5 className="fw-bold mb-3">Popular Tags</h5>

            <div className="d-flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <Badge
                        key={idx}
                        bg="light"
                        text="dark"
                        className="px-3 py-2 fw-medium border rounded-pill"
                        style={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            borderColor: '#000000',
                        }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        {tag}
                    </Badge>

                ))}
            </div>
        </div>
    );
}

export default PopularTags;

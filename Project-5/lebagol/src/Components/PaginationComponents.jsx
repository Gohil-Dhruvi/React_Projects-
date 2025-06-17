import React from 'react';
import { Container, Row, Pagination } from 'react-bootstrap';

function BlogPagination() {
    const circleStyle = {
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500',
        fontSize: '14px',
        borderRadius: '50%',
        margin: '0 5px',
        cursor: 'pointer',
    };

    return (
        <Container fluid className="my-5">
            <Row className="g-4">
                {/* Blog cards can go here */}
            </Row>

            <div>
                <Pagination variant="secondary">
                    <Pagination.Item
                        active
                        style={circleStyle}
                        className="border-0"
                    >
                        1
                    </Pagination.Item>
                    <Pagination.Item
                        style={circleStyle}
                        className="border-0"
                    >
                        2
                    </Pagination.Item>
                    <Pagination.Next
                        style={circleStyle}
                        className="border-0"
                    />
                </Pagination>
            </div>
        </Container>
    );
}

export default BlogPagination;

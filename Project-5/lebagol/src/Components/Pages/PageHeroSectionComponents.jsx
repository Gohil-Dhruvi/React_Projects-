import React from 'react';
import { Container, Image } from 'react-bootstrap';
import PageBackground from '../../assets/blog_bc.jpg';


function PageHeroSection() {
    return (
        <div>
            <Container fluid className="p-0 position-relative">

                {/* Image background */}
                <div className="w-100 overflow-hidden position-relative" style={{ height: '290px' }}>
                    <Image
                        src={PageBackground}
                        alt="Hero Banner"
                        fluid
                        className="w-100 h-100 object-fit-cover"
                    />

                    {/* Dark overlay */}
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}
                    ></div>
                </div>

                {/* Centered Text */}
                <div
                    className="position-absolute top-50 start-50 translate-middle text-center"
                    style={{ zIndex: 2 }}
                >
                    <h1 className="text-white fw-bold mb-2">Our Menu 2</h1>
                    <p className="text-white fs-6">
                        <span
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.color = 'red';
                                e.target.style.textDecoration = 'underline';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.color = 'white';
                                e.target.style.textDecoration = 'none';
                            }}
                        >
                            Home Page
                        </span> / Pages
                    </p>
                </div>

            </Container>
        </div>
    );
}

export default PageHeroSection;
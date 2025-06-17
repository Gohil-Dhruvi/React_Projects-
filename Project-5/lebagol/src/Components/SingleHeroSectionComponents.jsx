import React from 'react';
import { Container, Image } from 'react-bootstrap';
import blogBackground from '../assets/shop_bc.jpg';

function SingleHeroSection() {
    return (
        <div>
            <Container fluid className="p-0 position-relative">

                {/* Image background */}
                <div className="w-100 overflow-hidden position-relative" style={{ height: '66px' }}>
                    <Image
                        src={blogBackground}
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
                        </span> / 
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
                        > Ingredients
                        </span>
                          / The Best way to cool Off This Summer
                    </p>
                </div>

            </Container>
        </div>
    );
}

export default SingleHeroSection;
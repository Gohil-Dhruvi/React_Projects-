import React from 'react';
import { Container } from 'react-bootstrap';
import ErrorImg from '../../assets/404-img.png';
import ErrorBackground from '../../assets/blog_bc.jpg'; 

function ErrorSection() {
    return (
        <div>
            <Container
                fluid
                style={{
                    position: 'relative',
                    paddingLeft: 0,
                    paddingRight: 0,
                    maxWidth: '100%',
                }}
            >
                {/* Hero Section with Background Image */}
                <div
                    style={{
                        width: '100%',
                        height: '290px',
                        backgroundImage: `url(${ErrorBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: '100px',
                            paddingBottom: '100px',
                        }}
                    >
                        <h1
                            className="text-white fw-bold mb-2"
                            style={{
                                fontFamily: 'Kalnia, "HelveticaNeue-Light"',
                            }}
                        >
                            Error 404
                        </h1>
                        <p className="text-white fs-6">
                            <span
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    transition: 'color 0.3s ease, text-decoration 0.3s ease',
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
                            </span>{' '}
                            / Error 404
                        </p>
                    </div>
                </div>

                {/* Error Image */}
                <div
                    style={{
                        width: '100%',
                        display: 'block',
                        margin: '0 auto',
                    }}
                >
                    <img
                        src={ErrorImg}
                        alt="Error 404"
                        className="img-fluid"
                        style={{
                            display: 'block',
                            marginTop: '80px',
                            marginBottom: '20px',
                            width: '100%',
                            maxWidth: '540px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    />
                </div>

                {/* Sub Title */}
                <h2
                    className="text-center"
                    style={{
                        fontSize: '48px',
                        fontFamily: 'Kalnia, sans-serif',
                        lineHeight: 1.21,
                        fontWeight: 600,
                        marginBottom: '30px',
                    }}
                >
                    Oops! That page can’t be found.
                </h2>

                {/* Error Message */}
                <div>
                    <p
                        className="text-center"
                        style={{
                            marginTop: '20px',
                            fontSize: '16px',
                            fontFamily: 'DM, sans-serif',
                        }}
                    >
                        The Page you are looking for doesn't exist or another error occurred.
                        Go to Home Page
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default ErrorSection;

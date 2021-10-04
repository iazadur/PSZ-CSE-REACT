import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <Container className="text-center bg-light shadow-lg mb-5" style={{ marginTop: "200px", height:"60vh" }}>
            <h1 className="fontSize1 text-danger fw-bolder ">404</h1>
            <h5 className="fs-5 text-muted">OPPS. THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND</h5>
            <Link className="text-decoration-none " to="/">Return to Homepage</Link>
        </Container>
    );
};

export default NotFound;
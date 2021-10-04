import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container style={{ marginTop: "200px" }}>
            <h1 className="fontsize text-danger fw-bolder text-center my-5">404 not Found</h1>
        </Container>
    );
};

export default NotFound;
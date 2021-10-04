import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Container>

                <Row>
                    <Col sm>
                        <Stack direction="horizontal" gap={3}>
                        <FontAwesomeIcon icon={faCoffee} />
                        </Stack>
                    </Col>
                    <Col sm>
                        <Stack gap={3}>
                            <NavLink activeClassName="selected" className="text-dark text-decoration-none ms-5" to="/">Home</NavLink>
                            <NavLink className="text-dark ms-5 text-decoration-none" to="/about">About</NavLink>
                            <NavLink className="text-dark ms-5 text-decoration-none" to="/service">Services</NavLink>
                            <NavLink className="text-dark ms-5 text-decoration-none" to="/faq">FAQ</NavLink>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import React from 'react';
import { Col, Container, Nav, Row, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Container>

                <Row className="mb-3">
                    <Col sm>
                        <Stack direction="horizontal" gap={3}>
                            <Nav
                                className="my-2 my-lg-0  text-dark"
                                style={{ maxHeight: '200px' }}
                                navbarScroll>
                                <NavLink
                                    className="text-dark text-decoration-none mx-3 hover"
                                    to="/">Home</NavLink>
                                <div className="vr" />

                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }} className="text-dark mx-3 hover text-decoration-none" to="/course">Courses</NavLink>
                                <div className="vr" />

                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }} className="text-dark mx-3 hover text-decoration-none" to="/service">Services</NavLink>
                                <div className="vr" />

                                <NavLink
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}
                                    className="text-dark mx-3 text-decoration-none hover" to="/about">About</NavLink>
                                <div className="vr" />

                                <NavLink
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}
                                    className="text-dark hover ms-3 text-decoration-none" to="/faq">FAQ</NavLink>
                            </Nav>
                        </Stack>
                    </Col>
                    <Col sm>
                        <Stack gap={3} className="text-end">
                         <p><FontAwesomeIcon className="fs-6" icon={faPhoneAlt} /> +8801719737799</p>
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <p className="text-center py-3 bg-light" >&copy; copyright <a href="https://www.facebook.com/pszCSE/" className="text-decoration-none text-dark" target="_blank" rel="noopener noreferrer">PSZ</a></p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
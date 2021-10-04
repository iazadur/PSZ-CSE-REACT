import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import "./Header.css"


const Header = () => {
    return (
        <Navbar bg="white" className="py-3 shadow-lg" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className="text-dark ms-5 text-decoration-none" to="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <b>PSZ</b>-CSE
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0  text-dark"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
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

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
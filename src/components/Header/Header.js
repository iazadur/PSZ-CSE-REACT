import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import "./Header.css"


const Header = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <b>PSZ</b>-CSE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0  text-dark"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink activeClassName="selected" className="text-dark text-decoration-none ms-5" to="/">Home</NavLink>
                        <NavLink className="text-dark ms-5 text-decoration-none" to="/about">About</NavLink>
                        <NavLink className="text-dark ms-5 text-decoration-none" to="/service">Services</NavLink>
                        <NavLink className="text-dark ms-5 text-decoration-none" to="/faq">FAQ</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
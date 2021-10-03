import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink href="#action1">Home</NavLink>
                    <NavLink href="#action2">About</NavLink>
                    <NavLink href="#action2">Services</NavLink>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
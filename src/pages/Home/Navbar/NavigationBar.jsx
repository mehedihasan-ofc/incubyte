import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='text-primary fw-bold' href="#home">Incubyte</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='text-primary' href="#about">About Us</Nav.Link>
                        <Nav.Link className='text-primary' href="#expertise">Our Expertise</Nav.Link>
                        <Nav.Link className='text-primary' href="#stories">Success Stories</Nav.Link>
                        <Nav.Link className='text-primary' href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
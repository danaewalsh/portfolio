import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  Navbar, Nav,
} from 'react-bootstrap';

const NavigationBar = () => (
  <>
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{ marginBottom: '-24px' }}>
        <Navbar.Brand href="#home">Dana Walsh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link target="_blank" href="https://drive.google.com/file/d/1LNUt5R5A7lWYyDZy6csBfWb6cbTSoelG/view?usp=sharing">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />

    </Router>
  </>
);

export default NavigationBar;

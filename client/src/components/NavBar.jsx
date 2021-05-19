import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import {
  Navbar, Nav, Button,
} from 'react-bootstrap';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import ContactMe from './ContactMe.jsx';

const NavigationBar = () => (
  <>
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{ marginBottom: '-24px' }}>
        <Navbar.Brand href="#home">Dana Walsh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />

    </Router>
  </>
);

export default NavigationBar;

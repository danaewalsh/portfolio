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
import About from './AboutMe.jsx';
import Projects from './Projects.jsx';
import ContactMe from './ContactMe.jsx';

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Dana Walsh</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                  {/* <Home /> */}
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/contact-me">
                  <ContactMe />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;

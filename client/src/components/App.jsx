/* eslint-disable import/extensions */
import React from 'react';
import NavigationBar from './NavBar.jsx';
import Intro from './Intro.jsx';
import AboutMe from './AboutMe.jsx';
import TechStack from './TechStack.jsx';
import ProjectsList from './Projects.jsx';
import ContactMe from './ContactMe.jsx';

const App = () => (
  <div id="home">
    <NavigationBar />
    <Intro />
    <AboutMe />
    <TechStack />
    <ProjectsList />
    <ContactMe />
  </div>
);

export default App;

import React, { Component } from 'react';
import NavigationBar from './NavBar.jsx';
import Intro from './Intro.jsx';
import AboutMe from './AboutMe.jsx';
import TechStack from './TechStack.jsx';

const App = (props) => (
  <>
    <NavigationBar />
    <Intro />
    <AboutMe />
    <TechStack />
  </>
);

export default App;

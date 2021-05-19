import React, { Component } from 'react';
import NavigationBar from './NavBar.jsx';
import Intro from './Intro.jsx';
import AboutMe from './AboutMe.jsx';
import TechStack from './TechStack.jsx';

const App = (props) => (
  <div id="home">
    <NavigationBar />
    <Intro />
    <AboutMe />
    <TechStack />
  </div>
);

export default App;

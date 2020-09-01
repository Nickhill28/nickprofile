/* eslint-disable no-undef */
import React, { Component } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Servicess from  './components/Servicess/Servicess';
import Owlcarouse from './components/owlcarouse'
import Contact from './components/Contact/Contact';
import Stats from './components/Stats/Stats';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Intro/>
          <About />
          <Resume />
          <Portfolio />
          <Servicess />
          <Owlcarouse />
          <Stats/>
          <Contact />
          <Footer />
      </div>
    );
  }
}
export default App;

import React from 'react';
import './App.scss';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <a href="#" className="btn scrollToTop purple-gradient"></a>
    </div>
  );
}

export default App;

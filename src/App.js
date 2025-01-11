import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Certifications from './components/Certifications.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';



window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  document.body.style.backgroundPositionY = -(scrolled * 1.2) + 'px';
});


function App() {
  return (
    <div id = 'app' className="app">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

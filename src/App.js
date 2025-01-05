import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Certifications from './components/Certifications.js';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Certifications />
    </div>
  );
}

export default App;

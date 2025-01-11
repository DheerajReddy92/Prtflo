import React, { useEffect } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <header style={{
      WebkitFontSmoothing: 'antialiased',

      fontFamily: 'Pixelletters',
      fontSize: '170%',
      padding: '30px 25px',
      position: 'sticky',
      top: 0,

      zIndex: 1000,

    }}>
      <div className="container header__container" id='top1'>
        <div className="header__logo">
          <img 
            className="header__img" 
            src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Portfolio.hu_full_logo.png" 
            alt="Portfolio Logo" 
          />
        </div>
        <div className="header__menu">
          <nav id="navbar" className="header__nav">
            <ul className="header__elenco">
              <li className="header__el" data-aos="fade-left" data-aos-delay="200">
                <a href="https://github.com/DheerajReddy92/Prtflo" className="header__link">Source</a>
              </li>
              <li className="header__el" data-aos="fade-left" data-aos-delay="400">
                <a href="#skills" className="header__link">Skills</a>
              </li>
              <li className="header__el" data-aos="fade-left" data-aos-delay="600">
                <a href="#certifications" className="header__link">Certifications</a>
              </li>
              <li className="header__el" data-aos="fade-left" data-aos-delay="800">
                <a href="#contact" className="header__link">Contact</a>
              </li>
              <li className="header__el header__el--blue" data-aos="fade-left" data-aos-delay="1000">
                <a 
                  href="https://www.linkedin.com/in/dheeraj-reddy-paturu92/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--white"
                >
                  LinkedIn →
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

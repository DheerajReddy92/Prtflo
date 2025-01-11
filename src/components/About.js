import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div className="sect sect--padding-top" style={{
      WebkitFontSmoothing: 'antialiased',
      color: '#1f4568',
      fontFamily: 'Pixelletters',
      fontSize: '170%',
      textAlign: 'center',
      padding: '20px 0',
      position: 'relative'
    }}>
      <div className="container">
        <div className="row">
          <div data-aos="fade-up" className="col-md-12">
            <div id="top" className="site" style={{ marginTop: '20%' }}>
              <h1 data-aos="fade-left">
                <span className="header__light">PATURU </span>
                <span className="header__light1">DHEERAJ REDDY</span>
              </h1>
              
              <h2 data-aos="zoom-in" className="site__subtitle">
                Full-Stack Application Developer..
              </h2>
              
              <div data-aos="zoom-in" className="site__box-link">
                <a 
                  data-aos="fade-left" 
                  className="btn btn--width" 
                  href="#exp" 
                  style={{ textDecoration: 'none' }}
                >
                  Experience
                </a>
                <a 
                  data-aos="fade-right" 
                  className="btn btn--revert btn--width" 
                  href="#Projects" 
                  style={{ textDecoration: 'none' }}
                >
                  Projects
                </a>
              </div>
              
              <div data-aos="fade-up" className="image-container">
                <img 
                  className="site__img" 
                  src={process.env.PUBLIC_URL + '/Images/dev-removebg.png'}
                  alt="business graphic" 
                />
                <div className = 'stars'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

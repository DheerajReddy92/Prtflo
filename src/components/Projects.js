import React from 'react';
import '../App.css';

const Projects = () => {
    return (
    <div className="sect sect--white projects" id = 'Projects'>
      <div className="container">
        <div className="col-md-12 text-center">
          <h1 className="header__title">
            <span data-aos="fade-left" className="header__light2">
            Projects..
            </span>
          </h1>
          <h2 data-aos="fade-zoom" className="site__subtitle">
          .......Refining skills and {" "}
            <span className="row__sub--light">(expanding)</span> my professional
            knowledge.
          </h2>
        </div>
        <div className="projects-grid"> {/* Changed to grid container */}
          <div href="https://dheerajreddy92.github.io/Prtflo/"
                    target="_blank" data-aos="fade-up" data-aos-duration="1500" className="card card-color-0">
            <div data-aos="zoom-out" style={{opacity:'0.2'}} className="border"></div>
            <img  data-aos-duration="1500" className='projectimg' src={process.env.PUBLIC_URL + '/Images/portfolio.png'} alt="project" />
            <h1 data-aos="fade-right" data-aos-duration="1500" className='projname'>Portfolio</h1>
          </div>
          
          <a href="https://dheerajreddy92.github.io/DriveAssistApp/"
                    target="_blank" data-aos="fade" data-aos-duration="1500" className="card card-color-1">
            <div data-aos="zoom-out" style={{opacity:'0.7'}} className="border"></div>
            <img  style={{opacity:'0.7'}} data-aos-duration="1500" className='projectimg' src={process.env.PUBLIC_URL + '/Images/driveassist.gif'} alt="project" />
            <h1 data-aos="fade-right" data-aos-duration="1500" className='projname'>Drive Assist</h1>
          </a>
     
          <a href="https://dheerajreddy92.github.io/Music_App/"
                    target="_blank" data-aos="fade" data-aos-duration="1500" className="card card-color-2">
            <div style={{opacity:'0.7'}} className="border"></div>
            <img style={{opacity:'0.7'}} data-aos-duration="1500" className='projectimg' src={process.env.PUBLIC_URL + '/Images/musicapp.png'} alt="project" />
            <h1 data-aos="fade-right" data-aos-duration="1500" className='projname'>Music App</h1>
          </a>
          
          <a href="https://www.coursera.org/specializations/react"
                    target="_blank" data-aos="fade-left" data-aos-duration="1500" className="card card-color-3">
            <div style={{opacity:'0.7'}} className="border"></div>
            <img style={{opacity:'0.7'}}  data-aos-duration="1500" className='projectimg' src='https://cdn.dribbble.com/users/997070/screenshots/4120967/attachments/943230/01-1._Cover_Copy_2x.png' alt="project" />
            <h1 data-aos="fade-right" data-aos-duration="1500" className='projname'>Language Translation</h1>
          </a>
        </div>
      </div>
    </div>
    );
};

export default Projects;

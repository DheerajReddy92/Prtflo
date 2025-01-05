import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div data-aos="fade-right" id="skills" className="sect sect--white">
      <div className="col-md-12 text-center">
        <h1 className="header__title">
          <span data-aos="fade-left" className="header__light ">SKILLS</span>
        </h1>
        <h2 data-aos="fade-zoom" className="site__subtitle">
          Skills I Have Mastered So Far..!
        </h2>
      </div>
      <div className="skills">



        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">SQL<span className="lighter">S</span></h1>
          </a>     
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Next.js<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">ReactQiery<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Redux<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">React query<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Node.js<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Express.js<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Nest.js<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Rest API<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">MongoDB<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">PostgreSQL<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Redis<span className="lighter">S</span></h1>
          </a>
        </div>
        

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Elasticsearch<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">AWS<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Kubernetes<span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">CI/CD <span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Jest <span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Cypress <span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Mocha <span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Jira <span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Confluence <span className="lighter">S</span></h1>
          </a>
        </div>

        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">Postman <span className="lighter">S</span></h1>
          </a>
        </div>



        
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" className="partner__link">
            <img className="header__img html" src={ process.env.PUBLIC_URL +"/images/html.png"} alt="html" />
          </a>
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" className="partner__link">
            <img className="header__img css" src={ process.env.PUBLIC_URL +"/images/css.png"} alt="css" />
          </a>       
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://simple.wikipedia.org/wiki/JavaScript" target="_blank" className="partner__link">
            <h1 className="partner_img js">J<span className="lighter">S</span></h1>
          </a>
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
            <h1 className="partner_img ts">T<span className="lighter">S</span></h1>
          </a>
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://angular.dev/" target="_blank" className="partner__link">
            <img className="header__img angular" src={ process.env.PUBLIC_URL +"/images/angular.png"} alt="Angular Logo" />
          </a>                         
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://en.wikipedia.org/wiki/GitHub" target="_blank" className="partner__link">
            <img className="header__img git" src={ process.env.PUBLIC_URL +"/images/git.png"} alt="Git Logo" />
          </a>
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://www.python.org/" target="_blank" className="partner__link">
            <img className="header__img python" src={ process.env.PUBLIC_URL +"/images/python.png"} alt="python" />
          </a>
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://en.wikipedia.org/wiki/Algorithm" target="_blank" className="partner__link">
            <img className="header__img algorithms" src={ process.env.PUBLIC_URL +"/images/algorithms.png"} alt="algorithms" />
          </a>
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://pandas.pydata.org/" target="_blank" className="partner__link">
            <img className="header__img pandas" src={ process.env.PUBLIC_URL +"/images/pandas.png"} alt="pandas" />
          </a>
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner-last">
          <a href="https://numpy.org/" target="_blank" className="partner__link">
            <img className="header__img numpy" src={ process.env.PUBLIC_URL +"/images/numpy.png"} alt="numpy" />
          </a>
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://react.dev/" target="_blank" className="partner__link react">
            <img className="header__img" src={ process.env.PUBLIC_URL +"/Images/react.svg"} alt="React" />
          </a>
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" className="partner__link">
            <img className="header__img machinelearning" src={ process.env.PUBLIC_URL +"/images/ml.png"} alt="machinelearning" />
          </a>
        </div>
        <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner">
          <a href="https://en.wikipedia.org/wiki/Deep_learning" target="_blank" className="partner__link">
            <img className="header__img deeplearning" src={ process.env.PUBLIC_URL +"/images/dl.png"} alt="deeplearning" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;

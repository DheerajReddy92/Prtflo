import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';


const Experience = () => {
  return (
    <div id="exp" className="sect sect--white">
      <div className="container">

        <div className="col-md-12 text-center">
        <h1 className="header__title">
          <span data-aos="fade-left" className="header__light2 ">Professional Experience..</span>
        </h1>
        <h2 data-aos="fade-zoom" className="site__subtitle">
        Experience that reflects my leadership and technical proficiency....!
        </h2>
      </div>

        <div className="row row--center row--margin">


          {/* Full-Stack developer and social media Support */}
          <div data-aos="fade-right" className="col-md-6 col-sm-12 price-box price-box--blue">
            <a href="https://www.kaartech.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
              <div className="price-box__wrap">
                <div className="price-box__img"></div>
                <h1 className="price-box__title">Experience -- 3</h1>
                <p className="price-box__people">Full-Stack developer</p>
                <ul className="price-box__list">
                  <h2 className="price-box__discount">
                    <span className="price-box__discount--light">/University at Buffalo</span>
                  </h2>
                  <h3 className="price-box__price"> Sept 2023 - Present</h3>
                  <p className="price-box__feat">Responsibilities-</p>
                  <li className="price-box__list-el">Maintained and enhanced professor’s website with React/Node.js, improving UX and performance.</li>
                  <li className="price-box__list-el"> Optimized frontend components for better accessibility and responsiveness across various devices.</li>
                  <li className="price-box__list-el">Optimized frontend components for better accessibility and responsiveness across various devices.</li>
                  <li className="price-box__list-el">Built Driver App, Media Player, Portfolio under C.Wang, applying academic focus to real solutions.</li>
                </ul>
              </div>
            </a>
          </div>



          {/* Full Stack Angular Position */}
            <div data-aos="fade-right" className="col-md-6 col-sm-12 price-box price-box--purple">
            <a href="https://www.kaartech.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
              <div className="price-box__wrap">
                <div className="price-box__img"></div>
                <h1 className="price-box__title">Experience -- 2</h1>
                <p className="price-box__people">Full-Stack Developer</p>
                <ul className="price-box__list">
                  <h2 className="price-box__discount">
                    <span className="price-box__discount--light">/Kaar Technologies</span>
                  </h2>
                  <h3 className="price-box__price">Jul 2022 to June 2023</h3>
                  <p className="price-box__feat">Responsibilities-</p>
                  <li className="price-box__list-el">Led the development of high-performance web applications, improving overall efficiency by 45% and significantly reducing page load times by 60%.</li>
                  <li className="price-box__list-el"> Established CI/CD pipelines with GitHub Actions and Docker, deploying to AWS EC2, reducing deployment time by 70%.</li>
                  <li className="price-box__list-el">Implemented CI/CD pipelines with GitHub Actions and Docker, reducing deployment time by 70% and achieving
                  zero-downtime deployments.</li>
                  <li className="price-box__list-el"> Implemented AWS EC2 Auto Scaling to adjust instance capacity based on traffic, ensuring consistent performance.</li>
                </ul>
              </div>
            </a>
          </div>

          {/* SAP Internship */}
          <div data-aos="fade-left" className="col-md-6 col-sm-12 price-box price-box--violet">
            <a href="https://www.kaartech.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
              <div className="price-box__wrap">
                <div className="price-box__img"></div>
                <h1 className="price-box__title">Full-Stack and SAP</h1>
                <p className="price-box__people">Jr. Full-Stack Developer</p>
                <ul className="price-box__list">
                  <h2 className="price-box__discount">
                    <span className="price-box__discount--light">/Kaar Technologies</span>
                  </h2>
                  <h3 className="price-box__price">Jan 2020 - July 2022</h3>
                  <p className="price-box__feat">Responsibilities</p>
                  <li className="price-box__list-el">Developed and maintained large-scale enterprise web applications, resulting in a 40% improvement in overall system performance.</li>
                  <li className="price-box__list-el">Built a real-time data synchronization system capable of handling over 1,000 concurrent user sessions, enhancing live data delivery.</li>
                  <li className="price-box__list-el">Improved backend performance by optimizing database queries and implementing advanced caching techniques, reducing response times by 65%.</li>
                  <li className="price-box__list-el">Designed a reusable library of components and utilities, boosting development speed by 40% across multiple team projects.</li>
                </ul>
              </div>
            </a>
          </div>
 
 
          </div>
          <div className="row row--center row--margin">

          {/* Java Internship */}
          <div data-aos="fade-right" className="col-md-4 col-sm-4 price-box price-box--blue">
            <a href="https://retechsolutions.in/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
              <div className="price-box__wrap">
                <div className="price-box__img"></div>
                <h1 className="price-box__title">Java</h1>
                <p className="price-box__people">Internship</p>
                <ul className="price-box__list">
                  <h2 className="price-box__discount">
                    <span className="price-box__discount--light">/Retech Solutions Pvt.</span>
                  </h2>
                  <h3 className="price-box__price">Nov 2019</h3>
                  <p className="price-box__feat">Responsibilities</p>
                  <li className="price-box__list-el">Strengthened Java fundamentals by completing a series of coding challenges with a 95% success rate.</li>
                  <li className="price-box__list-el">Enhanced coding efficiency and reliability through hands-on experience with Java development tasks.</li>
                  <li className="price-box__list-el">Participated in a collaborative environment, ensuring timely support and meeting project objectives.</li>
                  <li className="price-box__list-el">Tackled multiple tasks with no restrictions, gaining practical exposure to project management.</li>
                </ul>
              </div>
            </a>
          </div>
          </div>

        
      </div>
    </div>
  );
};

export default Experience;

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
          {/* Full Stack Angular Position */}
            <div data-aos="fade-right" className="col-md-6 col-sm-12 price-box price-box--purple">
            <a href="https://www.kaartech.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
              <div className="price-box__wrap">
                <div className="price-box__img"></div>
                <h1 className="price-box__title">Full-Stack </h1>
                <p className="price-box__people">SeniorReact Developer</p>
                <ul className="price-box__list">
                  <h2 className="price-box__discount">
                    <span className="price-box__discount--light">/Kaar Technologies</span>
                  </h2>
                  <h3 className="price-box__price">Jul 2022 to June 2023</h3>
                  <p className="price-box__feat">Responsibilities-</p>
                  <li className="price-box__list-el">Spearheaded development of enterprise-level React applications using Next.js and Redux, resulting in 45% improved
                  performance and 60% faster page load times.</li>
                  <li className="price-box__list-el">Architected microservices infrastructure using Node.js/Express.js, implementing GraphQL APIs and Redis caching,
                  handling 10M+ daily requests with 99.99% uptime.</li>
                  <li className="price-box__list-el">Implemented CI/CD pipelines with GitHub Actions and Docker, reducing deployment time by 70% and achieving
                  zero-downtime deployments.</li>
                  <li className="price-box__list-el"> Led migration from REST to GraphQL, resulting in 40% reduction in API calls and improved data fetching efficiency
                  across 20+ microservices.</li>
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
                <p className="price-box__people">React Developer</p>
                <ul className="price-box__list">
                  <h2 className="price-box__discount">
                    <span className="price-box__discount--light">/Kaar Technologies</span>
                  </h2>
                  <h3 className="price-box__price">Jan 2020 - July 2022</h3>
                  <p className="price-box__feat">Responsibilities</p>
                  <li className="price-box__list-el">Engineered responsive React components using Material-UI and Styled-Components, improving UI performance by
                  35% and achieving 98% accessibility score.</li>
                  <li className="price-box__list-el">Developed real-time data synchronization system using WebSocket and Redux-Saga, processing 1000+ concurrent
                  user sessions.</li>
                  <li className="price-box__list-el">Optimized MongoDB queries and implemented Redis caching strategies, reducing API response times by 65%.</li>
                  <li className="price-box__list-el"> Created reusable React hooks and custom components library, accelerating development velocity by 40% across team
                  projects.</li>
                </ul>
              </div>
            </a>
          </div>

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
                  <h3 className="price-box__price">Nov 2020</h3>
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

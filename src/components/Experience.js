import React from 'react';

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
            <div data-aos="fade-up" className="col-md-6 col-sm-12 price-box price-box--purple">
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
                  <li className="price-box__list-el">Developed a large-scale E-Auction portal for a Saudi government finance project using Angular.</li>
                  <li className="price-box__list-el">Led the development of a comprehensive application with 100+ user-friendly screens.</li>
                  <li className="price-box__list-el">Delivered accurate real-time updates through seamless integration with third-party systems.</li>
                </ul>
              </div>
            </a>
          </div>

          {/* SAP Internship */}
          <div data-aos="fade-up" className="col-md-6 col-sm-12 price-box price-box--violet">
            <a href="https://www.kaartech.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
              <div className="price-box__wrap">
                <div className="price-box__img"></div>
                <h1 className="price-box__title">Full-Stack and SAP</h1>
                <p className="price-box__people">React Developer</p>
                <ul className="price-box__list">
                  <h2 className="price-box__discount">
                    <span className="price-box__discount--light">/Kaar Technologies</span>
                  </h2>
                  <h3 className="price-box__price">Jan 2022 - July 2022</h3>
                  <p className="price-box__feat">Responsibilities</p>
                  <li className="price-box__list-el">Developed and customized SAP-based web applications with a focus on system efficiency.</li>
                  <li className="price-box__list-el">Provided 24/7 technical support for SAP modules during development.</li>
                  <li className="price-box__list-el">Managed multiple tasks simultaneously without any limits, ensuring timely project completion.</li>
                  <li className="price-box__list-el">Collaborated effectively with contractors and team members on large-scale projects.</li>
                </ul>
              </div>
            </a>
          </div>

          {/* Java Internship */}
          <div data-aos="fade-up" className="col-md-4 col-sm-4 price-box price-box--blue">
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

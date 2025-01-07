import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certifications = () => {
  return (
    <div id="certifications" className="sect sect--white">
      <div className="container">
        <div className="col-md-12 text-center">
          <h1 className="header__title">
            <span data-aos="fade-left" className="header__light2">
              Certifications..
            </span>
          </h1>
          <h2 data-aos="fade-zoom" className="site__subtitle">
            Highlighting key certifications that{" "}
            <span className="row__sub--light">(strengthen)</span> my professional
            qualifications.
          </h2>
        </div>

        <div className="row row--margin">
          <div className="col-md-8 col-sm-10 col-xs-12 mx-auto">
            <div id="myCarousel" className="carousel slide">
              <div className="carousel-inner">
                {/* Angular Certification */}
                <div data-aos="fade-up" className="carousel-item active">
                  <a
                    href="https://www.coursera.org/specializations/react"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <div className="item__content text-center">
                      <div className="item__header">
                        <img
                          className="item__img"
                          src={process.env.PUBLIC_URL + '/Images/react.svg'}
                          alt="React"
                        />
                        <span className="item__name">Coursera</span>
                      </div>
                      <p className="item__description">
                        React for Front End Engineers certificate.
                      </p>
                    </div>
                  </a>
                </div>

                {/* Web Development Certification */}
                <div data-aos="fade-up" className="carousel-item">
                  <a
                    href="https://www.coursera.org/learn/html-css-javascript-for-web-developers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <div className="item__content text-center">
                      <div className="item__header">
                        <img
                          className="item__img"
                          src={process.env.PUBLIC_URL + '/Images/webicon.d852017688774c43fefa.png'}
                          alt="Web Development Icon"
                        />
                        <span className="item__name">Coursera</span>
                      </div>
                      <p className="item__description">
                        HTML, CSS, and JavaScript for Web developers.
                      </p>
                    </div>
                  </a>
                </div>



                

                {/* Python Certification */}
                <div data-aos="fade-up" className="carousel-item">
                  <a
                    href="https://www.coursera.org/specializations/python"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <div className="item__content text-center">
                      <div className="item__header">
                        <img
                          className="item__img"
                          src={process.env.PUBLIC_URL + '/Images/pythonicon.png'}
                          alt="Python Icon"
                        />
                        <span className="item__name">Coursera</span>
                      </div>
                      <p className="item__description">
                        Python Online Course certificate authorized by the University Of Michigan.
                      </p>
                    </div>
                  </a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

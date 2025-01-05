import React from 'react';

const Certifications = () => {
  return (
    <div className="sect sect--white">
      <div id="certifications" className="container">
        <div className="row--center text-center">
          <h1 data-aos="fade-zoom" className="row__title exp">
            Certifications..
          </h1>
          <h2 data-aos="fade-zoom" className="row__sub expsub">
            Highlighting key certifications that{" "}
            <span className="row__sub--light">(strengthen)</span> my professional
            qualifications.
          </h2>
        </div>
        <br />
        <br />
        <div className="row row--margin">
          <div className="col-md-8 col-sm-10 col-xs-12 mx-auto">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div data-aos="fade-up" className="carousel-item active">
                  <a
                    href="https://www.coursera.org/learn/frontend-development-using-angular"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="item__content text-center">
                      <img
                        className="item__img"
                        src="/Portfolio/static/media/angicon.18b5ae063c550dd87836.png"
                        alt="Angular Icon"
                      />
                      <span className="item__name">Coursera</span>
                      <p className="item__description">
                        Angular for Front End Engineers certificate.
                      </p>
                    </div>
                  </a>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>

                <div data-aos="fade-up" className="carousel-item">
                  <a
                    href="https://www.coursera.org/learn/html-css-javascript-for-web-developers"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="item__content text-center">
                      <img
                        className="item__img"
                        src="/Portfolio/static/media/webicon.d852017688774c43fefa.png"
                        alt="Google"
                      />
                      <span className="item__name">Coursera</span>
                      <p className="item__description">
                        HTML, CSS, and JavaScript for Web developers.
                      </p>
                    </div>
                  </a>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>

                <div data-aos="fade-up" className="carousel-item">
                  <a
                    href="https://www.coursera.org/specializations/python"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="item__content text-center">
                      <img
                        className="item__img"
                        src="/Portfolio/static/media/pythonicon.d593e6abdc6d7e17aa86.png"
                        alt="Python"
                      />
                      <span className="item__name">Coursera</span>
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

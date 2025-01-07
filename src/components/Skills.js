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




      <div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner html-skill">
    <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" className="partner__link">
        <img className="header__img html" src={ process.env.PUBLIC_URL +"/images/html.png"} alt="html" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner css-skill">
    <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" className="partner__link">
        <img className="header__img css" src={ process.env.PUBLIC_URL +"/images/css.png"} alt="css" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner javascript-skill">
    <a href="https://simple.wikipedia.org/wiki/JavaScript" target="_blank" className="partner__link">
        <img className="header__img js" src={ process.env.PUBLIC_URL +"/images/jsicon.png"} alt="js" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner typescript-skill">
    <a href="https://simple.wikipedia.org/wiki/TypeScript" target="_blank" className="partner__link">
        <img className="header__img ts" src={ process.env.PUBLIC_URL +"/images/tsicon.png"} alt="ts" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner react-skill">
    <a href="https://react.dev/" target="_blank" className="partner__link react">
        <img className="header__img react" src={ process.env.PUBLIC_URL +"/Images/react.svg"} alt="react" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner angular-skill">
    <a href="https://angular.dev/" target="_blank" className="partner__link">
        <img className="header__img angular" src={ process.env.PUBLIC_URL +"/images/angular.png"} alt="angular" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner git-skill">
    <a href="https://en.wikipedia.org/wiki/GitHub" target="_blank" className="partner__link">
        <img className="header__img git" src={ process.env.PUBLIC_URL +"/images/git.png"} alt="git" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner python-skill">
    <a href="https://www.python.org/" target="_blank" className="partner__link">
        <img className="header__img python" src={ process.env.PUBLIC_URL +"/images/python.png"} alt="python" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner nodejs-skill">
    <a href="https://nodejs.org/en" target="_blank" className="partner__link">
        <img className="header__img nodejs" src={ process.env.PUBLIC_URL +"/images/nodejs.png"} alt="nodejs" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner express-skill">
    <a href="https://expressjs.com/" target="_blank" className="partner__link">
        <img className="header__img ex" src={ process.env.PUBLIC_URL +"/images/ex.png"} alt="ex" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner nestjs-skill">
    <a href="https://nestjs.com/" target="_blank" className="partner__link">
        <img className="header__img nestjs" src={ process.env.PUBLIC_URL +"/images/nestjs.webp"} alt="nestjs" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner restapi-skill">
    <a href="https://legacy.reactjs.org/docs/react-api.html" target="_blank" className="partner__link">
        <img className="header__img reactapi" src={ process.env.PUBLIC_URL +"/images/restapi.png"} alt="restapi" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner sql-skill">
    <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" className="partner__link">
        <img className="header__img sql" src={ process.env.PUBLIC_URL +"/images/sql.png"} alt="sql" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner nextjs-skill">
    <a href="https://nextjs.org/" target="_blank" className="partner__link">
        <img className="header__img nextjs" src={ process.env.PUBLIC_URL +"/images/nextjs.png"} alt="nextjs" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner reactquery-skill">
    <a href="https://www.npmjs.com/package/react-query" target="_blank" className="partner__link">
        <img className="header__img reactquery" src={ process.env.PUBLIC_URL +"/images/reactquery.png"} alt="reactquery" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner redux-skill">
    <a href="https://redux.js.org/" target="_blank" className="partner__link">
        <img className="header__img redux" src={ process.env.PUBLIC_URL +"/images/redux.png"} alt="redux" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner mongodb-skill">
    <a href="https://www.mongodb.com/" target="_blank" className="partner__link">
        <img className="header__img mongodb" src={ process.env.PUBLIC_URL +"/images/mongodb.png"} alt="mongodb" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner postgresql-skill">
    <a href="https://www.postgresql.org/" target="_blank" className="partner__link">
        <img className="header__img postgresql" src={ process.env.PUBLIC_URL +"/images/postgresql.png"} alt="postgresql" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner redis-skill">
    <a href="https://redis.io/" target="_blank" className="partner__link">
        <img className="header__img redis" src={ process.env.PUBLIC_URL +"/images/redis.svg"} alt="redis" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner elasticsearch-skill">
    <a href="https://www.elastic.co/elasticsearch" target="_blank" className="partner__link">
        <img className="header__img elasticsearch" src={ process.env.PUBLIC_URL +"/images/elasticsearch.png"} alt="elasticsearch" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner aws-skill">
    <a href="https://aws.amazon.com/about-aws/?nc2=h_header" target="_blank" className="partner__link">
        <img className="header__img aws" src={ process.env.PUBLIC_URL +"/images/aws.png"} alt="aws" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner kubernetes-skill">
    <a href="https://kubernetes.io/" target="_blank" className="partner__link">
        <img className="header__img kubernetes" src={ process.env.PUBLIC_URL +"/images/kubernetes.png"} alt="kubernetes" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner cicd-skill">
    <a href="https://www.redhat.com/en/topics/devops/what-is-ci-cd" target="_blank" className="partner__link">
        <img className="header__img cicd" src={ process.env.PUBLIC_URL +"/images/cicd.png"} alt="cicd" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner jest-skill">
    <a href="https://jestjs.io/" target="_blank" className="partner__link">
        <img className="header__img jest" src={ process.env.PUBLIC_URL +"/images/jest.png"} alt="jest" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner cypress-skill">
    <a href="https://www.cypress.io/" target="_blank" className="partner__link">
        <img className="header__img cypress" src={ process.env.PUBLIC_URL +"/images/cypress.png"} alt="cypress" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner mocha-skill">
    <a href="https://mochajs.org/" target="_blank" className="partner__link">
        <img className="header__img mocha" src={ process.env.PUBLIC_URL +"/images/mocha.svg"} alt="mocha" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner jira-skill">
    <a href="https://jira.atlassian.com/" target="_blank" className="partner__link">
        <img className="header__img jira" src={ process.env.PUBLIC_URL +"/images/jira.svg"} alt="jira" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner confluence-skill">
    <a href="https://www.atlassian.com/software/confluence" target="_blank" className="partner__link">
        <img className="header__img confluence" src={ process.env.PUBLIC_URL +"/images/confluence.png"} alt="confluence" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner postman-skill">
    <a href="https://www.postman.com/" target="_blank" className="partner__link">
        <img className="header__img postman" src={ process.env.PUBLIC_URL +"/images/postman.png"} alt="postman" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner algorithms-skill">
    <a href="https://www.geeksforgeeks.org/introduction-to-algorithms/" target="_blank" className="partner__link">
        <img className="header__img algorithms" src={ process.env.PUBLIC_URL +"/images/algorithms.png"} alt="algorithms" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner pandas-skill">
    <a href="https://pandas.pydata.org/" target="_blank" className="partner__link">
        <img className="header__img pandas" src={ process.env.PUBLIC_URL +"/images/pandas.png"} alt="pandas" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner numpy-skill">
    <a href="https://numpy.org/" target="_blank" className="partner__link">
        <img className="header__img numpy" src={ process.env.PUBLIC_URL +"/images/numpy.png"} alt="numpy" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner machinelearning-skill">
    <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" className="partner__link">
        <img className="header__img machinelearning" src={ process.env.PUBLIC_URL +"/images/ml.png"} alt="machinelearning" />
    </a>
</div>
<div data-aos="fade-right" className="col-md-3 col-sm-6 col-xs-6 partner deeplearning-skill">
    <a href="https://en.wikipedia.org/wiki/Deep_learning" target="_blank" className="partner__link">
        <img className="header__img deeplearning" src={ process.env.PUBLIC_URL +"/images/dl.png"} alt="deeplearning" />
    </a>
</div>

      </div>
    </div>
  );
};

export default Skills;

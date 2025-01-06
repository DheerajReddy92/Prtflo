import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-social">
        <a href="#" className="footer-social-link">
  <img src={process.env.PUBLIC_URL + '/Images/phone.png'} alt="phone" className="footer-icon" />
</a>

<a href="mailto:dpaturu@buffalo.edu" className="footer-social-link">
  <img src={process.env.PUBLIC_URL + '/Images/mail.png'} alt="mail" className="footer-icon" />
</a>

<a href="https://www.google.com/maps/place/81+Merrimac+St,+Buffalo,+NY+14214/data=!4m2!3m1!1s0x89d372a325d1e341:0xf9a96da955f5a81c?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noopener noreferrer" className="footer-social-link">
  <img src={process.env.PUBLIC_URL + '/Images/loc.png'} alt="location" className="footer-icon" />
</a>

<a href="https://www.linkedin.com/in/dheeraj-reddy-paturu92/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
  <img src={process.env.PUBLIC_URL + '/Images/in.png'} alt="LinkedIn" className="footer-icon" />
</a>

<a href="https://github.com/DheerajReddy92" target="_blank" rel="noopener noreferrer" className="footer-social-link">
  <img src={process.env.PUBLIC_URL + '/Images/gitlogo.png'} alt="GitHub" className="footer-icon" />
</a>

<a href="https://www.hackerrank.com/profile/38130157Dheeraj" target="_blank" rel="noopener noreferrer" className="footer-social-link">
  <img src={process.env.PUBLIC_URL + '/Images/hackerrank.png'} alt="HackerRank" className="footer-icon" />
</a>

<a href="https://leetcode.com/u/dheerajpaturi92/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
  <img src={process.env.PUBLIC_URL + '/Images/leetcode.png'} alt="LeetCode" className="footer-icon" />
</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

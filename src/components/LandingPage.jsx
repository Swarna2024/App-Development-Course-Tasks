import React from 'react';
import './Landing.css';
import LandingPageSvg from "../assests/LandingPage.svg"
import PageLogo from "../assests/FinalLogo.png"
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <nav className="navbar">
        <div><img className="navbar-logo" src={PageLogo} alt="Description" /></div>
        <div className="navbar-links">
        <Link to="#home" className="nav-link">Home</Link>
        <Link to="#about" className="nav-link">About</Link>
          <Link to="/login" className="ghost-button">Login</Link>
        </div>
      </nav>
      <div className="landing-container">
        <div className="landing-text" style={{ marginTop: '30px' }}>
        <h1 >
            Boost Your Productivity<br />
            <span className="highlight">with <span className="highlight-timetrek">TimeTrek</span></span>
          </h1>
          <p style={{ marginTop: '-30px' }} class="sub-title">Collaborate, organize, and succeed with ease.</p>
          <p class="desp"> Your Ultimate Productivity Companion. Effortlessly manage your tasks and boost your efficiency with our intuitive scheduling and tracking tools.</p>
          <Link to="/register"><a href="#start" className="start-button">Start Now</a></Link> {/* Start Now button */}
         
        </div>
        <div className="landing-image">
          <img src={LandingPageSvg} alt="Description" />
        </div>
      </div>
    </>
  );
};

export default Landing;



import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.css'; 
import PageLogo from '../assests/FinalLogo.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <img className="navbar-logo" src={PageLogo} alt="Your Logo" />
        </div>
        <div className="navbar-links">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/" className="nav-link">Log out</Link>
        </div>
      </nav>
      </>
  )
}

export default Navbar;
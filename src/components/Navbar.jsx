import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import PageLogo from '../assests/FinalLogo.png';
import MenuIcon from '../assests/menu-logo.svg'; // Ensure the path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={PageLogo} alt="Your Logo" />
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/manager-home" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/manager-profile" className="nav-link">Profile</Link>
        <Link to="/" className="nav-link">Log out</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={MenuIcon} alt="Menu Icon" />
      </div>
    </nav>
  );
};

export default Navbar;

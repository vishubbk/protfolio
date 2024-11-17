import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="shadow"></div>
      <div className="logo">
        <div className="first">leptop</div>
        <div className="second">_tz</div>
      </div>

      <div className={`options ${isOpen ? "visible" : ""}`}>
        <Link to="/" onClick={toggleMenu}>HOME</Link>
        <Link to="/about" onClick={toggleMenu}>ABOUT-US</Link>
        <Link to="/contact" onClick={toggleMenu}>CONTACT-US</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;

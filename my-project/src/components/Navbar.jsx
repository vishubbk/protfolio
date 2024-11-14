// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">
      <div className="shadow"></div>
      <div className="logo">
        <div className="first">leptop</div>
        <div className="second">_tz</div>
      </div>

      <div className="options">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT-US</Link>
        <Link to="/contact">CONTACT-US</Link>
      </div>
    </div>
  );
};

export default Navbar;

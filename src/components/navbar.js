import React from 'react';
import logoImg from '../images/logo.png';

const Navbar = () => (
  <header>
    <div className="logo-section">
      <img className="logo-pic" src={logoImg} alt="logo" />
      <span id="logo-text">Space Travelers &lsquo; Hub</span>
    </div>
  </header>
);

export default Navbar;

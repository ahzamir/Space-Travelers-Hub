import React from 'react';
import logoImg from '../images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
  <header>
    <div className="logo-section">
      <img className="logo-pic" src={logoImg} alt="logo" />
      <span id="logo-text">Space Travelers &lsquo; Hub</span>
    </div>
  </header>
)};

export default Navbar;

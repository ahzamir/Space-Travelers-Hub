import React from 'react';
import logoImg from '../images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];
  return (
    <header>
      <div className="logo-section">
        <img className="logo-pic" src={logoImg} alt="logo" />
        <span id="logo-text">Space Travelers &lsquo; Hub</span>
      </div>
      <ul className="pageLinksSection">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="pageLink">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  )
};

export default Navbar;

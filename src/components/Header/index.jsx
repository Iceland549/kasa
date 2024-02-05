import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; 
import './_header.scss'
import '../../utils/styles/sass/_base.scss';


function Header() {
  return (
    <header>
      <img src={logo} className="header_logo" alt="Logo" />
      <nav>
        <ul>
        <li><NavLink to="/" activeStyle={{ borderBottom: '2px solid red' }}>Accueil</NavLink></li>
        <li><NavLink to="/About" activeStyle={{ borderBottom: '2px solid red' }}>A propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

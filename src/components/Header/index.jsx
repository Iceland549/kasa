import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; 
import './_header.scss'
import '../../utils/styles/sass/_base.scss';


function Header() {
  return (
    <header>
      <div className='header-container'>
        <img src={logo} className="header_logo" alt="Logo" />
        <nav>
          <ul>
          <li className='header-accueil'><NavLink to="/" activestyle={{ borderBottom: '2px solid red' }}>Accueil</NavLink></li>
          <li className='header-apropos'><NavLink to="/About" activestyle={{ borderBottom: '2px solid red' }}>A Propos</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

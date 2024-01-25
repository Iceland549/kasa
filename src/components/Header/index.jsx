import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; 
import './_header.scss'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/About">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

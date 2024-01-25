import React from 'react';
import logo from '../../assets/logo.jpg'; 
import './_footer.scss'

function Footer() {
  return (
    <footer>
      <img src={logo} className='footer_logo' alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;

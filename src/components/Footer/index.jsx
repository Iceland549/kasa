import React from 'react';
import logo from '../../assets/kasa.png'; 
import './_footer.scss'

function Footer() {
  return (
    <footer>
      <img src={logo} className='footer_logo' alt="Logo" />
      <p>© 2020 Kasa. All <br/> rights reserved</p>
    </footer>
  );
};

export default Footer;

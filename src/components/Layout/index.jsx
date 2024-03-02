import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './_layout.scss';
import '../../pages/LocPage/locpage.scss';


function Layout({ children }) {
  return (
    <div>
      <Header isLocPage={true} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

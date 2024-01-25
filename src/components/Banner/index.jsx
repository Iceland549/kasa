import React from 'react';
import banner1 from '../../assets/banner_accueil.jpg'; 
import './_banner.scss'


function Banner() {
  return (
    <div className="banner">
      <img src={banner1} className="banner_img1" alt="Paysage côtier rocheux" />
      <div className="banner_text">Chez vous, partout et ailleurs</div>
    </div>
  );
};


export default Banner;
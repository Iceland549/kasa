import React from 'react';
import './_banner.scss'


function Banner({image, children}) {
  return (
    <div className="banner">
      <img src={image} className="banner_img1" alt="Paysage côtier rocheux" />
      {children}
    </div>
  );
};


export default Banner;
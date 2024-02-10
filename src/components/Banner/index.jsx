import React from 'react';
import './_banner.scss'


function Banner({image, alt, children}) {
  return (
    <div className="banner">
      <img src={image} className="banner_img1" alt={alt} />
      {children}
    </div>
  );
};


export default Banner;
import React, { useState } from 'react';
import './_carousel.scss';
import arrowLeftImage from '../../assets/arrow_left.png'; 
import arrowRightImage from '../../assets/arrow_right.png'; 

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  return (
    <div className="carousel">
      <img className="carousel-img" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {images.length > 1 && <div className="image-count">{`${currentIndex + 1}/${images.length}`}</div>}
      {images.length > 1 && (
        <>
          <img
            src={arrowLeftImage}
            alt="Flèche gauche"
            className="arrow arrow_left"
            onClick={prevSlide}
          />
          <img
            src={arrowRightImage}
            alt="Flèche droite"
            className="arrow arrow_right"
            onClick={nextSlide}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;

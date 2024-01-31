import React from 'react';
import './_card.scss'
import { Link } from 'react-router-dom';

function Card({id, title, cover}) {
  return (
    <Link to={`/LocPage/${id}`}>
      <div className='card'>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>

  );
};


export default Card;
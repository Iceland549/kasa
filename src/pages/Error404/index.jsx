// Error
import React from 'react';
import { Link } from 'react-router-dom';
import './error.scss'


function Error() {
  return (
    <div className='error-container'>
      <h1>404</h1>
      <p>Oups ! La page que <br/> vous demandez n'exite pas.</p>
      <Link to={`/`}>
        <p className='error-link'> Retourner sur la page d'acceuil</p>
      </Link>
    </div>
  );
};

export default Error;

import React from 'react';
import { Link } from 'react-router-dom';


function Error404() {
  return (
    <div>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'exite pas.</p>
      <Link to={`/`}>
        <p>Retourner sur la page d'acceuil</p>
      </Link>

    </div>
  );
};

export default Error404;

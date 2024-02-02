// Collapse
import React, { useState } from 'react';
import './collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Collapse({children}) {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleOpen = () => setIsOpen(!isOpen); 

  return (
    <div className='collapse' onClick={toggleOpen}>
      <div className={`arrow-container ${isOpen ? 'down' : 'up'}`}>
        {children[0]}
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} /> 
      </div>
      {isOpen && children[1]}
    </div>
  );
};

export default Collapse;

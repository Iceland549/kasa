// Collapse
import React, { useState } from 'react';
import './collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({title, children}) {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleOpen = () => setIsOpen(!isOpen); 

  return (
    <div className='collapse' >
      <div className={`arrow-container ${isOpen ? 'up' : 'down'}`}>
        {title && <p className="collapse-title">{title}</p>}
        <FontAwesomeIcon className='arrow-icons' icon={faAngleUp} onClick={toggleOpen} />       
      </div>
      <div className={`collapse-children ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;

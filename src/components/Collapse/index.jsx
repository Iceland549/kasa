// Collapse
import React, { useState } from 'react';
import './collapse.scss'

function Collapse({children}) {
  const [isOpen, setIsOpen] = useState(true); 
  const toggleOpen = () => setIsOpen(!isOpen); 

  return (
    <div className='collapse' onClick={toggleOpen}>
      {isOpen && children}
    </div>
  );
};

export default Collapse;

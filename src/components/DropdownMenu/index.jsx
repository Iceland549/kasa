// DropdownMenu
import React from 'react';
import './_dropdownmenu.scss'

function DropdownMenu({title, children}) {
  return (
      <div className='dropdownmenu'>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
  );
};


export default DropdownMenu;
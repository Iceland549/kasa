import React from 'react';
import './tag.scss'

function Tag({tagName}) {
  return (
    <span className='tag' >{tagName}</span>
  );
};


export default Tag;
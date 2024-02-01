import React from 'react';
import './tags.scss'

function Tags({tags}) {
  return (
        <div className='tags'>
            <ul>
                {tags.map((tags, index) => (
                <li key={index}>{tags}</li>
                ))}
            </ul>
        </div>
  );
};


export default Tags;
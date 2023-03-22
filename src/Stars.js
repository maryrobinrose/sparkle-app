import React from 'react';
import starLarge from './images/stars/star-large.svg';
import './stars.css';

const Stars = () => {

  return (
    <div>
      <img className="star-large" src={starLarge} alt="star-large" />
    </div>
  );
};

export default Stars;
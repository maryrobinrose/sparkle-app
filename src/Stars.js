import React from 'react';
import starLarge from './images/stars/star-large.svg';
import starMedium from './images/stars/star-medium.svg';
import starSmall from './images/stars/star-small.svg';
import './stars.css';

const Stars = () => {

  return (
    <div>
      <img className="star-large" src={starLarge} alt="star-large" />
      <img className="star-medium" src={starMedium} alt="star-medium" />
      {/* <img className="star-small" src={starSmall} alt="star-small" /> */}
    </div>
  );
};

export default Stars;
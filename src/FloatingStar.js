import React from 'react';
import starLarge from './images/stars/star-large.svg';
import './FloatingStar.css';

const FloatingStar = () => {

  return (
    <div>
      <img className="star-large" src={starLarge} alt="star-large" />
    </div>
  );
};

export default FloatingStar;
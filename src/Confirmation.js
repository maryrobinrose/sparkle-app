import React from 'react';
import { useNavigate } from 'react-router-dom';
import starMedium from './images/stars/star-medium.svg';

const Confirmation = ({ onButtonClick }) => {
  const navigate = useNavigate();

  const handleOrderAgain = () => {
    navigate('/input');
    onButtonClick();
  };

  return (
    <div className="main-message">
       <button className="button-back" alt="Go back" onClick={() => navigate('/input')}></button>
      <div className="pink-title"></div>
      <div className="vertical-line"></div>
      <div className="horizonal-line"></div>
      <h1 className="main-message-title">Sparkle App</h1>
      <p className="confirmation">Your dreams are on the way!</p>
      <div class="image-container">
        <img src={starMedium} alt="star-medium" />
        <span class="delivery-text">Guaranteed Delivery!*</span>
      </div>
      <button className="button-primary" alt="Order again" onClick={handleOrderAgain}>Order Again!</button>
      <p className="asterisk">*Arrival times may vary. Trust the timing of the Universe!</p>
    </div>
  );
};

export default Confirmation;

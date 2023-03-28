import React from 'react';
import { useNavigate } from 'react-router-dom';
import starMedium from './images/stars/star-medium.svg';
import './Confirmation.css'

const Confirmation = ({ onButtonClick }) => {
  const navigate = useNavigate();

  const handleOrderAgain = () => {
    navigate('/input');
    onButtonClick();
  };

  return (
    <div className="main-message">
      <h1 className="main-message-title">Sparkle App</h1>
      <div className="green-square"></div>
      <div className="pink-title"></div>
      <p className="confirmation">Your dreams are on the way!</p>
      <div className="star-container">
        <img src={starMedium} alt="star-medium" />
        <span class="delivery-text">Guaranteed Delivery!*</span>
      </div>
      <button className="button-primary" alt="Order again" onClick={handleOrderAgain}>Order Again!</button>
      <p className="asterisk">*Arrival times may vary. Trust the timing of the Universe!</p>
    </div>
  );
};

export default Confirmation;

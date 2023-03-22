import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({ onButtonClick }) => {
  const navigate = useNavigate();

  const handleOrderAgain = () => {
    navigate('/input');
    onButtonClick();
  };

  return (
    <div>
      <h1>Confirmation</h1>
      <span>Guaranteed Delivery!*</span>
      <p>Your dreams are on the way!</p>
      <button className="button-primary" alt="Order again" onClick={handleOrderAgain}>Order Again!</button>
      <p>*Arrival times may vary. Trust the timing of the Universe!</p>
    </div>
  );
};

export default Confirmation;

import React from 'react';

const Confirmation = ({onButtonClick}) => {
  return (
    <div>
      <h1>Confirmation</h1>
      <span>Guaranteed Delivery!*</span>
      <p>Your dreams are on the way!</p>
      <button onClick={onButtonClick}>Order Again!</button>
      <p>*Arrival times may vary. Trust the timing of the Universe!</p>
    </div>
  );
};

export default Confirmation;
import React from 'react';

const Home = ({ onButtonClick }) => {
  return (
    <div>
      <h1>Sparkle App</h1>
      <p>Welcome to Sparkle App! The #1 place to order your dreams!</p>
      <button onClick={onButtonClick}>Order Now!</button>
    </div>
  );
};

export default Home;
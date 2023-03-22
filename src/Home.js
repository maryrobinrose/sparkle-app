import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/input');
  };

  return (
    <div>
      <h1>Sparkle App</h1>
      <p>Welcome to Sparkle App! The #1 place to order your dreams!</p>
      <button className="button-primary" alt="Order now" onClick={handleButtonClick}>Order Now!</button>
    </div>
  );
};

export default Home;

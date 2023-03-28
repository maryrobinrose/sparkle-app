import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/input');
  };

  return (
    <div className="main-message">
      <h1 className="main-message-title">Sparkle App</h1>
      <div className="green-square"></div>
      <div className="pink-title"></div>
      <div className="welcome-message">
        <p className="greeting-one">Welcome to Sparkle App!</p>
        <p className="greeting-two">The #1 place to order your dreams!</p>
      </div>
      <button className="button-primary" alt="Order now" onClick={handleButtonClick}>Order Now!</button>
    </div>
  );
};

export default Home;

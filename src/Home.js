import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/input');
  };

  return (
    <div>
      <div className="main-message">
        <div className="green-square"></div>
        <div className="pink-title"></div>
        <div className="vertical-line"></div>
        <div className="horizonal-line"></div>
        <h1 className="main-message-title">Sparkle App</h1>
        <p className="greeting-one">Welcome to Sparkle App!</p>
        <p className="greeting-two">The #1 place to order your dreams!</p>
        <button className="button-primary" alt="Order now" onClick={handleButtonClick}>Order Now!</button>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/input');
  };

  return (
    <div>
      <Header />
      <h1>Sparkle App</h1>
      <p>Welcome to Sparkle App! The #1 place to order your dreams!</p>
      <button className="button-primary" onClick={handleButtonClick}>Order Now!</button>
      <Footer />
    </div>
  );
};

export default Home;

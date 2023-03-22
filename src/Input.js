import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Input = (props) => {
  const { onFormSubmit } = props;
  const [item, setItem] = useState('');
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setCart([...cart, item]);
    setMessage(`Item "${item}" added to cart.`);
    setItem('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!item) {
      setMessage('Please enter a dream');
    } else {
      onFormSubmit(item);
      handleAddToCart();
    }
  };

  const handleGoToCart = () => {
    navigate('/shopping-bag');
  };

  return (
    <div>
      <Header />
      <button className="button-back" alt="Go back" onClick={() => navigate('/')}></button>
      <h1>Enter your dream here:</h1>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" placeholder="My dream job..." value={item} onChange={(e) => setItem(e.target.value)} />
        <button className="button-primary" alt="Add to bag" type="submit">Add to bag</button>
      </form>
      <p>{message}</p>
      <button className="button-shopping-bag" alt="Amount of items in shopping bag" onClick={handleGoToCart}>{cart.length}</button>
      <Footer />
    </div>
  );
};

export default Input;

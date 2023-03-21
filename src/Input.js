import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = () => {
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
    handleAddToCart();
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div>
      <h1>Enter your dream here:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="My dream job..." value={item} onChange={(e) => setItem(e.target.value)} />
        <button type="submit">Add to bag</button>
      </form>
      <p>{message}</p>
      <button onClick={handleGoToCart}>Go to Cart</button>
    </div>
  );
};

export default Input;
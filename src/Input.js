import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = () => {
  const [item, setItem] = useState('');
  const [cart, setCart] = useState([]);
  const history = useNavigate();

  const handleAddToCart = () => {
    setCart([...cart, item]); // add the new item to the cart
    console.log(`Item "${item}" added to cart.`);
    alert(`Item "${item}" added to cart.`);
    setItem(''); // clear the input field
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddToCart();
  };

  const handleGoToCart = () => {
    history('/cart'); // navigate to the cart page
  };

  return (
    <div>
      <h1>Enter your dream here:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="My dream job..." value={item} onChange={(e) => setItem(e.target.value)} />
        <button type="submit">Add to bag</button>
      </form>
      <button onClick={handleGoToCart}>Go to Cart</button>
    </div>
  );
};

export default Input;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = (props) => {
  const { onFormSubmit } = props;
  const [item, setItem] = useState('');
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = () => {
      setCart([...cart, item]);
      setItem('');
      setMessage('');
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!item) {
      setMessage('Please enter a dream');
    } else if (cart.length === 3) {
      setMessage("You've reached the 3 dream limit!");
    } else {
      onFormSubmit(item);
      handleAddToCart();
    }
  };
  

  const handleGoToCart = () => {
    navigate('/shopping-bag');
  };

  return (
    <div className="main-message">
      <button className="button-back" alt="Go back" onClick={() => navigate('/')}></button>
      <div className="pink-title"></div>
      <div className="vertical-line"></div>
      <div className="horizonal-line"></div>
      <h1 className="main-message-title">Sparkle App</h1>
      <button className="button-shopping-bag" alt="Amount of items in shopping bag" onClick={handleGoToCart}>{cart.length}</button>
      <p className="enter-dream">Enter your dream here:</p>
      <form onSubmit={handleSubmit}>
        <input 
          className={`${message ? 'error-input' : 'main-input'}`}
          type="text" 
          placeholder="My dream job..." 
          value={item} 
          onChange={(e) => setItem(e.target.value)} 
          onFocus={() => setMessage(false)}
        />
        {message && <div className="error-message">{message}</div>}
        <button className="button-primary" alt="Add to bag" type="submit" onClick={() => setMessage(false)}>Add to bag</button>
      </form>
    </div>
  );
};

export default Input;
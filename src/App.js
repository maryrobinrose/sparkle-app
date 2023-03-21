import React, { useState } from 'react';
import Home from './Home';
import Input from './Input';
import ShoppingBag from './ShoppingBag';
import Confirmation from './Confirmation';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [items, setItems] = useState([]);

  const handleButtonClick = () => {
    setCurrentPage('input');
  };

  const handleFormSubmit = (item) => {
    setItems([...items, item]);
    setCurrentPage('shoppingBag');
  };

  const handleCheckout = () => {
    setItems([]);
    setCurrentPage('confirmation');
  };

  let pageContent;

  switch (currentPage) {
    case 'home':
      pageContent = <Home onButtonClick={handleButtonClick} />;
      break;
    case 'input':
      pageContent = <Input onFormSubmit={handleFormSubmit} />;
      break;
    case 'shoppingBag':
      pageContent = <ShoppingBag items={items} onCheckout={handleCheckout} />;
      break;
    case 'confirmation':
      pageContent = <Confirmation onButtonClick={handleButtonClick} />;
      break;
    default:
      pageContent = <div>Page not found</div>;
  }

  return <div>{pageContent}</div>;
};

export default App;
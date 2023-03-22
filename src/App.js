import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Input from './Input';
import ShoppingBag from './ShoppingBag';
import Confirmation from './Confirmation';
import './styles.css';

const App = () => {
  const [items, setItems] = useState([]);

  const handleFormSubmit = (item) => {
    setItems([...items, item]);
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleEdit = (index, updatedItem) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    setItems(newItems);
  };

  const handleCheckout = () => {
    setItems([]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<Input onFormSubmit={handleFormSubmit} />} />
        <Route path="/shopping-bag" element={<ShoppingBag items={items} onDelete={handleDelete} onEdit={handleEdit} onCheckout={handleCheckout} />} />
        <Route path="/confirmation" element={<Confirmation onButtonClick={handleCheckout} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React, { useState } from 'react';

const Input = ({ onFormSubmit }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(item);
  };

  return (
    <div>
      <h1>Enter your dream here:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="My dream job..." value={item} onChange={(e) => setItem(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
import React, { useState } from 'react';

function DreamInput() {
  const [cartItems, setCartItems] = useState([]);

  function addItem() {
    const newItem = document.getElementById('item-input').value;
    setCartItems([...cartItems, newItem]);
    document.getElementById('item-input').value = '';
  }

  return (
    <div>
      <h2>Enter your dream here</h2>
      <input type="text" id="item-input" />
      <button onClick={addItem}>Add to Cart</button>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DreamInput;
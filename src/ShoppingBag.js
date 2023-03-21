import React from 'react';

const ShoppingBag = ({ items, onCheckout }) => {
  return (
    <div>
      <h1>Shopping Bag</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Total: Good Vibes</p>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingBag;
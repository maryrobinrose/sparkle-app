import React from 'react';

const ShoppingBag = (props) => {
  const { items, onCheckout } = props;

  return (
    <div>
      <h1>Shopping Bag</h1>
      {items.length === 0 ? (
        <p>Your bag is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <button onClick={onCheckout} disabled={items.length === 0}>Checkout</button>
    </div>
  );
};

export default ShoppingBag;

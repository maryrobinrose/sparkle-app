import React from 'react';

const ShoppingBag = (props) => {
  const { items, onCheckout } = props;

  return (
    <div>
      <h1>Shopping Bag</h1>
      {items.length === 0 ? (
        <p>Your bag is empty</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>Total: Good vibes</p>
          <button onClick={onCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default ShoppingBag;

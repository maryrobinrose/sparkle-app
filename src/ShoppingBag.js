import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingBag = (props) => {
  const { items } = props;
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/confirmation');
  };

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
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
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default ShoppingBag;

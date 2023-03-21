import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const ShoppingBag = (props) => {
  const [items, setItems] = useState(props.items); // create state variable for items
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/confirmation');
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <Header />
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Shopping Bag</h1>
      {items.length === 0 ? (
        <p>Your bag is empty</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleDelete(index)}>Delete</button> {/* add a delete button */}
              </li>
            ))}
          </ul>
          <p>Total: Good vibes</p>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
      <Footer />
    </div>
  );
};

export default ShoppingBag;

import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const ShoppingBag = (props) => {
  const [items, setItems] = useState(props.items); // create state variable for items
  const [selectedItem, setSelectedItem] = useState(null); // create state variable for selected item
  const [editing, setEditing] = useState(false); // create state variable for editing mode
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/confirmation');
  };

  const handleDelete = (index) => {
    if (!editing) {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    } else {
      setEditing(false);
    }
  };

  const handleEdit = (index) => {
    setSelectedItem(items[index]);
    setEditing(true);
  };

  const handleSave = (newItem) => {
    const newItems = [...items];
    const index = newItems.indexOf(selectedItem);
    newItems[index] = newItem;
    setItems(newItems);
    setSelectedItem(null);
    setEditing(false);
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
                {editing && selectedItem === item ? (
                  <>
                    <input
                      type="text"
                      defaultValue={item}
                      onChange={(e) => setSelectedItem(e.target.value)}
                    />
                    <button onClick={() => handleSave(selectedItem)}>Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                  </>
                ) : (
                  <>
                    {item}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
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

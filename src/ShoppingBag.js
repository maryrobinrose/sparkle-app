import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const ShoppingBag = (props) => {
  const [items, setItems] = useState([]); // create state variable for items
  const [selectedItemIndex, setSelectedItemIndex] = useState(null); // create state variable for selected item index
  const [editedItemValue, setEditedItemValue] = useState(''); // create state variable for edited item value
  const [editing, setEditing] = useState(false); // create state variable for editing mode
  const navigate = useNavigate();

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

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
    setSelectedItemIndex(index);
    setEditedItemValue(items[index]);
    setEditing(true);
  };

  const handleSave = () => {
    console.log('save is clicked');
    const newItems = [...items];
    newItems[selectedItemIndex] = editedItemValue;
    setItems(newItems);
    setSelectedItemIndex(null);
    setEditedItemValue('');
    setEditing(false);
  };

  const handleBack = () => {
    navigate('/input');
    window.location.reload();
  };

  return (
    <div>
      <Header />
      <button className="button-back" alt="Go back" onClick={() => navigate('/input')}></button>
      <h1>Shopping Bag</h1>
      {items.length === 0 ? (
        <p>Your bag is empty</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {editing && selectedItemIndex === index ? (
                  <>
                    <input 
                      type="text" 
                      value={editedItemValue} 
                      onChange={(e) => setEditedItemValue(e.target.value)} 
                      />
                    <button onClick={handleSave}>Save</button>
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
          <button className="button-primary" alt="Checkout" onClick={handleCheckout}>Checkout</button>
        </>
      )}
      <Footer />
    </div>
  );
};

export default ShoppingBag;

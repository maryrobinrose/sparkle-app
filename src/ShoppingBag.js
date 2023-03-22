import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const ShoppingBag = (props) => {
  const [items, setItems] = useState([]); 
  const [selectedItemIndex, setSelectedItemIndex] = useState(null); 
  const [editedItemValue, setEditedItemValue] = useState(''); 
  const [editing, setEditing] = useState(false); 
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
    const newItems = [...items];
    newItems[selectedItemIndex] = editedItemValue;
    setItems(newItems);
    setSelectedItemIndex(null);
    setEditedItemValue('');
    setEditing(false);
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
                    <button className="button-save" alt="Save" onClick={handleSave}></button>
                    <button className="button-delete-cancel" alt="Cancel"onClick={() => setEditing(false)}></button>
                  </>
                ) : (
                  <>
                    <button className="button-delete-cancel" alt="Delete" onClick={() => handleDelete(index)}></button>
                    <button className="button-edit" alt="Edit" onClick={() => handleEdit(index)}></button>
                    {item}
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

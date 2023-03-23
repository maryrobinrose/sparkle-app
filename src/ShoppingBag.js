import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingBag = (props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null); 
  const [editedItemValue, setEditedItemValue] = useState(''); 
  const [editing, setEditing] = useState(false); 
  const navigate = useNavigate();

  const handleCheckout = () => {
    props.onCheckout();
    navigate('/confirmation');
  };

  const handleDelete = (index) => {
    props.onDelete(index);
  };

  const handleEdit = (index) => {
    setSelectedItemIndex(index);
    setEditedItemValue(props.items[index]);
    setEditing(true);
  };

  const handleSave = () => {
    const newItems = [...props.items];
    newItems[selectedItemIndex] = editedItemValue;
    props.onEdit(selectedItemIndex, editedItemValue);
    setSelectedItemIndex(null);
    setEditedItemValue('');
    setEditing(false);
  };

  return (
    <div className="main-message">
      <button className="button-back" alt="Go back" onClick={() => navigate('/input')}></button>
      <div className="pink-title"></div>
      <div className="vertical-line"></div>
      <div className="horizonal-line"></div>
      <h1 className="main-message-title">Sparkle App</h1>
      {props.items.length === 0 ? (
        <div>
          <p className="empty-bag">Your bag is empty</p>
          <button className="button-primary" alt="Order now" onClick={() => navigate('/input')}>Order Now!</button>
        </div>
      ) : (
        <>
          <ul>
            {props.items.map((item, index) => (
              <li>
                {editing && selectedItemIndex === index ? (
                  <div>
                    <input 
                      type="text" 
                      className="edit-input"
                      value={editedItemValue} 
                      onChange={(e) => setEditedItemValue(e.target.value)} 
                      />
                    <button className="button-save" alt="Save" onClick={handleSave}></button>
                    <button className="button-delete-cancel" alt="Cancel"onClick={() => setEditing(false)}></button>
                  </div>
                ) : (
                  <div>
                    <button className="button-delete-cancel" alt="Delete" onClick={() => handleDelete(index)}></button>
                    <button className="button-edit" alt="Edit" onClick={() => handleEdit(index)}></button>
                    <div className="item-name">{item}</div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <p className="total">Total: Good vibes</p>
          <button className="button-primary" alt="Checkout" onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default ShoppingBag;

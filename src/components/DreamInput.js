import React, { useState } from 'react';

function DreamInput() {
  const [bagItems, setBagItems] = useState([]);

  function addItem() {
    const newItem = document.getElementById('item-input').value;
    setBagItems([...bagItems, newItem]);
    document.getElementById('item-input').value = '';
  }

  return (
    <div>
      <h2>enter your dream here</h2>
      <input type="text" id="item-input" placeholder="my dream job..." />
      <button onClick={addItem}>add to bag</button>
      {/* <ul>
        {bagItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DreamInput;
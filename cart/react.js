import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([
    { name: 'Apple Juice', price: 250, quantity: 2, id: 1 },
    { name: 'Grapes Juice', price: null, quantity: 1, id: 2 },
  ]);

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <button onClick={() => handleRemoveItem()}>Remove all</button>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>Rs. {item.price?.toFixed(2)}</p>
          <p>{item.quantity} x 250ml</p>
          <div className="cart-item-actions">
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
              -
            </button>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
              +
            </button>
          </div>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          <button>Save for later</button>
        </div>
      ))}
      <p className="subtotal">
        Sub-Total: Rs. {subtotal.toFixed(2)}
      </p>
      <p>{items.length} items</p>
      <button className="checkout">Checkout</button>
    </div>
  );
}

export default ShoppingCart;
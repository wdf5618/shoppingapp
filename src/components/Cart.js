import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border-b py-2">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

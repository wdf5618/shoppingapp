import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      {cartItems.length > 0 && (
        <div className="mt-6">
          <button className="bg-indigo-500 text-white px-4 py-2">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

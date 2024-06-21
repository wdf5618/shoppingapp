import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            ShopLogo
          </Link>
          <div className="flex items-center">
            <Link to="/cart" className="text-gray-800 mx-4">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

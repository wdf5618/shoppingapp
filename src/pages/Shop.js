import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ products }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-md p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="mt-2">${product.price.toFixed(2)}</p>
            <Link
              to={`/product/${product.id}`}
              className="bg-indigo-500 text-white px-4 py-2 mt-4 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

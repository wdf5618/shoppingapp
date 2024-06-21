import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="text-indigo-500 mt-4 block"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;

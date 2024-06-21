import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex">
        <img
          src={product.image}
          alt={product.name}
          className="w-1/2 h-auto object-cover"
        />
        <div className="ml-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-500 text-white px-4 py-2 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ products }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl text-center font-bold mb-6">
        Welcome to Our Shop
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

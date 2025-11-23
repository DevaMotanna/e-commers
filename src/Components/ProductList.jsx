import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  return (
    <div
      className="
        w-full 
        grid 
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6              
        p-4
      "
    >
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onAdd={() => {
            onAdd(p);
            alert(`${p.title} added to cart`);
          }}
        />
      ))}
    </div>
  );
}

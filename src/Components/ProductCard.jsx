import React from "react";

export default function ProductCard({ product, onAdd }){
  return (
    <div className="w-auto border-1 rounded-md bg-gray-500 m-2 p-5 hover:scale-105 transition duration-300">
      <img src={product.image} alt={product.title} className="w-full h-[100px]"/>
      <div style={{flex:1}}>
        <h4 title={product.title}>{product.title}</h4>
      </div>
      <div className="price-row">
        <div>
          <div style={{color:"#444",fontWeight:600}}>₹{Number(product.price).toFixed(2)}</div>
          <div className="font-12 text-black">{product.category}</div>
        </div>
        <div>
          <button className="rounded-full border-1 bg-blue-500 p-2 text-white my-1" onClick={onAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

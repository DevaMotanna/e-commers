import React from "react";
import Cart from "../assets/cart-arrow-down-solid-full.svg";

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav className="
      w-screen 
      flex flex-row 
      items-center 
      justify-around 
      p-4 
      bg-white 
      shadow-md 
      sticky top-0 z-50
    ">
      <div className="text-blue-700 text-3xl font-bold">
        E Bey 
      </div>

      <div className="flex flex-row items-center gap-12">

        <button
          onClick={onOpenCart}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={Cart}
            className="w-[30px] h-[30px]"
            alt="cart"
          />
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}

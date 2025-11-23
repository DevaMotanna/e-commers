import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import CartModal from "./Components/CartModal";
import MockupImage from "./Components/MockupImage";

const PRODUCTS_API = "https://fakestoreapi.com/products";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(PRODUCTS_API);

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
      return;
    }
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <div className="w-screen min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Container */}
      <main className="max-w-[1100px] mx-auto p-4">
        
        {/* Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-semibold">Products</h2>
          <p className="text-gray-500">Fetched from Fake Store API</p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-5 text-gray-600 text-lg">Loading products…</div>
        )}

        {/* Error */}
        {error && (
          <div className="py-5 text-red-600 font-semibold">{error}</div>
        )}

        {/* Product Grid */}
        <ProductList products={products} onAdd={addToCart} />

        {/* Mockup Section */}
        <section className="my-8">
          {/* <MockupImage /> */}
        </section>
      </main>

      {/* Cart Modal */}
      {isCartOpen && (
        <CartModal
          cartItems={cart}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
        />
      )}
    </div>
  );
}

import React from "react";

export default function CartModal({ cartItems, onClose, onRemove }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-lg p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Cart ({cartItems.length})</h3>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black"
          >
            Close
          </button>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            Your cart is empty.
          </div>
        ) : (
          <div className="flex flex-col gap-4 max-h-80 overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border p-3 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />

                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600 text-sm">
                    ₹{Number(item.price).toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-600 text-sm border border-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

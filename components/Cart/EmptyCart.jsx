import React from 'react';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-gray-50 border border-gray-300 rounded-lg my-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-gray-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h18l-1.35 9.32A4 4 0 0115.7 16H8.3a4 4 0 01-3.95-3.68L3 3zm5 16a2 2 0 104 0m-4 0a2 2 0 004 0"
        />
      </svg>
      <h2 className="text-lg font-medium text-gray-700">Your cart is empty</h2>
      <p className="text-sm text-gray-500 mb-4">Looks like you haven’t added anything to your cart yet.</p>
      <button className="px-6 py-2 text-white bg-black rounded-full text-sm font-medium">
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;

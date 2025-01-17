"use client"
import React, { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg">
      <button 
        onClick={decrease}
        className="px-4 py-2 text-gray-700 hover:bg-gray-50"
      >
        −
      </button>
      <span className="px-4 py-2 text-gray-700">{quantity}</span>
      <button 
        onClick={increase}
        className="px-4 py-2 text-gray-700 hover:bg-gray-50"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector; 
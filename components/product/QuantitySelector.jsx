"use client"
import React, { useState } from 'react';
import { useCart } from '@/lib/providers/CartProvider';
import { useProduct } from '@/lib/providers/ProductProvider';

const QuantitySelector = () => {
  const {product} = useProduct()
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCart();

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const itemToAdd = { ...product, quantity };
    addItemToCart(itemToAdd);
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
            <button 
              onClick={decrease}
              className="px-6 py-4 text-gray-700 hover:bg-gray-50"
              type='button'
            >
              −
            </button>
            <span className="px-2 py-4 text-gray-700">{quantity}</span>
            <button 
              onClick={increase}
              className="px-6 py-4 text-gray-700 hover:bg-gray-50"
              type='button'
            >
              +
            </button>


      </div>
      
      <button onClick={handleAddToCart} className="flex-1 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition" type='button'>
        ADD TO CART
      </button>
    </div>
    
  );
};

export default QuantitySelector; 
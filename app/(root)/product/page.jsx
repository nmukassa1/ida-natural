import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 lg:p-12">
      {/* Left Section: Product Images */}
      <div className="flex gap-4 w-full lg:w-1/3">
        {/* Small Thumbnails */}
        <div className="flex flex-col gap-4">
          <div className="w-20 h-20 rounded-md border border-gray-300">
            <ImagePlaceholder />
            <ImagePlaceholder />
            <ImagePlaceholder />
          </div>
         
        </div>
        {/* Main Image */}
        <div className="w-full h-full rounded-md border border-gray-300">
            <ImagePlaceholder />
            
          </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full lg:w-2/3">
        {/* Product Title and Price */}
        <h1 className="text-3xl font-semibold mb-2">Algae Peel-Off Mask</h1>
        <p className="text-xl font-medium text-gray-800 mb-1">$115.00</p>
        <p className="text-sm text-gray-500 mb-4">Tax included.</p>

        {/* Quantity Selector and Add to Cart Button */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button className="px-3 py-2 text-lg font-medium text-gray-700">-</button>
            <span className="px-4 py-2 text-lg font-medium text-gray-700">1</span>
            <button className="px-3 py-2 text-lg font-medium text-gray-700">+</button>
          </div>
          <button className="px-6 py-3 bg-black text-white text-lg font-medium rounded-full">
            ADD TO CART
          </button>
        </div>

        {/* Promo Code Section */}
        <div className="bg-beige-100 p-4 rounded-lg mb-6">
          <span className="text-pink-600 text-sm font-medium">
            💌 Use code "Beauty" for 10% OFF!
          </span>
        </div>

        {/* Product Details */}
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mb-6">
          <li>Algae Peel-Off Mask with moisturizing and soothing properties.</li>
          <li>For dry, sensitive, or mature skin.</li>
          <li>In only 10 minutes, this face mask will help soothe, purify, and moisturize the skin.</li>
        </ul>

        {/* Features */}
        <div className="flex gap-8 text-center">
          <div>
            <img src="/path-to-icon-recyclable.png" alt="Recyclable" className="w-10 h-10 mx-auto" />
            <p className="text-sm text-gray-700 mt-2">Recyclable</p>
          </div>
          <div>
            <img src="/path-to-icon-glutenfree.png" alt="Gluten-free" className="w-10 h-10 mx-auto" />
            <p className="text-sm text-gray-700 mt-2">Gluten-free</p>
          </div>
          <div>
            <img src="/path-to-icon-vegan.png" alt="Vegan" className="w-10 h-10 mx-auto" />
            <p className="text-sm text-gray-700 mt-2">Vegan</p>
          </div>
          <div>
            <img src="/path-to-icon-crueltyfree.png" alt="Cruelty-free" className="w-10 h-10 mx-auto" />
            <p className="text-sm text-gray-700 mt-2">Cruelty-free</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

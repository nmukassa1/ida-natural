import React from 'react';

const ProductFeatures = ({ features }) => {
  return (
    <>
      {/* Promo Code */}
      <div className="bg-[#FDF8F6] p-4 rounded-lg mb-6">
        <p className="text-pink-600 text-sm text-center">
          💌 Use code 'Beauty' for 10% OFF!
        </p>
      </div>

      {/* Features List */}
      <ul className="space-y-2 mb-6 text-sm">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductFeatures; 
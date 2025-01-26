import React from 'react';

const ProductHeader = ({ brand, title, price }) => {
  return (
    <div className="mb-6">
      <span className="text-sm text-gray-500 uppercase mb-1 block">{brand}</span>
      <h1 className="text-2xl lg:text-3xl mb-2">{title}</h1>
      <div>
        <p className="text-xl font-bold">{price}</p>
        {/* <p className="text-sm text-gray-500">Tax included</p> */}
      </div>
    </div>
  );
};

export default ProductHeader; 
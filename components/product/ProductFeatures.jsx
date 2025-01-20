import React from 'react';

const ProductFeatures = ({ features }) => {
  return (
    <>

      {/* Features List */}
      <ul className="space-y-2 text-md">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductFeatures; 
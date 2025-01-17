import React from 'react';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import ProductCard from '../common/ProductCard';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="flex flex-col">
//       <div className="aspect-square rounded-lg border border-gray-200 overflow-hidden bg-gray-50 mb-4">
//         <ImagePlaceholder />
//       </div>
//       <h3 className="text-sm font-medium mb-1">{product.name}</h3>
//       <p className="text-sm text-gray-500">${product.price}</p>
//     </div>
//   );
// };

const RecommendedProducts = () => {
  const products = [
    { id: 1, name: 'Pink Clay Cleansing Bar', price: '24.00' },
    { id: 2, name: 'Jasmine Body Oil', price: '48.00' },
    { id: 3, name: 'Prism Exfoliating Glow Serum', price: '54.00' },
    { id: 4, name: 'Rose Quartz Facial Roller', price: '40.00' },
  ];

  return (
    <div className="py-6 border-t border-gray-200">
      <h2 className="text-2xl font-medium mb-8">Recommended Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCard key={index} className="w-full"/>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts; 
import React from 'react';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import ProductCard from '../common/ProductCard';
import { products } from '@/lib/database/products';

const RecommendedProducts = () => {

  return (
    <div className="py-6 border-t border-gray-200">
      <h2 className="text-2xl font-medium mb-8">Recommended Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCard key={index} className="w-full" product={products[index]}/>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts; 
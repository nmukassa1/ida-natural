import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import React from 'react';
import ProductHeader from '@/components/product/ProductHeader';
import QuantitySelector from '@/components/product/QuantitySelector';
import ProductFeatures from '@/components/product/ProductFeatures';
import ProductIcons from '@/components/product/ProductIcons';
import ProductAccordion from '@/components/product/ProductAccordion';
import RecommendedProducts from '@/components/product/RecommendedProducts';

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row p-4 lg:px-8 gap-8">
        {/* Left Section: Product Images */}
        <div className="flex gap-4 w-full lg:w-1/2">
          {/* Small Thumbnails */}
          <div className="flex flex-col gap-4 w-20">
            {[1, 2, 3].map((_, index) => (
              <div 
                key={index} 
                className="w-20 h-20 rounded-lg border border-gray-200 overflow-hidden"
              >
                <ImagePlaceholder />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 rounded-lg border border-gray-200 overflow-hidden bg-purple-50">
            <ImagePlaceholder />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <ProductHeader 
            brand="HERBIVORE"
            title="Bakuchiol Retinol Alternative Serum"
            price="$55.00"
          />

          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex items-center gap-4 mb-4">
            <QuantitySelector />
            <button className="flex-1 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              ADD TO CART
            </button>
          </div>

          <ProductFeatures 
            features={[
              '100% Vegan & organic',
              'Cruelty Free & Parabens Free',
              'Strongly moisturizes, softens and smoothens'
            ]}
          />

          <ProductIcons 
            icons={[
              { name: 'Recyclable' },
              { name: 'Gluten-free' },
              { name: 'Vegan' },
              { name: 'Cruelty free' }
            ]}
          />

          <ProductAccordion 
            sections={[
              'Description',
              'How to use',
              'Ingredients',
              'Delivery and return policy'
            ]}
          />
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="px-4 lg:px-8">
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default page;

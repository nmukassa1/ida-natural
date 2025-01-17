import React from 'react';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';

const ProductIcons = ({ icons }) => {
  return (
    <div className="flex justify-between items-center max-w-xs">
      {icons.map((icon, index) => (
        <div key={index} className="text-center">
          <div className="w-8 h-8 mx-auto mb-1">
            <ImagePlaceholder />
          </div>
          <p className="text-xs">{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductIcons; 
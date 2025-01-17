"use client"
import React, { useState } from 'react';

const ProductAccordion = ({ sections }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="mt-8">
      {sections.map((title, index) => (
        <div key={index} className="border-t border-gray-200">
          <div className="h-14">
            <button 
              className="flex justify-between items-center w-full h-full text-left"
              onClick={() => toggleSection(index)}
            >
              <span className="text-sm font-medium">{title}</span>
              <span className="text-xl">
                {openSection === index ? '−' : '+'}
              </span>
            </button>
          </div>
          {openSection === index && (
            <div className="text-sm text-gray-600 mb-4">
              {/* Content can be added here */}
              Content for {title}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductAccordion; 
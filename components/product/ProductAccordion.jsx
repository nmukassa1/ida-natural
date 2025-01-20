"use client"
import React, { useState } from 'react';

const ProductAccordion = ({ description, ingredients, howToUse }) => {
  const [openSection, setOpenSection] = useState(null);
  const sections = [
    { title: 'Description', content: description },
    { title: 'Ingredients', content: ingredients },
    { title: 'How to use', content: howToUse }
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="mt-8">
      {sections.map((section, index) => (
        <div key={index} className="border-t border-gray-200">
          <div className="h-14">
            <button 
              className="flex justify-between items-center w-full h-full text-left"
              onClick={() => toggleSection(index)}
            >
              <span className="text-md font-medium">{section.title}</span>
              <span className="text-xl">
                {openSection === index ? '−' : '+'}
              </span>
            </button>
          </div>
          {openSection === index && (
            <div className="text-md text-gray-600 mb-4">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductAccordion; 
"use client"
import React, { useState } from 'react';
import './ProductAccordion.css';

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
        <div key={index} className='py-6 border-b border-black'>
          {/* {index > 0 && <hr className='border-t border-black my-2' />} */}
          <div className="">
          {/* <div className="h-16 border-t border-gray-200"> */}
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

          <div className={`text-md text-gray-600 transition-all duration-300 ease-in-out  ${openSection === index ? 'max-h-screen opacity-100 translate-y-4 mb-4' : 'max-h-0 opacity-0 overflow-hidden translate-y-0'}`}>
            {section.content}
          </div>

        </div>
      ))}
    </div>
  );
};

export default ProductAccordion; 
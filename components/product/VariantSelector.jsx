"use client"
import { useProduct } from "@/lib/providers/ProductProvider";


export default function VariantSelector (){
    const {variants, selectedVariant, handleVariantSelection } = useProduct()
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {variants.map((variant, index) => (
          <button
            key={variant.id}
            className={`px-4 py-2 rounded-md border transition-colors duration-200 
              ${selectedVariant === variant.id ? 'bg-black text-white' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
            onClick={() => handleVariantSelection(variant.id)}
            type="button"
          >
            {variant.size}
          </button>
        ))}
      </div>
    );
  };


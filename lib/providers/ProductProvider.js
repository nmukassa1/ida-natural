"use client"
import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ product, children }) => {

    const {variants} = product;

    const [selectedVariant, setSelectedVariant] = useState(product.variants[0].id);

    function handleVariantSelection(variant){
        setSelectedVariant(variant)
    }
    
    return (
        <ProductContext.Provider value={{ product, variants,selectedVariant, handleVariantSelection }}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useCart must be used within a ProductProvider");
    }
    return context;
}
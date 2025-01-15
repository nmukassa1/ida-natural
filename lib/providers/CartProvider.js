"use client"
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const cart = [];
    const addItemToCart = (item) => {
        cart.push(item);
    };
    const removeItemFromCart = (id) => {
        cart = cart.filter((item) => item.id !== id);
    };

    const [toggleCart, setToggleCart] = useState(false);

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, toggleCart, setToggleCart }}>
        {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
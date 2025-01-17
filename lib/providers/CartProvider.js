"use client"
import CartItem from "@/components/Cart/CartItem";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeItemFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
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
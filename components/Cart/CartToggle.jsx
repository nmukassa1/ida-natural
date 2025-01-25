"use client"

import { useCart } from "@/lib/providers/CartProvider";
import { ShoppingBag } from "lucide-react";

function CartToggle() {
    const { setToggleCart } = useCart();
    return ( 
        <>
            <button className="" onClick={() => setToggleCart((prev) => !prev)}>
                <ShoppingBag />
            </button>
        </>
     );
}

export default CartToggle;
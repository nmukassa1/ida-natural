"use client"

import { useCart } from "@/lib/providers/CartProvider";

function CartToggle() {
    const { setToggleCart } = useCart();
    return ( 
        <>
            <button className="" onClick={() => setToggleCart((prev) => !prev)}>
                Cart
            </button>
        </>
     );
}

export default CartToggle;
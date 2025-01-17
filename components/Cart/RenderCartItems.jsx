import { useCart } from "@/lib/providers/CartProvider";
import CartItem from "./CartItem";
import { Fragment } from "react";

function RenderCartItems() {
    const { cart } = useCart();
    return ( 
        <div className="my-2 overflow-scroll">
            {cart.map((item, index) => (
               <Fragment key={index}>
                   <CartItem item={item} />
               </Fragment>
            ))}
        </div>
     );
}

export default RenderCartItems;
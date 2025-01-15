import CartItem from "./CartItem";

function RenderCartItems() {
    return ( 
        <div className="my-2 overflow-scroll">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
     );
}

export default RenderCartItems;
"use client"
import { useCart } from '@/lib/providers/CartProvider';
import Drawer from '@mui/material/Drawer';
import RenderCartItems from './RenderCartItems';
import CheckoutSection from './CheckoutSection';
import EmptyCart from './EmptyCart';

function CartDrawer() {
    const {toggleCart, setToggleCart, cart} = useCart();
    const numerOfItems = cart.length ? cart.reduce((acc, current) => acc + current.quantity, 0) : 0;

    return ( 
        <Drawer open={toggleCart} anchor="right">
            <div className='h-full w-[500px] py-4 px-6 flex flex-col'>
                <header className='flex justify-between'>
                    <h1>Your cart ({numerOfItems})</h1>
                    <button onClick={() => setToggleCart((prev) => !prev)}>Close</button>
                </header>
                {cart.length ? (
                    <>
                        <RenderCartItems />
                        <CheckoutSection />
                    </>
                ) : (
                    <EmptyCart />
                )}
            </div>
        </Drawer>
     );
}

export default CartDrawer;
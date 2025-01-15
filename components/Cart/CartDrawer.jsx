"use client"
import { useCart } from '@/lib/providers/CartProvider';
import Drawer from '@mui/material/Drawer';
import RenderCartItems from './RenderCartItems';
import CheckoutSection from './CheckoutSection';
import EmptyCart from './EmptyCart';

function CartDrawer() {
    const {toggleCart, setToggleCart} = useCart();

    return ( 
        <Drawer open={toggleCart} anchor="right">
            <div className='h-full w-[500px] py-4 px-6 flex flex-col'>
                <header className='flex justify-between'>
                    <h1>Your cart (3)</h1>
                    <button onClick={() => setToggleCart((prev) => !prev)}>Close</button>
                </header>
                <RenderCartItems />
                <CheckoutSection />
                {/* <EmptyCart /> */}
            </div>
        </Drawer>
     );
}

export default CartDrawer;
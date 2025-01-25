import { useCart } from "@/lib/providers/CartProvider";
import ImagePlaceholder from "../common/ImagePlaceholder";
import { Trash } from "lucide-react";

const CartItem = ({ item }) => {
  const {removeItemFromCart} = useCart()

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="h-[100px] w-[80px]">
        <ImagePlaceholder />  
      </div>
      <div className="flex-1 ml-4">
        <h3 className="text-lg">{item.name}</h3>
        <div className="flex items-center gap-4 mt-2">
          <div className="border border-gray-300 rounded-full w-[110px] py-2 flex justify-between">
            <button className="px-3 py-1 grow-1">-</button> 
            <input className="text-lg focus:outline-none w-[30px] text-center" type="number" value={item.quantity} readOnly/>
            <button className="px-3 py-1 grow-2">+</button>
          </div>
          <span className="text-lg ">£{(item.price * item.quantity).toFixed(2)}</span>
          <button className="text-gray-500 hover:text-red-500" onClick={() => removeItemFromCart(item.id)}><Trash /></button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

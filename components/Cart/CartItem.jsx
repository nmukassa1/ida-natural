import ImagePlaceholder from "../common/ImagePlaceholder";

const CartItem = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="h-[100px] w-[80px]">
        <ImagePlaceholder />  
      </div>
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-medium">Algae Peel-Off Mask</h3>
        <div className="flex items-center gap-4 mt-2">
          <div className="border-2 border-black rounded-full w-[110px] py-2 flex justify-between">
            <button className="px-3 py-1 grow-1">-</button> 
            <input className="text-lg focus:outline-none w-[30px] text-center" type="number" value={2} readOnly/>
            <button className="px-3 py-1 grow-2">+</button>
          </div>
          <button className="text-gray-500 hover:text-red-500">🗑️</button>
        </div>
      </div>
      <span className="text-lg font-semibold">$230.00</span>
    </div>
  );
};

export default CartItem;

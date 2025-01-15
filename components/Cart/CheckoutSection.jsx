
const CheckoutSection = () => {
  return (
    <div className="mt-auto p-4 border-t border-gray-300">
      <div className="flex items-center justify-between mb-4">
        <a href="#" className="text-sm underline text-black">Add order note</a>
        <span className="text-sm text-gray-500">Shipping & taxes calculated at checkout</span>
      </div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-lg font-medium">Subtotal</span>
        <span className="text-lg font-semibold">$285.00 USD</span>
      </div>
      <button className="w-full py-3 text-white bg-black rounded-full text-lg font-medium">
        CHECK OUT
      </button>
    </div>
  );
};

export default CheckoutSection;

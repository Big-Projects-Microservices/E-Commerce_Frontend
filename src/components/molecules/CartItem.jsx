import { useShoppingCartActions } from "@recoil/hooks/useShoppingCartActions";

export default function CartItem({ product }) {
  const { decreaseQuantity, increaseQuantity, deleteItem, updateQuantity } =
    useShoppingCartActions();
  return (
    <div className="flex items-center justify-between border-b py-4">
      <button
        className="text-red-500 text-xl px-2"
        onClick={() => deleteItem(product.id)}
      >
        ×
      </button>

      <div className="flex items-center gap-4 w-1/3">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <span className="font-medium">{product.name}</span>
      </div>

      <div className="w-1/6 text-center font-medium">${product.price}</div>

      <div className="w-1/6 flex items-center justify-center gap-2">
        <button
          className="w-[clamp(28px,5.5vw,28px)] h-[clamp(20px,5.5vw,10px)] 
         rounded-md border border-gray-300 bg-transparent 
         text-[#8b8b8b] text-[35px] flex items-center justify-center 
         transition duration-200 hover:border-gray-400"
          onClick={() => decreaseQuantity(product.id)}
        >
          -
        </button>
        <input
          className="w-[clamp(26px,9.2vw,66px)] h-[clamp(20px,5.5vw,20px)] 
         border border-gray-300 border-l-0 border-r-0 
         text-xl font-semibold leading-[26px] text-center 
         outline-none"
          type="text"
          min="1"
          value={product.quantity}
          onChange={(e) => updateQuantity(product.id, Number(e.target.value))}
        />
        <button
          className="w-[clamp(28px,5.5vw,28px)] h-[clamp(20px,5.5vw,10px)]   
         rounded-md border border-gray-300 bg-transparent 
         text-[#8b8b8b] text-[25px] flex items-center justify-center 
         transition duration-200 hover:border-gray-400"
          onClick={() => increaseQuantity(product.id)}
        >
          +
        </button>
      </div>
      <div className="w-1/6 text-center font-medium">
        ${product.price * product.quantity}
      </div>
    </div>
  );
}

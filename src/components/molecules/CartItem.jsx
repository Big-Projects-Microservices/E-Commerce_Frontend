export default function CartItem({ product }) {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <button className="text-red-500 text-xl px-2">×</button>

      <div className="flex items-center gap-4 w-1/3">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <span className="font-medium">{product.name}</span>
      </div>

      <div className="w-1/6 text-center font-medium">
        ${product.price * product.qty}
      </div>

      <div className="w-1/6 flex items-center justify-center gap-2">
        <button className="px-2 py-1 bg-gray-100 rounded">-</button>
        <span>{product.qty}</span>
        <button className="px-2 py-1 bg-gray-100 rounded">+</button>
      </div>

      <div className="w-1/6 text-center font-medium">${product.price}</div>
    </div>
  );
}

export default function PriceText({ current, discount }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-400 line-through text-sm">${current}</span>
      <span className="text-red-500 font-bold text-xl">${discount}</span>
    </div>
  );
}

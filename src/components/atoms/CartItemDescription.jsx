export default function CartItemDescription() {
  const menuTems = [
    { id: 1, label: "PRODUCT" },
    { id: 2, label: "PRICE" },
    { id: 3, label: "QTY" },
    { id: 4, label: "UNIT PRICE" },
  ];
  return (
    <div className="flex justify-between text-sm text-gray-500 border-b pb-2 mt-10">
      {menuTems.map((menuItem) => (
        <span key={menuItem.id} className="w-1/6 text-center">
          {menuItem.label}
        </span>
      ))}
    </div>
  );
}

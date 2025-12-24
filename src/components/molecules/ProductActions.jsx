import { useState, useEffect } from "react";
import { ColorPicker } from "@molecules";
import { useCart } from "../../hooks/useCart";

const DEFAULT_COLORS = [{value: "#000000"}];
const DEFAULT_SIZES = ["One Size"];

export default function ProductActions({ product }) {
  const { addToCart } = useCart();

  let finalColors = DEFAULT_COLORS;

  if (product && product.color) {
    if (Array.isArray(product.color)) {
      finalColors = product.color.map((c) =>
        typeof c === "string" ? { value: c } : c,
      );
    } else if (typeof product.color === "string") {
      finalColors = [{ value: product.color }];
    }
  }

  let finalSizes = DEFAULT_SIZES;

  if (product && product.size) {
    if (Array.isArray(product.size)) {
      finalSizes = product.size;
    } else if (typeof product.size === "string") {
      finalSizes = [product.size];
    }
  }

  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(finalColors[0]?.value);
  const [selectedSize, setSelectedSize] = useState(finalSizes[0]);

  useEffect(() => {
    if (product) {
      setSelectedColor(finalColors[0]?.value);
      setSelectedSize(finalSizes[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product, qty, selectedColor, selectedSize);
  };

  if (!product) {
    return null;
  }

  const availabilityText = product.availability || "Not in Stock";
  const isInStock = availabilityText.toLowerCase().includes("in stock");

  return (
    <div className="space-y-6 mt-6">
      <div className="grid grid-cols-[120px_1fr] gap-y-2 text-sm text-gray-700">
        <span className="font-bold">Availability:</span>
        <span
          className={`font-medium ${isInStock ? "text-green-600" : "text-red-800"}`}
        >
          {availabilityText}
        </span>

        <span className="font-bold">Category:</span>
        <span>{product.category || "Accessories"}</span>

        <span className="font-bold">Shipping:</span>
        <span>Free</span>
      </div>

      <div className="h-px bg-gray-200 my-4"></div>

      {finalColors.length > 0 && (
        <div className="flex items-center gap-4">
          <span className="font-bold text-sm min-w-[60px]">Select Color:</span>
          <ColorPicker
            colors={finalColors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />
        </div>
      )}

      <div className="flex items-center gap-4">
        <span className="font-bold text-sm min-w-[60px]">Size:</span>
        <div className="relative">
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="appearance-none border border-gray-300 rounded px-4 py-2 pr-8 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white cursor-pointer"
          >
            {finalSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-200 my-4"></div>

      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 pb-8">
        <div className="flex items-center bg-gray-100 rounded-lg border border-gray-200">
          <button
            className="w-10 h-10 flex items-center justify-center text-blue-600 hover:bg-gray-200 rounded-l-lg text-xl font-bold"
            onClick={() => setQty(Math.max(1, qty - 1))}
          >
            -
          </button>
          <span className="w-10 text-center text-sm font-semibold">{qty}</span>
          <button
            className="w-10 h-10 flex items-center justify-center text-blue-600 hover:bg-gray-200 rounded-r-lg text-xl font-bold"
            onClick={() => setQty(qty + 1)}
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex-1 bg-blue-50 text-blue-600 border border-blue-100 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition font-bold flex justify-center items-center gap-2"
        >
          <span>🛒</span> Add To Cart
        </button>

        <button className="p-3 bg-blue-50 text-blue-600 border border-blue-100 rounded-lg hover:bg-blue-100">
          ❤
        </button>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-[#3b5998] text-white py-2.5 rounded shadow-sm text-sm font-semibold">
          Facebook
        </button>
        <button className="flex-1 bg-[#1DA1F2] text-white py-2.5 rounded shadow-sm text-sm font-semibold">
          Twitter
        </button>
      </div>
    </div>
  );
}
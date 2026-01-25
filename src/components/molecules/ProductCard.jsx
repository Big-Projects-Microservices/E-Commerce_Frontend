import { Button, PriceText, ProductName, StarRaitung } from "@atoms";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function ProductCard({ product, isHot = true }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="
          group relative border border-gray-200 rounded-md text-center
          w-[298px] m-2.5 overflow-hidden
          shadow-md
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-xl hover:border-gray-300
          hover:rotate-[0.5deg]
        "
      >
        {isHot && (
          <span className="absolute top-0 left-0 bg-red-100 text-red-600 py-1.5 text-xs font-bold rounded-tl-md rounded-br-md z-10 w-[64px] h-[33px]">
            HOT
          </span>
        )}

        <div className="w-full h-[200px] bg-gray-50 flex items-center justify-center p-4 relative">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="
                w-full max-h-full object-contain
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
          ) : (
            "No Image"
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              initialText="Add to Basket"
              clickedText="Added to Basket"
              onClick={handleAddToCart}
              className="
                w-auto
                opacity-0 invisible
                translate-y-2
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-300 ease-out
              "
            />
          </div>
        </div>

        <div className="p-3">
          <ProductName name={product.name} />
          <StarRaitung rating={product.rating} />
          <PriceText
            current={product.price}
            discount={product.discount_price}
          />
        </div>
      </div>
    </Link>
  );
}

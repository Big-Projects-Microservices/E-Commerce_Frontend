import { useSetRecoilState } from "recoil";
import { shoppingCart } from "../../recoil/atoms/shoppingCart";
import { Button, PriceText, ProductName, StarRaitung } from "../atoms";

export default function ProductCard({ product, isHot = false }) {
  const setCart = useSetRecoilState(shoppingCart);

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === itemToAdd.id,
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: newCart[existingItemIndex].quantity + 1,
        };
        return newCart;
      }
      return [...prevCart, itemToAdd];
    });
  };

  return (
    <div className="relative border border-gray-200 rounded-md text-center m-2.5 shadow-md overflow-hidden">
      {isHot && (
        <span className="absolute top-0 left-0 bg-red-100 text-red-600 px-2.5 py-1.5 text-xs font-bold rounded-tl-md rounded-br-md z-10">
          HOT
        </span>
      )}

      <div className="w-[301px] h-[200px] bg-gray-50 flex items-center justify-center ">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-w-full object-contain"
          />
        ) : (
          "No Image"
        )}
      </div>
      <Button
        initialText="Add to Basket"
        clickedText="Added to Basket"
        onClick={handleAddToCart}
      />
      <div className="p-3">
        <ProductName name={product.name} />
        <StarRaitung rating={product.rating} />
        <PriceText current={product.price} discount={product.discount_price} />
        <p className="text-sm text-gray-500 mt-1">{product.size}</p>
      </div>
    </div>
  );
}

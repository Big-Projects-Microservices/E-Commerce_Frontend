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
  
    <div className="group relative border border-gray-200 rounded-md text-center w-[298px] m-2.5 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      
      {isHot && (
      
        <span className="absolute top-0 left-0 bg-red-100 text-red-600 px-2.5 py-1.5 text-xs font-bold rounded-tl-md rounded-br-md z-10">
          HOT
        </span>
      )}

     
      <div className="w-full h-[200px] bg-gray-50 flex items-center justify-center p-4 relative">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
  
            className="w-full max-h-full object-contain"
          />
        ) : (
          "No Image"
        )}

    
        <div className="absolute inset-0 flex items-center justify-center">
            <Button
                initialText="Add to Basket"
                clickedText="Added to Basket"
                onClick={handleAddToCart}
                className="w-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
            />
        </div>
      </div>
      
      <div className="p-3">
        <ProductName name={product.name} />
        <StarRaitung rating={product.rating} />
        <PriceText current={product.price} discount={product.discount_price} />
        <p className="text-sm text-gray-500 mt-1">{product.size}</p>
      </div>
    </div>
  );
}
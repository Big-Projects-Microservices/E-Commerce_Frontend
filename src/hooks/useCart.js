import { useSetRecoilState } from "recoil";
import { shoppingCart } from "@recoil/atoms/shoppingCart";

export function useCart() {
  const setCart = useSetRecoilState(shoppingCart);

  const addToCart = (product, quantity = 1, color = null, size = null) => {
    const itemToAdd = {
      id: product.id,
      name: product.name || product.title,
      price: product.price,
      image: product.image || product.imageUrl,
      quantity,
      color,
      size,
    };

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === itemToAdd.id
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: newCart[existingItemIndex].quantity + quantity,
        };
        return newCart;
      }
      return [...prevCart, itemToAdd];
    });
  };

  return { addToCart };
}
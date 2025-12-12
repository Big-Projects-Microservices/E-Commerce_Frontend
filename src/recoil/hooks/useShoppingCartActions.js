import { useSetRecoilState } from "recoil";
import { shoppingCart } from "../atoms/shoppingCart";

export function useShoppingCartActions() {
  const setCart = useSetRecoilState(shoppingCart);

  const increaseQuantity = (itemId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === itemId) {
            if (item.quantity - 1 <= 0) {
              return null;
            }
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const deleteItem = (itemId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== itemId);
    });
  };
  const updateQuantity = (itemId, newQuantity) => {
    const quantity = Math.max(0, Number(newQuantity));

    setCart((prevCart) => {
      if (quantity === 0) {
        return prevCart.filter((item) => item.id !== itemId);
      }

      return prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: quantity } : item,
      );
    });
  };
  const clearCart = () => {
    setCart([]);
  };

  return {
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    clearCart,
    updateQuantity,
  };
}

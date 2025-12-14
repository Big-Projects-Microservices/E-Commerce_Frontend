import { selector } from "recoil";
import { shoppingCart } from "../atoms/shoppingCart";

export const totalPrice = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const cart = get(shoppingCart);

    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
});

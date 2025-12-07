import { selector } from "recoil";
import { shoppingCart } from "../atoms/shoppingCart";

export const products = selector({
  key: "products",
  get: ({ get }) => {
    const cart = get(shoppingCart);
    return cart;
  },
});

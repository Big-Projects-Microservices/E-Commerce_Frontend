import { selectorFamily } from "recoil";
import { shoppingCart } from "../atoms/shoppingCart";

export const productById = selectorFamily({
  key: "productById",
  get:
    (id) =>
    ({ get }) => {
      const cart = get(shoppingCart);
      return cart.find((item) => item.id === id);
    },
});

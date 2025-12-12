import { selector } from "recoil";
import { shoppingCart } from "../atoms/shoppingCart";

export const totalCount = selector({
  key: "totalCount",
  get: ({ get }) => {
    const cart = get(shoppingCart);

    return cart.reduce(
      (total, item) => total + item.quantity,
      0, 
    );
  },
});

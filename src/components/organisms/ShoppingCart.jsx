import React from "react";
import CartItem from "../molecules/CartItem";
import OrderForm from "../molecules/OrderForm";
import ReedemVoucher from "../molecules/ReedemVoucher";
import CartItemDesc from "../atoms/CartItemDesc";
import { Box } from "@mui/material";
const demoProducts = [
  {
    id: 1,
    name: "Nike Airmax 270 react",
    price: 499,
    qty: 2,
    image:
      "https://static.nike.com/a/images/t_prod/w_640,c_limit,f_auto/01a76c06-4249-48d2-8fa5-1a43f610d1b0/air-max-270-react-release-date.jpg",
  },
  {
    id: 2,
    name: "Nike Airmax 270 react",
    price: 499,
    qty: 2,
    image:
      "https://static.nike.com/a/images/t_prod/w_640,c_limit,f_auto/f969ad26-c324-4972-a1d3-d57cc49879b7/air-max-270-react-eng-black-cd0113-001-release-date.jpg",
  },
];
export default function ShoppingCart() {
  return (
    <div className="max-w-4xl mx-auto p-4 justify-between ">
      <CartItemDesc />
      {demoProducts.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "100%",
          mt: 20,
        }}
      >
        <ReedemVoucher />
        <OrderForm />
      </Box>
    </div>
  );
}

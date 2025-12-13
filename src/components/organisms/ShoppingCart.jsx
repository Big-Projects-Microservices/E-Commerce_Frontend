import { CartItem } from "@molecules";
import OrderForm from "./OrderForm";
import { Box } from "@mui/material";
import { CartItemDescription, Paragraph } from "@atoms";
import ReedemVoucher from "./ReedemVoucher";
import { shoppingCart } from "@recoil/atoms/shoppingCart";
import { useRecoilValue } from "recoil";
export default function ShoppingCart() {
  const cartItem = useRecoilValue(shoppingCart);

  return (
    <div className="max-w-4xl mx-auto p-4 justify-between ">
      <CartItemDescription />
      {cartItem.length !== 0 ? (
        cartItem.map((item) => <CartItem key={item.id} product={item} />)
      ) : (
        <Paragraph
          className="text-center mt-5 text-lg"
          text="Your cart is empty"
        />
      )}
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

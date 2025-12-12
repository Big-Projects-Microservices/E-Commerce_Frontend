import { Badge, Box } from "@mui/material";
import shoppingCart from "../../assets/header/shopping-cart.svg";
import Icon from "./Icon";
import { totalCount } from "../../recoil/selectors/totalCount";
import { useRecoilValue } from "recoil";

export default function ShoppingCart() {
  const totalBadgeCount = useRecoilValue(totalCount);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Badge
        badgeContent={totalBadgeCount}
        color="error"
        sx={{
          "& .MuiBadge-badge": {
            right: -22,
            top: -8,
            backgroundColor: "#073A69",
            color: "white",
            fontWeight: "bold",
            fontSize: "8px",
            borderRadius: "50%",
            width: "16px",
            height: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            minWidth: "unset",
          },
        }}
      />

      <Icon src={shoppingCart} />
    </Box>
  );
}

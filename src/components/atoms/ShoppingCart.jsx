import { Badge, Box } from "@mui/material";
import shoppingCart from "../../assets/header/shopping-cart.svg";
import Icon from "./Icon";

export default function ShoppingCart() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Badge
        badgeContent={2}
        color="error"
        sx={{
          "& .MuiBadge-badge": {
            right: -22, // Немного отодвигаем значок в правый верхний угол
            top: -5, // Отодвигаем от верхнего края
            backgroundColor: "#073A69",
            color: "white",
            fontWeight: "bold",
            fontSize: "10px", // Немного увеличиваем шрифт
            width: "auto", // Устанавливаем ширину значка
            height: "10px", // Устанавливаем высоту значка
            borderRadius: "50%", // Оставляем круглый значок
            display: "flex", // Центрируем контент внутри значка
            justifyContent: "center", // Выравниваем по центру
            alignItems: "center", // Выравниваем по центру
          },
        }}
      />
      <Icon src={shoppingCart} />
    </Box>
  );
}

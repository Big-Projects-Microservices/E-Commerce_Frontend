import { Box, Typography } from "@mui/material";
import "swiper/css";

const products = [];

export default function Banners() {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        opacity: 0,
        bottom: "-50px",
        gap: 2,
      }}
    >
      {products.map((product, index) => (
        <Box
          key={index}
          sx={{
            borderRadius: 2,
            border: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              textTransform: "uppercase",
              mb: 1,
              height: 40,
            }}
          >
            {product.title.length > 30
              ? product.title.slice(0, 27) + "..."
              : product.title}
          </Typography>

          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: 150, objectFit: "contain" }}
          />

          <Box sx={{ mt: 1 }}>
            <Typography
              component="s"
              sx={{ fontSize: 14, color: "#999", mr: 1 }}
            >
              ${product.oldPrice}
            </Typography>
            <Typography component="span" sx={{ color: "red", fontSize: 14 }}>
              {product.discount} Off
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "#2A4BA0",
              mt: 1,
            }}
          >
            ${product.price}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

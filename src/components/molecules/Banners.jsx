import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const products = [
  {
    title: "FS - QUILTED MAXI CROSS BAG",
    price: "299,43",
    oldPrice: "534,33",
    discount: "24%",
    image: "https://via.placeholder.com/200x150?text=Bag",
  },
  {
    title: "FS - Nike Air Max 270 React",
    price: "299,43",
    oldPrice: "534,33",
    discount: "24%",
    image: "https://via.placeholder.com/200x150?text=Nike1",
  },
  {
    title: "FS - Nike Air Max 270 React",
    price: "299,43",
    oldPrice: "534,33",
    discount: "24%",
    image: "https://via.placeholder.com/200x150?text=Nike2",
  },
];

export default function Banners() {
  return (
    <Swiper spaceBetween={20} slidesPerView={3}>
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              marginTop: "-180px",
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

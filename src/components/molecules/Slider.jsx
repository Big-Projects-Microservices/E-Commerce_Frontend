import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import slide1 from "../../assets/offer-banner/slide-1.svg";

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      spaceBetween={20}
      slidesPerView={1}
      style={{ marginTop: 20 }}
    >
      <SwiperSlide>
        <img src={slide1} alt="Слайд" style={imageStyle} />
        <div style={textOverlay}>
          <h2>Super Flash Sale 50% Off</h2>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={slide1} alt="Слайд" />
      </SwiperSlide>
    </Swiper>
  );
}

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const textOverlay = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "#fff",
  textAlign: "center",
  borderRadius: "12px",
};

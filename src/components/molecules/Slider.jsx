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
        <img src={slide1} alt="Slide" style={imageStyle} />
        <div style={textOverlay}>
          <h2 className="font-custom max-w-full w-full block z-50">
            <b>Super Flash Sale 50% Off</b>
          </h2>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={slide1} alt="Slide" />
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
  fontSize: "65px",
  maxWidth: "573px",
  top: "0",
  left: "0",
  color: "#fff",
  padding: "258px 0px 0px 100px",
};

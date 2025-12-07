import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import slide1 from "../../assets/offer-banner/slide-1.svg";
import Paragraph from "../atoms/Paragraph";
import BannerImage from "../atoms/BannerImage";

export default function Slider() {
  const textOverlay = {
    position: "absolute",
    fontSize: "65px",
    maxWidth: "573px",
    top: "0",
    left: "0",
    color: "#fff",
    padding: "258px 0px 0px 100px",
  };

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      spaceBetween={20}
      slidesPerView={1}
      style={{ marginTop: 20, position: "relative" }}
    >
      <SwiperSlide>
        <BannerImage src={slide1} alt="Slider" />
        <div style={textOverlay}>
          <b>
            <Paragraph
              text="Super Flash Sale
50% Off"
            />
          </b>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <BannerImage src={slide1} alt="Slider" />
      </SwiperSlide>
    </Swiper>
  );
}

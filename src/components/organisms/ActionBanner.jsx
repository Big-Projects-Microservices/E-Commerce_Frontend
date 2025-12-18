import { TextBlock } from "@molecules";
import shoeImage from "../../assets/action-banner/shoe-image.svg";
import { BannerImage } from "@atoms";

export default function ActionBanner(className) {
  return (
    <div
      className={` p-3 flex items-center justify-between bg-[#6DA9CC] ${className} px-[clamp(1rem,3vw,7rem)]`}
    >
      <TextBlock />
      <BannerImage
        src={shoeImage}
        alt="actions-banner"
        className="w-[clamp(300px,25vw,664px)] h-[clamp(200px,25vh,500px)]"
      />
    </div>
  );
}

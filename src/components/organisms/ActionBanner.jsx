import TextBlock from "../molecules/TextBlock";
import shoeImage from "../../assets/action-banner/shoe-image.svg";
import BannerImage from "../atoms/BannerImage";

export default function ActionBanner() {
  return (
    <div className="flex items-center justify-between px-28  bg-[#6DA9CC]">
      <TextBlock />
      <BannerImage
        src={shoeImage}
        alt="actions-banner"
        className="w-[694px] h-[598px]"
      />
    </div>
  );
}

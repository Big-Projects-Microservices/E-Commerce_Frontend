import { Banners, LatestNews } from "@molecules";
import { Slider, SearchBar, BestSellerBlock, ActionBanner } from "@organisms";

export default function Home() {
  return (
    <>
      <Banners />
      <Slider />
      <BestSellerBlock />
      <ActionBanner />
      {/* <InfoFeatues /> */}
      <LatestNews />
      <SearchBar />
    </>
  );
}

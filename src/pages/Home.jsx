import { Banners, LatestNews } from "@molecules";
import { Slider, SearchBar, BestSellerBlock, ActionBanner, InfoFeatures } from "@organisms";

export default function Home() {
  return (
    <>
      <Banners />
      <Slider />
      <BestSellerBlock />
      <ActionBanner />
      <InfoFeatures />
      <LatestNews />
      <SearchBar />
    </>
  );
}

import Banners from "../components/molecules/Banners";
import Slider from "../components/organisms/Slider";
import ActionBanner from "../components/organisms/ActionBanner";
import InfoFeatues from "../components/organisms/InfoFeatures";
import SearchBar from "../components/organisms/SearchBar";
export default function Home() {
  return (
    <>
      <Slider />
      <Banners />
      <ActionBanner />
      <InfoFeatues />
      <SearchBar />
    </>
  );
}

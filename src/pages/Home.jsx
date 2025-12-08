import Banners from "../components/molecules/Banners";
import Slider from "../components/organisms/Slider";
import ActionBanner from "../components/organisms/ActionBanner";
import InfoFeatues from "../components/organisms/InfoFeatures";
import SearchBar from "../components/organisms/SearchBar";
import LatestNews from "../components/molecules/LatestNews";
import BestSellerBlock from "../components/organisms/BestSellerBlock";
import Footer from "../components/templates/Footer";
export default function Home() {
  return (
    <>
      <Banners />
      <Slider />
      <BestSellerBlock />
      <ActionBanner />
      <InfoFeatues />
      <LatestNews />
      <SearchBar />
      <Footer />
    </>
  );
}

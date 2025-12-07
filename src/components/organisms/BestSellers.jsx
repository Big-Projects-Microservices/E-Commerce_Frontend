import { SectionTitle } from "../atoms";
import { TabBar } from "../molecules";
import ProductGrid from "./ProductGrid";

export default function BestSellers({ products, activeTab, categories }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px" }}>
      <SectionTitle>BEST SELLER</SectionTitle>
      <TabBar categories={categories} activeCategory={activeTab} />
      <ProductGrid products={products} />
    </div>
  );
}

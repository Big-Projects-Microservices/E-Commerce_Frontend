import { SectionTitle } from "../atoms";
import { TabBar } from "../molecules";
import ProductGrid from "./ProductGrid";

export default function BestSellers({ products, activeTab, categories }) {
  let uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  uniqueCategories.unshift("All");
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px" }}>
      <SectionTitle>best seller</SectionTitle>
      {uniqueCategories.map((category) => {
        return <h3 key={category}>{category}</h3>;
      })}
      <TabBar categories={categories} activeCategory={activeTab} />
      <ProductGrid products={products} />
    </div>
  );
}

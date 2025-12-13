import { SectionTitle } from "@atoms";
import { TabBar } from "@molecules";
import ProductGrid from "./ProductGrid";

export default function BestSellers({
  products,
  activeTab,
  categories,
  setActiveTab,
}) {
  let uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  uniqueCategories.unshift("All");
  const filteredProducts = products.filter((product) => {
    if (activeTab === "All") {
      return true;
    }
    return product.category === activeTab;
  });

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-5 sm:px-10">
      <SectionTitle>best seller</SectionTitle>
      <div className="justify-center flex gap-4">
        {uniqueCategories.map((category) => {
          const isActive = category === activeTab;
          return (
            <h3
              key={category}
              onClick={() => setActiveTab(category)}
              className={`
                text-xl font-semibold transition duration-500 cursor-pointer
                ${
                  isActive
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }
              `}
            >
              {category}
            </h3>
          );
        })}
      </div>

      <TabBar
        categories={categories}
        activeCategory={activeTab}
        onCategoryChange={setActiveTab}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

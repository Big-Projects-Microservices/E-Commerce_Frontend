import { SectionTitle } from "@atoms";
import { TabBar } from "@molecules";
import ProductGrid from "./ProductGrid";
import { SkeletonLoader } from "@molecules";
import { useTranslation } from 'react-i18next';

export default function BestSellers({
  products = [],
  activeTab,
  categories,
  setActiveTab,
}) {
  const { t } = useTranslation();

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

  if (!products.length) {
    return <SkeletonLoader />;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-5 sm:px-10">
      <SectionTitle>{t('titles.bestSeller')}</SectionTitle>
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
              {category === "All" ? t('nav.items') : category}
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

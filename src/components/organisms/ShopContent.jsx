import { useParams } from "react-router-dom";
import { ProductSidebar, ProductListGrid } from "@organisms";
import { useShopProducts } from "../../hooks/useShopProducts";

export default function ShopContent({ category = null }) {
  const { lang } = useParams();
  const {
    products,
    loading,
    totalItems,
    handleFilterChange,
    handleSortChange,
    handleShowChange,
  } = useShopProducts(lang, category);

  if (loading) {
    return (
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10 py-20 text-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-5 sm:px-10 py-10">
      <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
        <div className="lg:w-1/4">
          <ProductSidebar onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:w-3/4">
          <ProductListGrid
            products={products}
            totalItems={totalItems}
            onSortChange={handleSortChange}
            onShowChange={handleShowChange}
          />
        </div>
      </div>
    </div>
  );
}

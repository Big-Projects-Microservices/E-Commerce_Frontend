import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { getAllProducts } from "@services/productsServices"; 
import { ProductTabs, ProductGrid, ProductInfoSection } from "@organisms";
import { SidebarBestSeller } from "@molecules";
import { SectionTitle } from "@atoms";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const allProducts = await getAllProducts();
        const foundProduct = allProducts.find((item) => item.id == id);

        setProduct(foundProduct);

        const others = allProducts.filter((item) => item.id != id).slice(0, 4);
        setRelatedProducts(others);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      }
    };

    loadData();
  }, [id]);

  if (product == null) {
    return <div className="text-center py-20">Product not found 😞</div>;
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ProductInfoSection product={product} />
            <ProductTabs
              description={product.description}
              reviewsCount={product.reviewsCount || 0}
            />
          </div>

          <div className="lg:col-span-1">
            <SidebarBestSeller />
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-8">
            <SectionTitle>RELATED PRODUCTS</SectionTitle>
          </div>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
}

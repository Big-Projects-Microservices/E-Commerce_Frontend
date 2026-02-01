import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAllProducts } from "@services/productsServices";
import { ProductTabs, ProductGrid, ProductInfoSection } from "@organisms";
import { SidebarBestSeller, BreadCrumbs } from "@molecules";
import { SectionTitle } from "@atoms";

export default function ProductPage() {
  const { id, lang } = useParams();
  const { t } = useTranslation();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const allProducts = await getAllProducts();
        const foundProduct = allProducts.find(
          (item) => String(item.id) === String(id),
        );

        if (foundProduct) {
          setProduct(foundProduct);
          const others = allProducts
            .filter((item) => String(item.id) !== String(id))
            .slice(0, 4);
          setRelatedProducts(others);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error loading:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id, lang]);

  if (loading)
    return <div className="text-center py-20">{t("common.loading")}...</div>;
  if (!product)
    return <div className="text-center py-20">{t("common.not_found")} 😞</div>;

  const breadcrumbItems = [
    { name: t("nav.home"), path: `/${lang}` },
    { name: t("nav.hotDeal"), path: `/${lang}/hot-deal` },
    { name: product.name || product.title, path: null },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10 py-10">
        <div className="mb-6">
          <BreadCrumbs items={breadcrumbItems} />
        </div>

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
            <SectionTitle>{t("products.related")}</SectionTitle>
          </div>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
}

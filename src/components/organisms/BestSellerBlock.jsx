import BestSellers from "./BestSellers";
import { getAllProducts } from "../../services/productsServices";
import { useEffect, useState } from "react";
export default function BestSellerBlock() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.log(`Error per fetching from server:${error}`));
  }, []);

  return (
    <BestSellers
      products={products}
      activeTab={activeCategory}
      setActiveTab={setActiveCategory}
      categories={categories}
    />
  );
}

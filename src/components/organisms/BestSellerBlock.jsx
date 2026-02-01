import BestSellers from "./BestSellers";
import { getAllProducts } from "@services/productsServices";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
export default function BestSellerBlock() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const { lang } = useParams();
  const categories = ["All", ...new Set(products.map((p) => p.category))];
useEffect(() => {
  const fetchProducts = async () => {
    const data = await getAllProducts(lang).catch((error) => console.log(`Error per fetching from server:${error}`));;
    setProducts(data);
  };
  fetchProducts();
}, [lang]);
  return (
    <BestSellers
      products={products}
      activeTab={activeCategory}
      setActiveTab={setActiveCategory}
      categories={categories}
    />
  );
}

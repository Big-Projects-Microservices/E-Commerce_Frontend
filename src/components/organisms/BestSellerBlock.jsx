import BestSellers from "./BestSellers";
import { getAllProducts } from "../../services/productsServices";
import { useEffect, useState } from "react";
export default function BestSellerBlock() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.log(`Error:${error}`));
  }, []);

  return <BestSellers products={products} />;
}

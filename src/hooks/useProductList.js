import { useState, useEffect } from "react";

export function useProductList(products = [], itemsPerPage = 9) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [products]);

  const countPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (_, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    page,
    countPages,
    paginatedProducts,
    handlePageChange,
  };
}

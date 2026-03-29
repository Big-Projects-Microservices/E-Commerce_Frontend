import { useCallback, useEffect, useMemo, useState } from "react";
import { getAllProducts } from "@services/productsServices";

export function useShopProducts(lang, category = null) {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: null,
    color: null,
    brands: [],
  });
  const [sortBy, setSortBy] = useState("name");
  const [showCount, setShowCount] = useState(12);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getAllProducts(lang);
        setProducts(data || []);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [lang]);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  const handleSortChange = useCallback((newSortCriterion) => {
    setSortBy(newSortCriterion);
  }, []);

  const handleShowChange = useCallback((count) => {
    setShowCount(count);
  }, []);

  const filteredProducts = useMemo(() => {
    let processed = [...products];

    if (category) {
      processed = processed.filter((p) => {
        const productCategory = (p.category || "").toLowerCase();
        return productCategory === category.toLowerCase();
      });
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      processed = processed.filter((p) => {
        const price = p.price || 0;
        return price >= min && price <= max;
      });
    }

    if (filters.color) {
      processed = processed.filter((p) => {
        if (!p.color) return false;
        const productColor = p.color.toLowerCase();
        const filterColor = filters.color.toLowerCase();
        return productColor === filterColor;
      });
    }

    if (filters.brands && filters.brands.length > 0) {
      processed = processed.filter((p) => {
        return filters.brands.includes(p.brand);
      });
    }

    switch (sortBy) {
      case "price_asc":
      case "price":
        processed.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price_desc":
        processed.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "date":
        processed.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "name":
      default:
        processed.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    }

    return showCount > 0 ? processed.slice(0, showCount) : processed;
  }, [products, filters, sortBy, showCount, category]);

  return {
    products: filteredProducts,
    loading,
    totalItems: filteredProducts.length,
    handleFilterChange,
    handleSortChange,
    handleShowChange,
  };
}

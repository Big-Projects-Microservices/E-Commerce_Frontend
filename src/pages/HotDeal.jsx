import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Container } from "@mui/material";
import { ProductSidebar, ProductListGrid } from "@organisms";
import { getAllProducts } from "@services/productsServices";

export default function HotDeal() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: null,
    color: null,
    brands: [],
  });
  const [sortBy, setSortBy] = useState("name");
  const [showCount, setShowCount] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data || []);
      } catch {
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = useCallback((newFilters) => {
    console.log("Новые фильтры:", newFilters);
    setFilters(newFilters);
  }, []);

  const handleSortChange = useCallback((newSortCriterion) => {
    setSortBy(newSortCriterion);
  }, []);

  const finalProductsToDisplay = useMemo(() => {
    let processed = [...products];

    console.log("Начальное количество:", processed.length);

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      processed = processed.filter((p) => {
        const price = p.price || 0;
        return price >= min && price <= max;
      });
      console.log("После фильтра цены:", processed.length);
    }

    if (filters.color) {
      processed = processed.filter((p) => {
        if (!p.color) return false;
        const productColor = p.color.toLowerCase();
        const filterColor = filters.color.toLowerCase();
        console.log(productColor, filterColor);
        return productColor === filterColor;
      });
      console.log(
        "После фильтра цвета:",
        processed.length,
        "Искали цвет:",
        filters.color,
      );
    }

    if (filters.brands && filters.brands.length > 0) {
      processed = processed.filter((p) => {
        return filters.brands.includes(p.brand);
      });
      console.log("После фильтра брендов:", processed.length);
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

    console.log(
      "Финальное количество:",
      showCount > 0 ? Math.min(processed.length, showCount) : processed.length,
    );

    return showCount > 0 ? processed.slice(0, showCount) : processed;
  }, [products, filters, sortBy, showCount]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: "flex", minHeight: "80vh", gap: 4 }}>
        <ProductSidebar onFilterChange={handleFilterChange} />

        <ProductListGrid
          products={finalProductsToDisplay}
          totalItems={finalProductsToDisplay.length}
          onSortChange={handleSortChange}
          onShowChange={setShowCount}
        />
      </Box>
    </Container>
  );
}

import { Box, Grid, Pagination } from "@mui/material";
import { BreadCrumbs, ProductCard } from "@molecules";
import FilterBar from "./FilterBar";
import { useProductList } from "../../hooks/useProductList";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Hot Deal", path: "/hot-deal" },
];

export default function ProductListGrid({
  products = [],
  totalItems,
  onSortChange,
  onShowChange,
}) {
  const { page, countPages, paginatedProducts, handlePageChange } =
    useProductList(products, 9);

  return (
    <Box sx={{ flexGrow: 1, pt: 1 }}>
      <BreadCrumbs items={breadcrumbItems} />

      <FilterBar
        totalItems={totalItems || products.length}
        onSortChange={onSortChange}
        onShowChange={onShowChange}
      />

      <Grid
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "flex-start" }}
      >
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              width: "100%",
              minHeight: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="text-xl text-gray-500">No filter matches</p>
          </Box>
        )}
      </Grid>

      {countPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8, mb: 4 }}>
          <Pagination
            count={countPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
            size="large"
          />
        </Box>
      )}
    </Box>
  );
}

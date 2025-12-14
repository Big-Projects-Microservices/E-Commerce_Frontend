import { Box, Grid, Pagination } from "@mui/material";
import { BreadCrumbs, ProductCard, SkeletonLoader } from "@molecules";
import FilterBar from "./FilterBar";

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
  return (
    <Box sx={{ flexGrow: 1, pt: 1 }}>
      <BreadCrumbs items={breadcrumbItems} />
      <FilterBar
        totalItems={totalItems}
        onSortChange={onSortChange}
        onShowChange={onShowChange}
      />

      <Grid container spacing={4}>
        {products.length != 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <SkeletonLoader />
        )}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={5}
          defaultPage={1}
          color="primary"
          shape="rounded"
          products={products}
        />
      </Box>
    </Box>
  );
}

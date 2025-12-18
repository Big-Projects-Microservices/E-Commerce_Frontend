import { Box, Grid, Pagination } from "@mui/material";
import { BreadCrumbs, ProductCard } from "@molecules";
import { Paragraph } from "@atoms";
import FilterBar from "./FilterBar";
import { useState } from "react";

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
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <Box sx={{ flexGrow: 1, pt: 1 }}>
      <BreadCrumbs items={breadcrumbItems} />
      <FilterBar
        totalItems={totalItems}
        onSortChange={onSortChange}
        onShowChange={onShowChange}
      />

      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        container
        spacing={4}
      >
        {paginatedProducts.length ? (
          paginatedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Paragraph
            className="min-h-[100vh] overflow-auto text-[clamp(1rem,2.5vw,1.5rem)]"
            text="No filter matches"
          />
        )}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={itemsPerPage}
          defaultPage={1}
          color="primary"
          shape="rounded"
          products={products}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </Box>
  );
}

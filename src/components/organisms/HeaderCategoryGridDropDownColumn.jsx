import { Box, Grid } from "@mui/material";
import { HeaderCategoryDropDownColumn } from "@molecules";

const categoryData = [
  {
    title: "Category",
    items: ["Coporate Shoes", "Sneakers", "Sandals", "Sport Shoe", "Trainers"],
  },
  {
    title: "Category",
    items: ["Coporate Shoes", "Sneakers", "Sandals", "Sport Shoe", "Trainers"],
  },
  {
    title: "Category",
    items: ["HOT DEAL", "Sunglasses", "Belts", "Handbags", "Sneakers"],
  },
  {
    title: "Category",
    items: ["HOT DEAL", "Sunglasses", "Belts", "Handbags", "Sneakers"],
  },
  {
    title: "Category",
    items: ["Coporate Shoes", "Sneakers", "Sandals", "Sport Shoe", "Trainers"],
  },
];

export default function HeaderCategoryGridDropDownColumn() {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 }, bgcolor: "background.default" }}>
      <Grid
        container
        spacing={4} // Отступ между колонками
        justifyContent="space-between"
      >
        {categoryData.map((col, index) => (
          <Grid
            item
            xs={6} // На мобильных 2 колонки
            sm={4} // На планшетах 3 колонки
            md={2} // На десктопе 5-6 колонок
            key={index}
          >
            <HeaderCategoryDropDownColumn
              title={col.title}
              categories={col.items}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

import { Box, Grid } from "@mui/material";
import { HeaderCategoryDropDownColumn } from "@molecules";

const categoryData = [
  {
    title: "Category",
    items: ["Coporate Shoes", "Sneakers", "Sandals", "Sport Shoe", "Trainers"],
  },
  {
    items: ["HOT DEAL", "Sunglasses", "Belts", "Handbags", "Sneakers"],
  },
  {
    title: "Category",
    items: ["HOT DEAL", "Sunglasses", "Belts", "Handbags", "Sneakers"],
  },
];

export default function HeaderCategoryGridDropDownColumn() {
  return (
    <Box
      sx={{
        py: 4,
        px: { xs: 2, md: 4 },
        bgcolor: "background.default",
      }}
    >
      <Grid container spacing={2} justifyContent="space-evenly">
        {categoryData.map((column, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <HeaderCategoryDropDownColumn
              title={column.title}
              categories={column.items}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

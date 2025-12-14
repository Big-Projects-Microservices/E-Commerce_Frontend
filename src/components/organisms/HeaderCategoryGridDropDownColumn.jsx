import { Box, Grid } from "@mui/material";
import { HeaderCategoryDropDownColumn } from "@molecules";

const categoryData = [
  {
    title: "Hot Deal",
    items: [
      { label: "Coporate Shoes" },
      { label: "Sneakers" },
      { label: "Sandals" },
      { label: "Sport Shoe" },
      { label: "Trainers" },
    ],
  },
  {
    title: "Brands",
    items: [
      { label: "HOT DEAL", href: "/hot-deal" },
      { label: "Sunglasses" },
      { label: "Belts" },
      { label: "Handbags" },
      { label: "Sneakers" },
    ],
  },
  {
    title: "Popular",
    items: [
      { label: "HOT DEAL", href: "/hot-deal" },
      { label: "Sunglasses" },
      { label: "Belts" },
      { label: "Handbags" },
      { label: "Sneakers" },
    ],
  },
];

export default function HeaderCategoryGridDropDownColumn() {
  return (
    <Box
      sx={{
        py: 4,
        bgcolor: "background.default",
      }}
    >
      <Grid container spacing={2} justifyContent="space-evenly">
        {categoryData.map((column, index) => (
          <Grid item xs={6} md={2} key={index}>
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

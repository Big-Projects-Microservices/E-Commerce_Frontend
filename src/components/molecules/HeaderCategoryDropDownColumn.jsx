import { Box, Typography } from "@mui/material";
import { HeaderDropDownLink } from "@atoms";

export default function HeaderCategoryDropDownColumn({ title, categories }) {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          textTransform: "uppercase",
          fontSize: "1rem",
        }}
      >
        {title}
      </Typography>
      <Box>
        {categories.map((item, index) => (
          <HeaderDropDownLink
            key={index}
            name={item.label}
            href={item.href}
            isHot={item.label === "HOT DEAL"}
          />
        ))}
      </Box>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import { HeaderDropDownLink } from "@atoms";

export default function HeaderCategoryDropDownColumn({ title, categories }) {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 1.5,
          color: "text.primary",
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
            name={item}
            isHot={item === "HOT DEAL"}
          />
        ))}
      </Box>
    </Box>
  );
}

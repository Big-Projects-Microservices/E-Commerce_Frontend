import { Box } from "@mui/material";
import { Link, Paragraph } from "@atoms";

export default function BrandLink({
  name,
  count,
  path = "#",
  isActive = false,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: 0.5,
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "primary.main" : "text.primary",
      }}
    >
      <Link
        href={path}
        text={name}
        sx={{ fontSize: "0.9rem", textDecoration: "none" }}
      />
      <Paragraph text={count} sx={{ fontSize: "0.9rem" }} />
    </Box>
  );
}

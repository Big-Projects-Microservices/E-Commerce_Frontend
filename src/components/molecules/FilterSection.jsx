import { Box, Divider } from "@mui/material";
import { Heading } from "@atoms";

export default function FilterSection({ title, children }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Heading text={title} variant="h6" />
      {children}
      <Divider sx={{ mt: 2, mb: 0 }} />
    </Box>
  );
}

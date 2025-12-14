import { Typography } from "@mui/material";

export default function ErrorTitle({ code }) {
  return (
    <Typography
      variant="h1"
      sx={{ fontSize: 96, fontWeight: 700, mb: 1, color: "text.primary" }}
    >
      {code}
    </Typography>
  );
}

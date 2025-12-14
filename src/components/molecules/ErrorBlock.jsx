import { Box, Typography } from "@mui/material";
import { Icon, ErrorTitle, Link } from "@atoms";

export default function ErrorBlock({
  code,
  title,
  message,
  actionText,
  actionTo,
}) {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        maxWidth: 500,
        mx: "auto",
      }}
    >
      <Icon type={code === "404" ? "404" : "505"} size={120} />
      <ErrorTitle code={code} />

      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "text.secondary", mb: 2 }}
      >
        {title}
      </Typography>

      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>

      <Link text={actionText} to={actionTo} />
    </Box>
  );
}

import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function BreadCrumbs({ items }) {
  return (
    <Breadcrumbs
      separator="/"
      sx={{
        mb: 2,
        fontSize: 14,
      }}
    >
      {items.map((item, index) =>
        index === items.length - 1 ? (
          <Typography
            key={item.name}
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {item.name}
          </Typography>
        ) : (
          <Link
            key={item.name}
            href={item.path}
            underline="hover"
            sx={{ color: "primary.main", fontSize: 14 }}
          >
            {item.name}
          </Link>
        ),
      )}
    </Breadcrumbs>
  );
}

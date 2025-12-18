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
          <Typography key={item.name} sx={{ fontSize: 14 }} color="lightblue">
            {item.name}
          </Typography>
        ) : (
          <Link
            key={item.name}
            href={item.path}
            underline="hover"
            sx={{ fontSize: 14 }}
            color="black"
          >
            {item.name}
          </Link>
        ),
      )}
    </Breadcrumbs>
  );
}

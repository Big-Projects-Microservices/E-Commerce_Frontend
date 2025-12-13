import { Link } from "@mui/material";

export default function HeaderDropDOwnLink({
  name,
  href = "#",
  isHot = false,
}) {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        display: "block",
        py: 0.5,
        fontSize: "0.9rem",
        color: isHot ? "error.main" : "text.secondary",
        fontWeight: isHot ? 600 : 400,
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      {name}
    </Link>
  );
}

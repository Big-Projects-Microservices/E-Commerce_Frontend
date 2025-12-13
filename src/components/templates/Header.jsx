import { useState } from "react";
import { Box } from "@mui/material";
import { LeftSideHeader, RightSideHeader } from "@molecules";
import { HeaderCategoryGridDropDownColumn } from "@organisms";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const megaMenuContainerStyles = {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 2,
    p: "0 80px",
  };

  const menuPositioningStyles = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 10,
    maxWidth: 857,
    margin: "0 auto",

    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen
      ? "translateY(0) scale(1)"
      : "translateY(-10px) scale(0.98)",

    pointerEvents: isMenuOpen ? "auto" : "none",

    transition: `
      opacity 200ms ease,
      transform 250ms cubic-bezier(0.16, 1, 0.3, 1)
    `,
  };

  return (
    <Box
      component="header"
      sx={megaMenuContainerStyles}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <RightSideHeader />
      <LeftSideHeader />

      <Box sx={menuPositioningStyles}>
        <HeaderCategoryGridDropDownColumn />
      </Box>
    </Box>
  );
}

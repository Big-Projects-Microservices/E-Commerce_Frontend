import { useState } from "react";
import { Box } from "@mui/material";
import { LeftSideHeader, RightSideHeader } from "@molecules";
import HeaderCategoryGridDropDownColumn from "../organisms/HeaderCategoryGridDropDownColumn";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const megaMenuContainerStyles = {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 2,
    p: "0 80px 0 80px",
  };
  const menuPositioningStyles = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 10,
    boxShadow: 3,
    display: isMenuOpen ? "block" : "none",
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

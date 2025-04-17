import { Box } from "@mui/material";
import { LeftSideHeader, RightSideHeader } from "../molecules";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2,
        p: "0 80px 0 80px",
      }}
    >
      <RightSideHeader />
      <LeftSideHeader />
    </Box>
  );
}

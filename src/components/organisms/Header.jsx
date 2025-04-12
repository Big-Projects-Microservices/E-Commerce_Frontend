import { Box } from "@mui/material";
import LeftSide from "../molecules/LeftSide";
import RideSide from "../molecules/RightSide";

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
        p: "0 20px 0 20px",
      }}
    >
      <RideSide />
      <LeftSide />
    </Box>
  );
}

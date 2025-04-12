import { Box } from "@mui/material";
import Selector from "../atoms/Selector";
import Logo from "../atoms/Logo";

export default function RideSide() {
  return (
    <Box>
      <Box>
        <Selector />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Logo />
      </Box>
    </Box>
  );
}

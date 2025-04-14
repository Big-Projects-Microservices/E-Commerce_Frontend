import { Box } from "@mui/material";
import Selector from "../atoms/Selector";
import Logo from "../atoms/Logo";
import { Link } from "react-router-dom";

export default function RideSideHeader() {
  return (
    <Box>
      <Box>
        <Selector />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Link to="/">
          <Logo />
        </Link>
      </Box>
    </Box>
  );
}

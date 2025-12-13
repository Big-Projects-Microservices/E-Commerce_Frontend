import { Box } from "@mui/material";
import { Logo, Selector } from "@atoms";
import { Link } from "react-router-dom";

export default function RightSideHeader() {
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

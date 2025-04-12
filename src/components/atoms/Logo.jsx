import { Box } from "@mui/material";
import logo from "../../assets/header/logo.svg";
export default function Logo() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img className="w-8" src={logo} />
        <span className="font-custom ml-2">E-comm</span>
      </Box>
    </>
  );
}

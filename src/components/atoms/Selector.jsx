import { Box } from "@mui/material";
import { useState } from "react";

export default function Selector() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Box>
      <select name="select" value={selectedOption} onChange={handleChange}>
        <option value="EN">EN</option>
        <option value="RU">RU</option>
      </select>

      <select name="select" value={selectedOption} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </Box>
  );
}

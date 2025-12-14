import { Box, Typography, Select, MenuItem } from "@mui/material";

export default function SortOption({ label, value, options, onChange }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography variant="body1">{label}</Typography>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        size="small"
        sx={{
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "divider",
          },
          ".MuiSelect-select": {
            fontWeight: "bold",
            py: 0.5,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

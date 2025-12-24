import { Box } from "@mui/material";

export default function ColorPicker({ colors, selectedColor, onSelectColor }) {
  return (
    <Box sx={{ display: "flex", gap: 1, p: 1 }}>
      {colors.map((colorItem, index) => {
        const colorValue = colorItem.value;
        const isSelected = colorValue === selectedColor;

        return (
          <Box
            key={index}
            onClick={() => onSelectColor(colorValue)}
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: colorValue,
              border: isSelected ? "2px solid" : "1px solid",
              borderColor: isSelected ? "primary.main" : "grey.300",
              boxShadow: isSelected
                ? `0 0 0 2px ${
                    colorValue === "#000000" || colorValue === "#FFFF00"
                      ? "grey.300"
                      : "background.paper"
                  }`
                : "none",
              cursor: "pointer",
              transition: "transform 0.1s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        );
      })}
    </Box>
  );
}

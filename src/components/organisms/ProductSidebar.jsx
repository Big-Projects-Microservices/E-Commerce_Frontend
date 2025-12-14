import { Box, Button, Slider } from "@mui/material";
import { FilterSection, BrandLink } from "@molecules";
import { Paragraph } from "@atoms";
import { useState, useEffect } from "react";

const hotDealFilters = [
  { name: "Nike", count: 2, isActive: false },
  { name: "Airmax", count: 48, isActive: true },
  { name: "Adidas", count: 95, isActive: false },
];

const brandFilters = [
  { name: "Nike", count: 99, isActive: false },
  { name: "Airmax", count: 99, isActive: true },
  { name: "Adidas", count: 99, isActive: false },
  { name: "Siemens", count: 99, isActive: false },
];

const colors = [
  { value: "#007FFF", isSelected: false },
  { value: "#FF4500", isSelected: false },
  { value: "#000000", isSelected: false },
  { value: "#FFFF00", isSelected: false },
  { value: "#FF00FF", isSelected: false },
  { value: "#F5E6E6", isSelected: false },
];

const ColorPicker = ({ colors, selectedColor, onSelectColor }) => (
  <Box sx={{ display: "flex", gap: 1, p: 1 }}>
    {colors.map((color, index) => {
      const isSelected = color.value === selectedColor;
      return (
        <Box
          key={index}
          onClick={() => onSelectColor(color.value)}
          sx={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            backgroundColor: color.value,
            border: isSelected ? "2px solid" : "none",
            borderColor: isSelected ? "primary.main" : "transparent",
            boxShadow: isSelected
              ? `0 0 0 2px ${color.value === "#000000" || color.value === "#FFFF00" ? "grey.300" : "background.paper"}`
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

export default function ProductSidebar({ onFilterChange = () => {} }) {
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeBrands, setActiveBrands] = useState([]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleColorSelect = (colorValue) => {
    setSelectedColor((prev) => (prev === colorValue ? null : colorValue));
  };

  const handleBrandToggle = (brandName) => {
    setActiveBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((n) => n !== brandName)
        : [...prev, brandName],
    );
  };

  useEffect(() => {
    onFilterChange({
      priceRange: priceRange,
      color: selectedColor,
      brands: activeBrands,
    });
  }, [priceRange, selectedColor, activeBrands, onFilterChange]);

  const minPrice = 0;
  const maxPrice = 400;

  return (
    <Box sx={{ width: 250, mr: 4, pt: 1, bgcolor: "background.paper" }}>
      <FilterSection title="Hot Deals">
        <Box>
          {hotDealFilters.map((brand) => (
            <BrandLink
              key={brand.name}
              name={brand.name}
              count={brand.count}
              isActive={brand.isActive}
            />
          ))}
        </Box>
      </FilterSection>

      <FilterSection title="Prices">
        <Box sx={{ my: 1, px: 1 }}>
          <Paragraph
            text={`Range: $${priceRange[0].toFixed(2)} - $${priceRange[1].toFixed(2)}`}
            sx={{ fontSize: "0.9rem", mb: 2 }}
          />
          <Slider
            getAriaLabel={() => "Price range"}
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
            step={1}
            marks={[
              { value: minPrice, label: `$${minPrice}` },
              { value: maxPrice, label: `$${maxPrice}` },
            ]}
          />
        </Box>
      </FilterSection>

      <FilterSection title="Color">
        <ColorPicker
          colors={colors}
          selectedColor={selectedColor}
          onSelectColor={handleColorSelect}
        />
      </FilterSection>

      <FilterSection title="Brand">
        <Box>
          {brandFilters.map((brand) => (
            <BrandLink
              key={brand.name}
              name={brand.name}
              count={brand.count}
              isActive={activeBrands.includes(brand.name)}
              onClick={() => handleBrandToggle(brand.name)}
            />
          ))}
        </Box>
        <Button size="small" variant="text" sx={{ mt: 1 }}>
          More
        </Button>
      </FilterSection>
    </Box>
  );
}

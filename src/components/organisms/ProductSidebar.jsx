import { Box, Button, Slider } from "@mui/material";
import { FilterSection, BrandLink, ColorPicker } from "@molecules";
import { Paragraph } from "@atoms";
import { useState, useEffect, useRef } from "react";

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
  { value: "#007fffff", isSelected: false },
  { value: "#ff4500ff", isSelected: false },
  { value: "#000000ff", isSelected: false },
  { value: "#ffff00ff", isSelected: false },
  { value: "#ff00ffff", isSelected: false },
  { value: "#f5e6e6ff", isSelected: false },
];

export default function ProductSidebar({ onFilterChange = () => {} }) {
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeBrands, setActiveBrands] = useState([]);
  const onFilterChangeRef = useRef(onFilterChange);
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleColorSelect = (colorValue) => {
    const normalizedColor = colorValue.toLowerCase()
    setSelectedColor((prev) => (prev === normalizedColor ? null : normalizedColor));
  };

  const handleBrandToggle = (brandName) => {
    setActiveBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((n) => n !== brandName)
        : [...prev, brandName],
    );
  };

useEffect(() => {
    onFilterChangeRef.current({
      priceRange,
      color: selectedColor,
      brands: activeBrands,
    });
  }, [priceRange, selectedColor, activeBrands]);

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

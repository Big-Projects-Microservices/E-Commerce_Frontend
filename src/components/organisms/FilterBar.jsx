import { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { SortOption, ViewSwitcher } from "@molecules";
import { ActionBanner } from "@organisms";

const sortByOptions = [
  { id: 1, label: "Name", value: "name" },
  { id: 2, label: "Price", value: "price" },
  { id: 3, label: "Date", value: "date" },
];

const showOptions = [
  { id: 1, label: "6", value: 6 },
  { id: 2, label: "12", value: 12 },
  { id: 3, label: "24", value: 24 },
];

export default function FilterBar({ totalItems, onSortChange, onShowChange }) {
  const [sortBy, setSortBy] = useState("name");
  const [showCount, setShowCount] = useState(12);
  const [view, setView] = useState("grid");
  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
    onSortChange?.(value);
  };
  const handleShowChange = (event) => {
    const value = Number(event.target.value);
    setShowCount(value);
    onShowChange?.(value);
  };
  return (
    <>
      <ActionBanner />
      <Box
        sx={{
          mb: 3,
          p: 2,
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #ddd",
          borderRadius: 1,
        }}
      >
        <Typography fontWeight="bold">{totalItems} Items</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <SortOption
            label="Sort By"
            value={sortBy}
            options={sortByOptions}
            onChange={handleSortChange}
          />

          <SortOption
            label="Show"
            value={showCount}
            options={showOptions}
            onChange={handleShowChange}
          />
          <Divider orientation="vertical" flexItem />
          <ViewSwitcher currentView={view} onViewChange={setView} />
        </Box>
      </Box>
    </>
  );
}

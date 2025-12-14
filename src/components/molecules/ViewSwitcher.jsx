import { Box, IconButton } from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";

export default function ViewSwitcher({ currentView, onViewChange }) {
  return (
    <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
      <IconButton
        onClick={() => onViewChange("grid")}
        sx={{
          color: currentView === "grid" ? "primary.main" : "text.secondary",
        }}
        aria-label="Grid View"
      >
        <ViewModuleIcon />
      </IconButton>
      <IconButton
        onClick={() => onViewChange("list")}
        sx={{
          color: currentView === "list" ? "primary.main" : "text.secondary",
        }}
        aria-label="List View"
      >
        <ViewListIcon />
      </IconButton>
    </Box>
  );
}

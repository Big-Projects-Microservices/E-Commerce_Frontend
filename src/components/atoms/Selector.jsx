import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function Selector() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const currentLang = String(i18n.language || lang || "en").substring(0, 2);
  const changeLanguage = (e) => {
    const newLang = e.target.value;
    localStorage.setItem("i18nextLng", newLang);

    i18n.changeLanguage(newLang);

    const currentPath = location.pathname;
    const segments = currentPath.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");
    navigate(newPath, { replace: true });
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <select
        name="lang"
        value={currentLang}
        onChange={changeLanguage}
        style={{ padding: "4px", borderRadius: "4px" }}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>

      <select
        name="currency"
        defaultValue="USD"
        style={{ padding: "4px", borderRadius: "4px" }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </Box>
  );
}

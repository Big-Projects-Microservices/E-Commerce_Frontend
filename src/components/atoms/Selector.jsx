import { Box } from "@mui/material";
import { useState } from "react";
import { useTranslation, withTranslation } from 'react-i18next';

const Welcome = withTranslation()(Selector);
export default function Selector() {
  const [selectedOption, setSelectedOption] = useState("");
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language || "ru");

const changeLanguage = (e) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Box>
        <select name="lang" value={selectedLang} onChange={changeLanguage}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>

      <select name="select" value={selectedOption} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </Box>
  );
}

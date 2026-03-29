import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./assets/en.json";
import ruTranslation from "./assets/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
    detection: {
      order: ["path", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;

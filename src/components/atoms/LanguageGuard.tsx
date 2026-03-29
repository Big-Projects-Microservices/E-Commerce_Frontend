import { Navigate, useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SUPPORTED_LANGS = ["en", "ru"];

export default function LanguageGuard() {
  const { lang } = useParams();
  const location = useLocation();
  const { i18n } = useTranslation();

  const isLangValid = SUPPORTED_LANGS.includes(lang || "");

  useEffect(() => {
    if (isLangValid && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, isLangValid, i18n]);

  if (isLangValid) {
    return <Outlet />;
  }

  const detectedLang = SUPPORTED_LANGS.includes(i18n.language)
    ? i18n.language
    : "en";

  const pathAfterLang = location.pathname === "/" ? "" : location.pathname;

  return <Navigate to={`/${detectedLang}${pathAfterLang}`} replace />;
}

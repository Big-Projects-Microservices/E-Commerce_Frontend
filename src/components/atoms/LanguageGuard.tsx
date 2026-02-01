import { Navigate, useParams, Outlet, useLocation } from "react-router-dom";
import i18n from "i18next";

const SUPPORTED_LANGS = ["en", "ru"];

export default function LanguageGuard() {
  const { lang } = useParams();
  const location = useLocation();

  const isLangValid = SUPPORTED_LANGS.includes(lang || "");

  if (isLangValid) {
    return <Outlet />;
  }

  const detectedLang = SUPPORTED_LANGS.includes(i18n.language)
    ? i18n.language
    : "en";

  const pathAfterLang = location.pathname === "/" ? "" : location.pathname;

  return <Navigate to={`/${detectedLang}${pathAfterLang}`} replace />;
}

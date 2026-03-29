import { useTranslation } from "react-i18next";
import BreadcrumbItem from "../atoms/BreadcrumbItem";
import ContactSection from "../organisms/ContactSection";

export default function ContactTemplate() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language?.split("-")[0] || "en";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 pt-10 text-sm sm:px-6 lg:px-8">
        <BreadcrumbItem
          label={t("contactPage.breadcrumbHome")}
          href={`/${currentLanguage}`}
        />
        <span className="text-slate-400">/</span>
        <BreadcrumbItem label={t("contactPage.breadcrumbCurrent")} isActive />
      </div>

      <ContactSection />
    </div>
  );
}

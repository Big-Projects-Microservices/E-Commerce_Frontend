import { useTranslation } from "react-i18next";
import { Button } from "@atoms";

export default function SearchBar({
  value = "",
  onChange,
  placeholder,
  buttonLabel,
}) {
  const { t } = useTranslation();

  return (
    <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          value={value}
          onChange={onChange}
          placeholder={placeholder || t("common.searchPlaceholder")}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <Button
          type="button"
          className="rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
        >
          {buttonLabel || t("contactPage.searchButton")}
        </Button>
      </div>
    </div>
  );
}

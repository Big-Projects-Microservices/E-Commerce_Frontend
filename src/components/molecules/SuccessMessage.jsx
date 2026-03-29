import { useTranslation } from "react-i18next";
import { Button, SuccessIcon } from "@atoms";

export default function SuccessMessage({ onComplete }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-6 text-center">
      <p className="text-2xl font-medium text-sky-500">{t("payment.title")}</p>
      <SuccessIcon />
      <div className="space-y-2">
        <p className="text-lg font-semibold text-slate-800">
          {t("payment.successTitle")}
        </p>
        <p className="max-w-xs text-sm text-slate-500">
          {t("payment.successDescription")}
        </p>
      </div>
      <Button
        type="button"
        onClick={onComplete}
        className="min-w-[180px] rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
      >
        {t("payment.step3Button")}
      </Button>
    </div>
  );
}

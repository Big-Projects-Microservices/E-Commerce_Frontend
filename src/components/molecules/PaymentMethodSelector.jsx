import { useTranslation } from "react-i18next";

export default function PaymentMethodSelector({
  options = [],
  value,
  onChange,
  className = "",
}) {
  const { t } = useTranslation();

  return (
    <div className={`space-y-3 ${className}`}>
      <p className="text-sm font-medium text-sky-500">
        {t("payment.paymentMethodTitle")}
      </p>

      <div className="rounded-lg border border-slate-200 bg-white p-3">
        <select
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          className="w-full border-none bg-transparent text-sm text-slate-600 outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => {
          const isSelected = option.value === value;

          return (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                isSelected
                  ? "border-sky-500 bg-sky-50 text-sky-600"
                  : "border-slate-200 bg-white text-slate-500"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={option.value}
                checked={isSelected}
                onChange={(event) => onChange?.(event.target.value)}
                className="h-4 w-4 accent-sky-500"
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

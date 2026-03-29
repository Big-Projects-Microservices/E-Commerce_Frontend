import { useTranslation } from "react-i18next";
import { Button, InputField, CardVisual } from "@atoms";

export default function CardDetailsForm({
  values,
  onFieldChange,
  onSubmit,
  cardElementReady = false,
  cardNumberElement = null,
  expiryElement = null,
  cvvElement = null,
}) {
  const { t } = useTranslation();
  const formattedNumber = values.cardNumber?.trim() || "1234 5678 9123 4567";
  const formattedExpiry = values.expiry?.trim() || "09/30";
  const cardHolder = `${values.firstName || t("payment.cardHolder")} ${values.lastName || ""}`.trim();

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <CardVisual
        cardNumber={formattedNumber}
        cardHolder={cardHolder}
        expiry={formattedExpiry}
      />

      <div className="grid gap-4 sm:grid-cols-[1.6fr_1fr_1fr]">
        {cardElementReady ? (
          <>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
              {cardNumberElement}
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
              {expiryElement}
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
              {cvvElement}
            </div>
          </>
        ) : (
          <>
            <InputField
              label={t("payment.cardNumber")}
              name="cardNumber"
              value={values.cardNumber}
              onChange={onFieldChange}
              placeholder={t("payment.cardNumberPlaceholder")}
            />
            <InputField
              label={t("payment.expiry")}
              name="expiry"
              value={values.expiry}
              onChange={onFieldChange}
              placeholder={t("payment.expiryPlaceholder")}
            />
            <InputField
              label={t("payment.cvv")}
              name="cvv"
              value={values.cvv}
              onChange={onFieldChange}
              placeholder={t("payment.cvvPlaceholder")}
            />
          </>
        )}
      </div>

      <div className="pt-2 text-center">
        <Button
          type="submit"
          className="min-w-[180px] rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          {t("payment.step2Button")}
        </Button>
      </div>
    </form>
  );
}

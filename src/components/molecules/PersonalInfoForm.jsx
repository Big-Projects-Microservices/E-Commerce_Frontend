import { useTranslation } from "react-i18next";
import { InputField, TextArea, Button } from "@atoms";
import PaymentMethodSelector from "./PaymentMethodSelector";

export default function PersonalInfoForm({
  values,
  methodOptions,
  onFieldChange,
  onMethodChange,
  onSubmit,
}) {
  const { t } = useTranslation();

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          label={t("payment.firstName")}
          name="firstName"
          value={values.firstName}
          onChange={onFieldChange}
          placeholder={t("payment.firstName")}
        />
        <InputField
          label={t("payment.lastName")}
          name="lastName"
          value={values.lastName}
          onChange={onFieldChange}
          placeholder={t("payment.lastName")}
        />
      </div>

      <InputField
        label={t("payment.address")}
        name="address"
        value={values.address}
        onChange={onFieldChange}
        placeholder={t("payment.addressPlaceholder")}
      />

      <TextArea
        label={t("payment.orderNotes")}
        name="orderNotes"
        value={values.orderNotes}
        onChange={onFieldChange}
        placeholder={t("payment.orderNotesPlaceholder")}
        rows={4}
      />

      <PaymentMethodSelector
        options={methodOptions}
        value={values.paymentMethod}
        onChange={onMethodChange}
      />

      <div className="pt-2 text-center">
        <Button
          type="submit"
          className="min-w-[180px] rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          {t("payment.step1Button")}
        </Button>
      </div>
    </form>
  );
}

import { useTranslation } from "react-i18next";
import { Button, InputField, TextArea } from "@atoms";

export default function ContactForm({ formData = {}, onChange, onSubmit }) {
  const { t } = useTranslation();

  function handleFieldChange(event) {
    onChange?.(event);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-8 space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          {t("contactPage.formEyebrow")}
        </p>
        <h3 className="text-3xl font-bold text-slate-900">
          {t("contactPage.formTitle")}
        </h3>
        <p className="text-sm leading-6 text-slate-500">
          {t("contactPage.formDescription")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <InputField
          label={t("contactPage.firstNameLabel")}
          name="firstName"
          placeholder={t("contactPage.firstNamePlaceholder")}
          value={formData.firstName || ""}
          onChange={handleFieldChange}
          required
        />
        <InputField
          label={t("contactPage.lastNameLabel")}
          name="lastName"
          placeholder={t("contactPage.lastNamePlaceholder")}
          value={formData.lastName || ""}
          onChange={handleFieldChange}
          required
        />
        <InputField
          label={t("contactPage.emailFieldLabel")}
          name="email"
          type="email"
          placeholder={t("contactPage.emailPlaceholder")}
          value={formData.email || ""}
          onChange={handleFieldChange}
          required
          className="sm:col-span-2"
        />
        <InputField
          label={t("contactPage.phoneFieldLabel")}
          name="phone"
          type="tel"
          placeholder={t("contactPage.phonePlaceholder")}
          value={formData.phone || ""}
          onChange={handleFieldChange}
          className="sm:col-span-2"
        />
        <TextArea
          label={t("contactPage.messageLabel")}
          name="message"
          placeholder={t("contactPage.messagePlaceholder")}
          value={formData.message || ""}
          onChange={handleFieldChange}
          rows={6}
          required
          className="sm:col-span-2"
        />
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          {t("contactPage.submitButton")}
        </Button>
      </div>
    </form>
  );
}

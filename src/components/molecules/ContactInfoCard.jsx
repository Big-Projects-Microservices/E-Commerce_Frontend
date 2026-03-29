import { useTranslation } from "react-i18next";

export default function ContactInfoCard() {
  const { t } = useTranslation();

  const items = [
    {
      label: t("contactPage.emailLabel"),
      value: t("contactPage.emailValue"),
    },
    {
      label: t("contactPage.phoneLabel"),
      value: t("contactPage.phoneValue"),
    },
    {
      label: t("contactPage.addressLabel"),
      value: t("contactPage.addressValue"),
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-sky-600 p-8 text-white shadow-lg sm:p-10">
      <div className="absolute -right-12 top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-sky-300/20 blur-2xl" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-100">
            {t("contactPage.cardEyebrow")}
          </p>
          <h2 className="text-3xl font-bold capitalize leading-tight sm:text-4xl">
            {t("contactPage.cardTitle")}
          </h2>
          <p className="max-w-md text-sm leading-6 text-sky-50/90">
            {t("contactPage.cardDescription")}
          </p>
        </div>

        <div className="space-y-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100/90">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="relative mx-auto flex h-52 w-full max-w-xs items-end justify-center overflow-hidden rounded-[24px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
          <div className="absolute inset-x-8 bottom-5 h-5 rounded-full bg-slate-900/15 blur-md" />
          <div className="relative flex flex-col items-center">
            <div className="h-16 w-16 rounded-full border-4 border-white/80 bg-sky-200/40" />
            <div className="-mt-1 h-24 w-28 rounded-t-[48px] rounded-b-[18px] border-4 border-white/80 border-t-0 bg-sky-200/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Paragraph, Link } from "@atoms";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export default function TextBlock() {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="flex flex-col gap-4 text-white">
      <Paragraph
        text={t('product.heroTitle')}
        className="text-[clamp(20px,2vw,55px)] font-normal leading-tight font-custom"
      />
      <Paragraph
        text={t('product.heroSubtitle')}
        className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-normal opacity-80"
      />
      <Link
        className="w-fit px-6 py-2 bg-white text-black font-semibold rounded-full mt-2 hover:bg-gray-200 transition"
        href={`/${lang}/shop`}
        text={t("common.buttonShopNow")}
      />
    </div>
  );
}
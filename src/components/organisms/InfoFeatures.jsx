import { Icon } from "@atoms";
import { FeatureCard } from "@molecules";
import refund from "../../assets/info-features/refund.svg";
import shipping from "../../assets/info-features/shipping.svg";
import support from "../../assets/info-features/support.svg";
import { useTranslation } from 'react-i18next';

export default function InfoFeatures() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 text-center py-10">
      <FeatureCard
        icon={<Icon src={shipping} className="w-24 h-16 mb-2 justify-center" />}
        title={t('featuresCards.freeShipping.title')}
        description={t('featuresCards.freeShipping.text')}
        className="whitespace-pre-line"
      />
      <FeatureCard
        icon={<Icon src={refund} className="w-24 h-16 mb-2 justify-center" />}
        title={t('featuresCards.refund.title')}
        description={t('featuresCards.refund.text')}
        className="whitespace-pre-line"
      />
      <FeatureCard
        icon={<Icon src={support} className="w-24 h-16 mb-2 justify-center" />}
        title={t('featuresCards.support.title')}
        description={t('featuresCards.support.text')}
        className="whitespace-pre-line"
      />
    </div>
  );
}
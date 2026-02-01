import { Input } from "@molecules";
import { useTranslation } from 'react-i18next';

export default function SearchBar() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <Input
        width="635px"
        height="64px"
        text={t('titles.search')}
        name="input"
        placeholder={t('common.searchPlaceholder')}
      />
    </div>
  );
}
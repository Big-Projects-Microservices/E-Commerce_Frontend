import { ContactBlock, LogoBlock, NavList, SocialBlock } from "@molecules";
import { navigationLinks, contactLines } from "../../data/footerData";
import { useTranslation } from 'react-i18next';

export default function MainFooterContent() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-x-8 lg:gap-x-10">
      <div className="col-span-2 md:col-span-1">
        <LogoBlock name="E-Comm" description="" />
      </div>

      <div className="col-span-2 md:col-span-1">
        <SocialBlock
          title={t('footer.followUs')}
          text={t('footer.aboutText')}
        />

        <div className="mt-8">
          <ContactBlock title={t('nav.contact')} lines={contactLines} />
        </div>
      </div>

      <NavList title={t('footer.information')} links={navigationLinks} />

      <div className="flex flex-col">
        <NavList title={t('footer.service')} links={navigationLinks} />
        <NavList title={t('footer.myAccount')} links={navigationLinks} className="!mb-0" />
      </div>

      <NavList
        title={t('footer.ourOffers')}
        links={navigationLinks}
        className="md:col-span-1 col-span-2"
      />
    </div>
  );
}
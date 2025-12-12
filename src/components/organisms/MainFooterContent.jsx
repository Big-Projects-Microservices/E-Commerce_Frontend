import { ContactBlock, LogoBlock, NavList, SocialBlock } from "../molecules";
import {
  navigationLinks,
  socialIcons,
  contactLines,
} from "../../data/footerData";
import { Heading } from "../atoms";

export default function MainFooterContent() {
  const logoDescription =
    "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.";
  const followUsText =
    "Since the 1500s, when an unknown printer took a galley of type and scrambled.";

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-x-8 lg:gap-x-10">
      <div className="col-span-2 md:col-span-1">
        <LogoBlock name="E-Comm" description={logoDescription} />
      </div>

      <div className="col-span-2 md:col-span-1">
        <Heading text="Follow Us" />
        <SocialBlock text={followUsText} icons={socialIcons} />

        <div className="mt-8">
          <ContactBlock title="Contact Us" lines={contactLines} />
        </div>
      </div>

      <NavList title="Information" links={navigationLinks} />

      <div className="flex flex-col">
        <NavList title="Service" links={navigationLinks} />
        <NavList title="My Account" links={navigationLinks} className="!mb-0" />
      </div>

      <NavList
        title="Our Offers"
        links={navigationLinks}
        className="md:col-span-1 col-span-2"
      />
    </div>
  );
}

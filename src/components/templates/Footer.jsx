import { Separator } from "../atoms";
import { BottomBar, MainFooterContent } from "../organisms";

export default function Footer() {
  const footerClasses = `
    bg-[hsl(198,28%,55%)] text-white font-sans p-10 md:p-14 lg:px-20
  `;

  return (
    <footer className={footerClasses}>
      <MainFooterContent />
      <Separator />
      <BottomBar />
    </footer>
  );
}

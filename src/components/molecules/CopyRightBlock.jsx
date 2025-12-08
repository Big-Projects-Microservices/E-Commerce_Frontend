import { Link, Paragraph } from "../atoms";

export default function CopyrightBlock({ year, themeAuthor }) {
  return (
    <Paragraph className="text-xs m-0 leading-relaxed">
      &copy; {year} Ecommerce theme by{" "}
      <Link text={themeAuthor} url="#" className="text-xs" />
    </Paragraph>
  );
}

import { Heading, Paragraph } from "@atoms";

export default function SocialBlock({ text, title }) {
  return (
    <div>
      <Heading text={title} />
      <Paragraph text={text} />
    </div>
  );
}

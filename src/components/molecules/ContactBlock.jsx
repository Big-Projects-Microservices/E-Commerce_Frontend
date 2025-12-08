import { Heading, Paragraph } from "../atoms";

export default function ContactBlock({ title, lines }) {
  return (
    <div>
      <Heading text={title} />
      {lines.map((line, index) => (
        <Paragraph key={index} className="text-sm m-0 leading-normal">
          {line}
        </Paragraph>
      ))}
    </div>
  );
}

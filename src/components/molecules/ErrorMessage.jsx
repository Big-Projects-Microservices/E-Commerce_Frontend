import { Heading, Paragraph } from "@atoms";

export default function ErrorMessage({ code, title, description }) {
  return (
    <div className="text-center mb-6">
      <Heading className="text-8xl text-red-600 mb-4">{code}</Heading>
      <Heading className="text-3xl mb-3">{title}</Heading>
      <Paragraph className="text-gray-600">{description}</Paragraph>
    </div>
  );
}

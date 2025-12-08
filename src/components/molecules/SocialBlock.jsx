import { Icon, Paragraph } from "../atoms";

export default function SocialBlock({ text, icons }) {
  return (
    <div>
      <Paragraph className="text-xs mb-3">{text}</Paragraph>
      <div className="flex">
        {icons.map((icon, index) => (
          <Icon key={index} type="social">
            {icon.label}
          </Icon>
        ))}
      </div>
    </div>
  );
}

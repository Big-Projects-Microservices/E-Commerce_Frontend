import { Icon, Paragraph } from "../atoms";

export default function LogoBlock({ name, description }) {
  return (
    <div className="max-w-xs">
      <div className="flex items-center mb-4">
        <Icon type="logo">{"L"}</Icon>
        <Paragraph className="!text-white text-lg font-bold m-0 leading-relaxed">
          {name}
        </Paragraph>
      </div>
      <Paragraph className="text-xs">{description}</Paragraph>
    </div>
  );
}

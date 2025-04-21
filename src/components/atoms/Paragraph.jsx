export default function Paragraph({ text, className = "" }) {
  return (
    <h2 className={`font-custom max-w-full w-full block z-50 ${className}`}>
      {text}
    </h2>
  );
}

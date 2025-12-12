export default function Paragraph({ text, className = "" }) {
  return (
    <p className={`font-custom max-w-full w-full block z-50 ${className}`}>
      {text}
    </p>
  );
}

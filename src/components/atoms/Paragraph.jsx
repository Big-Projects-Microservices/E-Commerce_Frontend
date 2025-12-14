export default function Paragraph({ text, key, className = "" }) {
  return (
    <p key={key} className={`font-custom max-w-full block z-50 ${className}`}>
      {text}
    </p>
  );
}

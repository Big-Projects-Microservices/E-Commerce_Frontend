export default function Link({ text, url = "#", className = "" }) {
  const baseClasses = `text-blue-200 hover:text-white transition-colors text-sm leading-relaxed`;
  return (
    <a href={url} className={`${baseClasses} ${className}`}>
      {text}
    </a>
  );
}

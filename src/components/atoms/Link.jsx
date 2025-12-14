export default function Link({ text, to, url = "#", className = "" }) {
  const baseClasses = ` transition-colors text-sm leading-relaxed`;
  return (
    <a href={url} to={to} className={`${baseClasses} ${className}`}>
      {text}
    </a>
  );
}

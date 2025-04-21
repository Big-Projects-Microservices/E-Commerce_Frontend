export default function Icon({ src, text, className, alt }) {
  return (
    <div className={`flex items-center ${className} `}>
      <img src={src} alt={alt} />
      <span>{text}</span>
    </div>
  );
}

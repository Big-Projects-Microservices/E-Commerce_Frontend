export default function BannerImage({ src, alt, className }) {
  return <img src={src} alt={alt} className={`${className}`} />;
}

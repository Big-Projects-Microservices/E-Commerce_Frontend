export default function FeatureCard({
  title,
  description,
  className = "",
  icon,
}) {
  return (
    <div className="flex flex-col items-center gap-2 px-28">
      {icon}
      <h3 className={`font-custom text-md uppercase${className}`}>{title}</h3>
      <p className={`text-sm text-gray-600 ${className}`}>{description}</p>
    </div>
  );
}

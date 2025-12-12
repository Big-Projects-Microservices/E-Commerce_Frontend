export default function StarRating({ rating }) {
  const stars = [];
  const colorActive = "text-yellow-400";
  const colorInactive = "text-gray-300";

  for (let i = 0; i < 5; i++) {
    const isFilled = i < rating;

    stars.push(
      <span
        key={i}
        className={`text-sm ${isFilled ? colorActive : colorInactive}`}
      >
        ★
      </span>,
    );
  }

  return <div className="mb-1">{stars}</div>;
}

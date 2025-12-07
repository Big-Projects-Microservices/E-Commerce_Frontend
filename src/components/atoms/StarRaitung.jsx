export default function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        style={{ color: i < rating ? "#ffc107" : "#e4e5e9", fontSize: "14px" }}
      >
        ★
      </span>,
    );
  }
  return <div style={{ marginBottom: "5px" }}>{stars}</div>;
}

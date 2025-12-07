export default function PriceText({ current, discount }) {
  return (
    <p style={{ fontSize: "14px", margin: "5px 0" }}>
      <span style={{ fontWeight: "bold", color: "#000", marginRight: "5px" }}>
        {current}
      </span>
      <span style={{ color: "red", fontWeight: "bold" }}>{discount}</span>
    </p>
  );
}

export default function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "40px",
        color: "#333",
      }}
    >
      {children}
    </h2>
  );
}

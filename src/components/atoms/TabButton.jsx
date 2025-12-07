export default function TabButton({ children, isActive }) {
  <button
    style={{
      background: "none",
      border: "none",
      padding: "10px 15px",
      fontSize: "16px",
      cursor: "pointer",
      color: isActive ? "#007bff" : "#555",
      borderBottom: isActive ? "2px solid #007bff" : "2px solid transparent",
      transition: "color 0.3s, border-bottom 0.3s",
      margin: "0 10px",
    }}
  >
    {children}
  </button>;
}

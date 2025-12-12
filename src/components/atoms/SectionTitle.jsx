export default function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
      {children.toUpperCase()}
    </h2>
  );
}

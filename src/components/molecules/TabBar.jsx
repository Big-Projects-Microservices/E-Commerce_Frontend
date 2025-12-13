import { TabButton } from "@atoms";

export default function TabBar({ categories, activeCategory }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      {(categories || []).map((category) => (
        <TabButton key={category} isActive={category === activeCategory}>
          {category}
        </TabButton>
      ))}
    </div>
  );
}

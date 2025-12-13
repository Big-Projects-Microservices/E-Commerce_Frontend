import { Input } from "@molecules";

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <Input
        width="635px"
        height="64px"
        text="Search"
        name="input"
        placeholder="Search query..."
      />
    </div>
  );
}

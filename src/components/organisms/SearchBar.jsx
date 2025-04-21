import Input from "../molecules/Input";

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <Input
        width="635px"
        height="64px"
        text="Search"
        placeholder="Search query..."
      />
    </div>
  );
}

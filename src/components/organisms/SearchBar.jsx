import Input from "../molecules/Input";

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <Input text="Search" placeholder="Search query..." />;
    </div>
  );
}

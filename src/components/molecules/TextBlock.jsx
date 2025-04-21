import Paragraph from "../atoms/Paragraph";

export default function TextBlock() {
  return (
    <div className="flex flex-col gap-4 text-white">
      <Paragraph
        text="Adidas Men Running Sneakers"
        className="text-6xl font-medium leading-tight font-custom"
      />
      <Paragraph
        text="Performance and design. Taken right to the edge"
        className="text-base font-normal opacity-80"
      />
      <button className="w-fit px-6 py-2 bg-white text-black font-semibold rounded-full mt-2 hover:bg-gray-200 transition">
        Shop Now
      </button>
    </div>
  );
}

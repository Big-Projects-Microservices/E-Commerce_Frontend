import { Paragraph, Link } from "@atoms";

export default function TextBlock() {
  return (
    <div className="flex flex-col gap-4 text-white">
      <Paragraph
        text="Adidas Men Running Sneakers"
        className="text-[clamp(20px,2vw,55px)] font-normal leading-tight font-custom"
      />
      <Paragraph
        text="Performance and design. Taken right to the edge"
        className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-normal opacity-80"
      />
      <Link
        className="w-fit px-6 py-2 bg-white text-black font-semibold rounded-full mt-2 hover:bg-gray-200 transition"
        href="./shop"
        text="Shop Now"
      />
    </div>
  );
}

export default function PriceText({ current, discount }) {
  return (
    <p className="text-sm my-1.5">
      <span className="font-bold text-black mr-1.5">{current}</span>
      <span className="text-red-600 font-bold">{discount}</span>
    </p>
  );
}

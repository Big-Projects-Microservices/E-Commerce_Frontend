export default function Input({ width = "", height = "", text, placeholder }) {
  return (
    <div className="flex, p-6">
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-l px-4"
        style={{ width, height }}
      />
      <button className="bg-sky-600 text-white px-4 rounded-r text-sm w-32 h-16">
        {text}
      </button>
    </div>
  );
}

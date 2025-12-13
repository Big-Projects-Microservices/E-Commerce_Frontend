export default function Input({
  width = "",
  height = "",
  text,
  placeholder,
  name,
}) {
  return (
    <div className="flex p-6">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="border border-gray-300 rounded-l px-4"
        style={{ width, height }}
      />
      <button className="bg-sky-600 text-white px-4 rounded-r text-[20px] w-32 h-16">
        {text}
      </button>
    </div>
  );
}

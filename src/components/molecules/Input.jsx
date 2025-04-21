export default function Input({ placeholder, text }) {
  return (
    <form className="max-w-xs mx-auto font-sans">
      <div className="flex">
        <input
          id="voucher"
          type="text"
          placeholder={placeholder}
          className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
        />
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          {text}
        </button>
      </div>
    </form>
  );
}

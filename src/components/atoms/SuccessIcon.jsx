export default function SuccessIcon({ className = "" }) {
  return (
    <div
      className={`relative flex h-24 w-24 items-center justify-center rounded-full bg-sky-500 ${className}`}
    >
      <span className="absolute inset-0 rounded-full border-4 border-sky-200/70 animate-ping" />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="relative h-10 w-10 text-white"
        aria-hidden="true"
      >
        <path
          d="M6 12.5L10 16.5L18 8.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

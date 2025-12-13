import { useState } from "react";

export default function Button({
  initialText,
  clickedText,
  onClick,
  dependencies,
  style,
  disabled: externalDisabled = false,
}) {
  const [text, setText] = useState(initialText);
  const [isTemporarilyDisabled, setIsTemporarilyDisabled] = useState(false);

  const isDisabled = externalDisabled || isTemporarilyDisabled;

  const baseClasses =
    "font-semibold text-xl rounded-md border-none h-[58px] transition-all duration-300 px-6 w-full flex items-center justify-center relative top-[20px]";

  const stateClasses = isDisabled
    ? "text-[#282828] bg-white border border-[#282828] cursor-default opacity-75"
    : "text-white bg-[#0d50ff] hover:bg-[#282828] hover:cursor-pointer";

  const handleClick = () => {
    setIsTemporarilyDisabled(true);

    setText(clickedText);

    onClick(dependencies);

    setTimeout(() => {
      setText(initialText);
      setIsTemporarilyDisabled(false);
    }, 1000);
  };

  return (
    <button
      className={`${baseClasses} ${stateClasses}`}
      onClick={handleClick}
      disabled={isDisabled}
      style={style}
    >
      {text}
    </button>
  );
}

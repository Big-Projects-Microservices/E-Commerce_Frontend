import React from 'react';

const TextArea = ({
  label,
  id,
  name,
  value = '',
  onChange,
  placeholder = '',
  required = false,
  rows = 5,
  className = '',
  textareaClassName = '',
  labelClassName = '',
  ...props
}) => {
  const textareaId = id || name;

  return (
    <div className={`flex w-full flex-col gap-2 ${className}`.trim()}>
      {label ? (
        <label
          htmlFor={textareaId}
          className={`text-sm font-medium capitalize text-slate-700 ${labelClassName}`.trim()}
        >
          {label}
        </label>
      ) : null}

      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 ${textareaClassName}`.trim()}
        {...props}
      />
    </div>
  );
};

export default TextArea;
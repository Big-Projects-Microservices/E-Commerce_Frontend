
const InputField = ({
  label,
  id,
  name,
  type = 'text',
  value = '',
  onChange,
  placeholder = '',
  required = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  ...props
}) => {
  const inputId = id || name;

  return (
    <div className={`flex w-full flex-col gap-2 ${className}`.trim()}>
      {label ? (
        <label
          htmlFor={inputId}
          className={`text-sm font-medium capitalize text-slate-700 ${labelClassName}`.trim()}
        >
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 ${inputClassName}`.trim()}
        {...props}
      />
    </div>
  );
};

export default InputField;
import React from "react";

function InputField({
  type,
  value,
  name,
  onChange,
  onFocus,
  onBlur,
  className,
  placeholder,
  error,
}) {
  if (!className) {
    className = `
        font-sans 
        block 
        text-sm 
        leading-5 
        w-full 
        py-2 
        px-3 
        border-2 
        border-indigo-400 
        text-slate-500 
        rounded-lg 
        shadow-sm 
        focus:outline-none 
        focus:ring 
        focus:ring-rindigo-200 
        focus:border-indigo-500 
        dark:text-slate-400 
        dark:placeholder:text-slate-600 
        dark:bg-slate-900 
        dark:border-rose-500 
        dark:focus:ring-rose-900 
        dark:focus:border-rose-600
    `;
  }

  return (
    <div>
      <input
        className={className}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error ? (
        <div className="mt-3 pl-1 transition-all ease-in-out delay-150">
          <label className="text-xs font-medium text-rose-500 flex items-center justify-start gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            Lütfen bir kullanıcı adı yazınız..
          </label>
        </div>
      ) : null}
    </div>
  );
}

export default InputField;

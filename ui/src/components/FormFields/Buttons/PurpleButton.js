import React from "react";

function PurpleButton({
  style,
  className,
  onClick,
  title,
  name,
  type,
  styleClass,
  disabled,
}) {
  if (!className) {
    className = `
      w-full
      text-white 
      bg-gradient-to-r 
      from-purple-500 
      via-purple-600 
      to-purple-700 
      hover:bg-gradient-to-br 
      focus:ring-4 
      focus:outline-none 
      focus:ring-purple-300 
      dark:focus:ring-purple-800 
      font-medium 
      rounded-lg 
      text-sm 
      px-5
      py-2.5 
      text-center 
      mr-2 
      mb-2
    `;
  }
  return (
    <button
      className={className + styleClass}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default PurpleButton;

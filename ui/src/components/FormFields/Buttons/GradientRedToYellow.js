import React from "react";

function GradientRedToYelloweButton({
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
        text-gray-900
        bg-gradient-to-r
        from-red-200
        via-red-300
        to-yellow-200
        hover:bg-gradient-to-bl
        focus:ring-4
        focus:outline-none
        focus:ring-red-100
        dark:focus:ring-red-400
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

export default GradientRedToYelloweButton;

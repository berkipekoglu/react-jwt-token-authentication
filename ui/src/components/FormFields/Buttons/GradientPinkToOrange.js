import React from "react";

function GradientPinkToOrangeButton({ style, className, onClick, title, name, type }) {
  if (!className) {
    className = `
      w-full
      text-white 
      bg-gradient-to-br 
      from-pink-500 
      to-orange-400 
      hover:bg-gradient-to-bl 
      focus:ring-4 
      focus:outline-none 
      focus:ring-pink-200 
      dark:focus:ring-pink-800 
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
    <button className={className} style={style} onClick={onClick}>
      {title}
    </button>
  );
}

export default GradientPinkToOrangeButton;

import React from "react";

function CyanButton({ style, className, onClick, title, name, type }) {
  if (!className) {
    className = `
      w-full
      text-white 
      bg-gradient-to-r 
      from-cyan-400 
      via-cyan-500 
      to-cyan-600 
      hover:bg-gradient-to-br 
      focus:ring-4 
      focus:outline-none 
      focus:ring-cyan-300 
      dark:focus:ring-cyan-800 
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

export default CyanButton;

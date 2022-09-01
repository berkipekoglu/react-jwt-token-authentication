import React from "react";

function PinkButton({ style, className, onClick, title, name, type }) {
  if (!className) {
    className = `
      w-full
      text-white 
      bg-gradient-to-r 
      from-pink-400 
      via-pink-500 
      to-pink-600 
      hover:bg-gradient-to-br 
      focus:ring-4 
      focus:outline-none 
      focus:ring-pink-300 
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

export default PinkButton;

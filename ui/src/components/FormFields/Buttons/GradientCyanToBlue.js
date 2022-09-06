import React from "react";

function GradientCyanToBlueButton({ style, className, onClick, title, name, type, styleClass }) {
  if (!className) {
    className = `
      w-full
      text-white 
      bg-gradient-to-r 
      from-cyan-500 
      to-blue-500 
      hover:bg-gradient-to-bl 
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
    <button className={className + styleClass} style={style} onClick={onClick}>
      {title}
    </button>
  );
}

export default GradientCyanToBlueButton;

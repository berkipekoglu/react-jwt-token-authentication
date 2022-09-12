import React from "react";
import InputField from "./InputField";

function InputGroup({ label, input }) {
    if(!label.className){
        
    }
    label.className = `
            text-sm
            text-gray-700
            block
            mb-1
            font-medium
        `
  return (
    <div>
      <label {...label} >{label?.text}</label>
      <InputField {...input} />
    </div>
  );
}

export default InputGroup;

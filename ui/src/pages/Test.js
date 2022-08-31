import React from "react";
import { useSelector } from "react-redux";

function Test() {
  const check_token = useSelector((state) => state.token.token);
  return (
    <div>
      Test
      <div>Test Token: {check_token}</div>
    </div>
  );
}

export default Test;

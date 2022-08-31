import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function HomePage() {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    dispatch({
      type: "login",
      payload: "",
    });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Homepage</h1>
      <h2>Token: {token}</h2>
      <Link to="/test">Test Sayfası</Link>
      <button onClick={() => logout()}>LOGOUT</button>
    </div>
  );
}

export default HomePage;

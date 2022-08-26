import React from "react";

function HomePage() {
  const logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
  };
  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={() => logout()}>LOGOUT</button>
    </div>
  );
}

export default HomePage;

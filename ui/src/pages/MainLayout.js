import React from "react";
import Operations from "./Operations";
import Sidebar from "./Sidebar";

function MainLayout(props) {
  return (
        <div className="container h-full flex flex-col">
          <Sidebar />
          <div className="flex h-full w-full mt-10">{props.children}</div>
        </div>
  );
}

export default MainLayout;

// import React from "react";
// import { BrowserRouter, Navigate, useNavigate } from "react-router-dom";

// const RouteGuard = ({ component: Component, ...rest }) => {

//   function hasJWT() {
//     let flag = false;

//     //check user has JWT token
//     localStorage.getItem("token") ? (flag = true) : (flag = false);

//     return flag;
//   }

//   return (
//     // <BrowserRouter
//     //   {...rest}
//     //   render={(props) =>
//     //     hasJWT() ? (
//     //       <Component {...props} />
//     //     ) : (
//     //       navigate("/login")
//     //     )
//     //   }
//     // />
//    hasJWT() ? <Navigate to="/" /> : <Navigate to="/login" />
//   );
// };

// export default RouteGuard;
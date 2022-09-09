import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../pages/Login";
import Test from "../pages/Test";
import MainLayout from "../pages/MainLayout";
import Operations from "../pages/Operations";
import Organization from "../pages/Organization";
import { refresh } from "../api/lib/tokenApi";

function RouteControl({ children }) {
  //const navigate = useNavigate();

  //   function hasJWT() {
  //     let flag = false;

  //     //check user has JWT token
  //     localStorage.getItem("token") ? (flag = true) : (flag = false);

  //     return flag;
  //   }

  const check_token = useSelector((state) => state.token.token);

  let navigate = useNavigate();
  let token;

  useEffect(() => {
    token = localStorage.getItem("token");
    console.log("Kontrol sağlandı", token);
    console.log("Check Token: " + check_token);
    if (token === null) {
      console.log("Login yönlendirme");
      navigate("/login", { replace: true });
    } else if (token) {
      console.log("refresh token")
      let refreshToken = localStorage.getItem("refresh");
      refresh(refreshToken)
      .then(response => {
        localStorage.setItem("token", response.data.access)
        console.log("REFRESH: ", response.data)
      })
      .catch(err => {
        console.log("ERR RESP", err.response.data)
        console.log("Token Not Valid", err.response.response.data.code)
        if(err.response.response.data.code === "token_not_valid"){
          console.log("Token Not Valid", err.response.response.data.code)
          //navigate("/login", { replace: true });
        } else {
          console.log("Catch oldu, token refresh et.")
        }
      })
    }
  }, [check_token, token]);

  return (
    <MainLayout>
      <Routes>
        {/* <RouteGuard exact path="/" component={HomePage} /> */}
        <Route path="/" element={<Operations />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </MainLayout>
  );
}

export default RouteControl;

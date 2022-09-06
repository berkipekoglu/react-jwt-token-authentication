import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../pages/Login";
import Test from "../pages/Test";
import MainLayout from "../pages/MainLayout";
import Operations from "../pages/Operations";

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
    }
  }, [check_token, token]);

  return (
    <MainLayout>
      <Routes>
        {/* <RouteGuard exact path="/" component={HomePage} /> */}
        <Route path="/" element={<Operations />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </MainLayout>
  );
}

export default RouteControl;

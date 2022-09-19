import React, { useEffect, useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../pages/Login";
import MainLayout from "../pages/MainLayout";
import Operations from "../pages/Operations";
import Organization from "../pages/Organization";
import { getToken, refresh } from "../api/lib/tokenApi";
import Users from "../pages/Users";
import setAuthToken from "../helpers/setAuthToken";
import Logs from "../pages/Logs";

function RouteControl({ children }) {
  //const navigate = useNavigate();

  //   function hasJWT() {
  //     let flag = false;

  //     //check user has JWT token
  //     localStorage.getItem("token") ? (flag = true) : (flag = false);

  //     return flag;
  //   }

  //const check_token = useSelector((state) => state.token.token);

  let navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  let isLogin = false;

  //const getToken = useSelector(state => state.token.token)
  useEffect(() => {
    console.log("Kontrol yapılıyor")
    setToken(localStorage.getItem("token"));
    setAuthToken(token)
    if(token === null){
      navigate("/login", {replace: true})
    }
  }, [token])




  // useEffect(() => {
  //   // console.log("effect çalıştı");
  //   // let isApiSubscribed = true;
  //   // token = localStorage.getItem("token");
  //   // if (isApiSubscribed) {
  //   //   console.log("if girdi");
  //   //   if (token) {
  //   //     console.log("BURASI ÇALIŞTI")
  //   //     navigate("/login", { replace: true });
  //   //   } else {
  //   //     console.log("BURASI 2 ÇALIŞTI")
  //   //     checkToken();
  //   //   }
  //   // }
  //   // return () => {
  //   //   isApiSubscribed = false;
  //   // };
  //   checkToken();
  // }, []);



  // useEffect(() => {
  //   const myToken = localStorage.getItem("token");
  //   console.log("girdi")
  //   if (myToken) {
  //     console.log("Token var");
  //   } else {
  //     console.log("token yok");
  //     navigate("/login", { replace: true });
  //   }
  // }, []);

  // const checkToken = () => {
  //   token = localStorage.getItem("token");
  //   if (token === null) {
  //     console.log("Login yönlendirme");
  //     navigate("/login", { replace: true });
  //   } else if (token) {
  //     console.log("refresh token");
  //     let refreshToken = localStorage.getItem("refresh");
  //     refresh(refreshToken)
  //       .then((response) => {
  //         localStorage.setItem("token", response.data.access);
  //         setAuthToken(token);
  //         console.log("REFRESH: ", response.data);
  //       })
  //       .catch((err) => {
  //         console.log("ERR RESP", err.response.data);
  //         localStorage.clear();
  //         navigate("/login", { replace: true });
  //         // console.log("Token Not Valid", err.response.response.data.code)
  //         // if(err.response.response.data.code === "token_not_valid"){
  //         //   console.log("Token Not Valid", err.response.response.data.code)
  //         //   //navigate("/login", { replace: true });
  //         // } else {
  //         //   console.log("Catch oldu, token refresh et.")
  //         // }
  //       });
  //   } else {
  //     console.log("ELSE");
  //   }
  //   setToken(localStorage.getItem("token"));
  //   console.log("test: ", token);
  // };

  return (
    <>
      <Routes>
        {/* <RouteGuard exact path="/" component={HomePage} /> */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Operations />
            </MainLayout>
          }
        />
        <Route
          path="/organization"
          element={
            <MainLayout>
              <Organization />
            </MainLayout>
          }
        />

        <Route
          path="/users"
          element={
            <MainLayout>
              <Users />
            </MainLayout>
          }
        />
        <Route
          path="/logs"
          element={
            <MainLayout>
              <Logs />
            </MainLayout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default RouteControl;

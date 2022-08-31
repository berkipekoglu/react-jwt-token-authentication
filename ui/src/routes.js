import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteGuard from "./components/RouteGuards";

//history
//pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";

import { useSelector } from "react-redux/es/exports";

const MyRoutes = () => {
  const token = useSelector((state) => state.token);

  if (token) {
  }

  return (
      <Routes>
        {/* <RouteGuard exact path="/" component={HomePage} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
};

export default MyRoutes;

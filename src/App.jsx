import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import AppRoutes from "./Route";
import "./App.scss";
import { AppContext } from "../Context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
const App = () => {
  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;

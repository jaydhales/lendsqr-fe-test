import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { DashBoard, Users, User, Login, NotFound } from "./Pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <DashBoard />
          </Protected>
        }
      >
        <Route index element={<Users />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="login" element={<Login />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const Protected = ({ children }) => {
  const { localData } = useContext(AppContext);

  return localData?.isLoggedIn ? <>{children}</> : <Login />;
};

export default AppRoutes;

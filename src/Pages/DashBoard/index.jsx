import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";


const DashBoard = () => {
  const { handleLogout } = useContext(AppContext);
  return (
    <div>
      DashBoard
      <Outlet />
      <button onClick={(e) => handleLogout()}>Logout here</button>
    </div>
  );
};

export default DashBoard;

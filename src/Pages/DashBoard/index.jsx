import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { DashBoardHeader } from "../../Components/index.jsx";

import "./DashBoard.scss";

const DashBoard = () => {
  const { handleLogout } = useContext(AppContext);
  return (
    <div className="DashBoard">
      <DashBoardHeader />

      <div className="DashBoard-main">
        <Outlet />
      </div>

      <button onClick={(e) => handleLogout()}>Logout here</button>
    </div>
  );
};

export default DashBoard;

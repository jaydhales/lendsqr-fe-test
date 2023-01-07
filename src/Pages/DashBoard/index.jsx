import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { DashBoardHeader, DashboardSideBar } from "../../Components";

import "./DashBoard.scss";

const DashBoard = () => {
  return (
    <div className="DashBoard">
      <div className="DashBoard-Header">
        <DashBoardHeader />
      </div>

      <div className="DashBoard-SideBar">
        <DashboardSideBar />
      </div>

      <div className="DashBoard-Main">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;

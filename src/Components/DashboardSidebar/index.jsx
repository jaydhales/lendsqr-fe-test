import React, { useContext } from "react";

import {
  FaUserFriends,
  FaHome,
  FaBriefcase,
  FaChevronDown,
  FaUsers,
  FaRegHandshake,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaDollarSign,
  FaUserCheck,
  FaUserTimes,
  FaBuilding,
  FaCoins,
  FaUserCog,
  FaScroll,
  FaChartBar,
  FaSlidersH,
  FaClipboardList,
  FaSignOutAlt,
  FaComment,
  FaMoneyCheck,
  FaServicestack,
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import "./DashBoardSidebar.scss";

const DashBoardSidebar = () => {
  const { handleLogout } = useContext(AppContext);
  const { pathname } = useLocation();

  console.log(pathname === "/");
  return (
    <div className="DashBoardSidebar">
      <a href="#" className="org-switch">
        <FaBriefcase />
        Switch Organization
        <FaChevronDown />
      </a>

      <a href="#">
        <FaHome />
        Dashboard
      </a>

      <div className="nav-section">
        <p className="nav-heading">Customers</p>
        <NavLink to="/users"
          className={`nav-links ${
            pathname === "/users" || pathname === "/" ? "active" : ""
          }`}
        >
          <FaUserFriends />
          Users
        </NavLink>
        <NavLink to="/Guarantors" className="nav-links">
          <FaUsers />
          Guarantors
        </NavLink>
        <NavLink to="/Loans" className="nav-links">
          <FaDollarSign />
          Loans
        </NavLink>
        <NavLink to="/Decision Models" className="nav-links">
          <FaRegHandshake />
          Decision Models
        </NavLink>
        <NavLink to="/Savings" className="nav-links">
          <FaPiggyBank />
          Savings
        </NavLink>
        <NavLink to="/Loan Requests" className="nav-links">
          <FaHandHoldingUsd />
          Loan Requests
        </NavLink>
        <NavLink to="/Whitelist" className="nav-links">
          <FaUserCheck />
          Whitelist
        </NavLink>
        <NavLink to="/Karma" className="nav-links">
          <FaUserTimes />
          Karma
        </NavLink>
      </div>
      <div className="nav-section">
        <p className="nav-heading">Businesses</p>
        <NavLink to="/Organization" className="nav-links">
          <FaBriefcase />
          Organization
        </NavLink>
        <NavLink to="/Loan Products" className="nav-links">
          <FaHandHoldingUsd />
          Loan Products
        </NavLink>
        <NavLink to="/Savings Products" className="nav-links">
          <FaBuilding />
          Savings Products
        </NavLink>
        <NavLink to="/Fees and Charges" className="nav-links">
          <FaCoins />
          Fees and Charges
        </NavLink>
        <NavLink to="/Transactions" className="nav-links">
          <FaMoneyCheck />
          Transactions
        </NavLink>
        <NavLink to="/Services" className="nav-links">
          <FaServicestack />
          Services
        </NavLink>
        <NavLink to="/Service Account" className="nav-links">
          <FaUserCog />
          Service Account
        </NavLink>
        <NavLink to="/Settlements" className="nav-links">
          <FaScroll />
          Settlements
        </NavLink>
        <NavLink to="/Reports" className="nav-links">
          <FaChartBar />
          Reports
        </NavLink>
      </div>
      <div className="nav-section">
        <p className="nav-heading">Settings</p>
        <NavLink to="/Preferences" className="nav-links">
          <FaSlidersH />
          Preferences
        </NavLink>
        <NavLink to="/Fees and Pricing" className="nav-links">
          <FaClipboardList />
          Fees and Pricing
        </NavLink>
        <NavLink to="/Audit Logs" className="nav-links">
          <FaClipboardList />
          Audit Logs
        </NavLink>
        <NavLink to="/Systems Messages" className="nav-links">
          <FaComment />
          Systems Messages
        </NavLink>
      </div>

      <div className="nav-section nav-footer">
        <a href="/" className="nav-links" onClick={(e) => handleLogout()}>
          <FaSignOutAlt />
          Logout
        </a>

        <small>v1.2.0</small>
      </div>
    </div>
  );
};

export default DashBoardSidebar;

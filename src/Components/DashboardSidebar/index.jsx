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
} from "react-icons/fa";
import { AppContext } from "../../Context/AppContext";
import "./DashBoardSidebar.scss";

const DashBoardSidebar = () => {
  const { handleLogout } = useContext(AppContext);
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
        <a href="#" className="nav-links active">
          <FaUserFriends />
          Users
        </a>
        <a href="#" className="nav-links">
          <FaUsers />
          Guarantors
        </a>
        <a href="#" className="nav-links">
          <FaDollarSign />
          Loans
        </a>
        <a href="#" className="nav-links">
          <FaRegHandshake />
          Decision Models
        </a>
        <a href="#" className="nav-links">
          <FaPiggyBank />
          Savings
        </a>
        <a href="#" className="nav-links">
          <FaHandHoldingUsd />
          Loan Requests
        </a>
        <a href="#" className="nav-links">
          <FaUserCheck />
          Whitelist
        </a>
        <a href="#" className="nav-links">
          <FaUserTimes />
          Karma
        </a>
      </div>
      <div className="nav-section">
        <p className="nav-heading">Businesses</p>
        <a href="#" className="nav-links">
          <FaBriefcase />
          Organization
        </a>
        <a href="#" className="nav-links">
          <FaHandHoldingUsd />
          Loan Products
        </a>
        <a href="#" className="nav-links">
          <FaBuilding />
          Savings Products
        </a>
        <a href="#" className="nav-links">
          <FaCoins />
          Fees and Charges
        </a>
        <a href="#" className="nav-links">
          Transactions
        </a>
        <a href="#" className="nav-links">
          Services
        </a>
        <a href="#" className="nav-links">
          <FaUserCog />
          Service Account
        </a>
        <a href="#" className="nav-links">
          <FaScroll />
          Settlements
        </a>
        <a href="#" className="nav-links">
          <FaChartBar />
          Reports
        </a>
      </div>
      <div className="nav-section">
        <p className="nav-heading">Settings</p>
        <a href="#" className="nav-links">
          <FaSlidersH />
          Preferences
        </a>
        <a href="#" className="nav-links">
          <FaClipboardList />
          Fees and Pricing
        </a>
        <a href="#" className="nav-links">
          <FaClipboardList /> Audit Logs
        </a>
        <a href="#" className="nav-links">
          Systems Messages
        </a>
      </div>

      <div className="nav-section nav-footer">
        <a href="#" className="nav-links" onClick={(e) => handleLogout()}>
          <FaSignOutAlt />
          Logout
        </a>
      </div>
    </div>
  );
};

export default DashBoardSidebar;

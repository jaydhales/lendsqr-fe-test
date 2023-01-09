import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import {
  IoIosNotificationsOutline,
  IoMdArrowDropdown,
  IoMdSearch,
} from "react-icons/io";

import "./DashBoardHeader.scss";
import { AppContext } from "../../Context/AppContext";

const DashBoardHeader = () => {
  const [searchInput, setSearchInput] = useState("");
  const [adminData, setAdminData] = useState(
    JSON.parse(localStorage.getItem("adminData")) || null
  );
  const { localData, getAdminDetails } = useContext(AppContext);

  useEffect(() => {
    async function fetchAdminData() {
      const result = await getAdminDetails(localData?.id);
      setAdminData(result);
    }

    fetchAdminData();
  }, [localData]);

  return (
    <div className="DashBoardHeader">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="search-bar">
        <label htmlFor="search" className="form-group">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for Anything"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            // required
          />
        </label>

        <button className="btn btn-green">
          <IoMdSearch />
        </button>
      </div>

      <div className="menu-tab">
        <a href="#">Docs</a>
        <a href="" className="bell-icon">
          <IoIosNotificationsOutline />
        </a>

        <div className="profile">
          <div className="profile-img">
            <img src={adminData?.profile?.avatar} alt="" />
          </div>

          <p className="profile-name">{adminData?.userName}</p>

          <div className="profile-dropdown">
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;

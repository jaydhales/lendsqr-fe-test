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
  const { localData, getAdminDetails } = useContext(AppContext);

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  useEffect(() => {
    getAdminDetails(localData?.id);
  }, []);

  if (userDetails === null) return null;

  const { userName, profile } = userDetails;

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
            <img src={profile.avatar} alt="" />
          </div>

          <p className="profile-name">{userName}</p>

          <div className="profile-dropdown">
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;

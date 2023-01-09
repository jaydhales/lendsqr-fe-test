import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FaEye, FaUserCheck, FaUserTimes } from "react-icons/fa";

const TableItem = ({ user, showMenuId, setShowMenuId }) => {
  const handleShowMenu = (id) => {
    if (showMenuId === id) {
      setShowMenuId(null);
    } else {
      setShowMenuId(id);
    }
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    const onlyDate = newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    const onlyTime = newDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "numeric",
      hour12: true,
    });

    return onlyDate + "   " + onlyTime;
  };

  return (
    <div className="Users-List-Item Row">
      <p>{user?.orgName}</p>
      <p>{user?.userName}</p>
      <p>{user?.email}</p>
      <p>{user?.phoneNumber}</p>
      <p>{formatDate(user?.createdAt)}</p>
      <p className="status">Inactive</p>

      <div className="Users-List-Item-Actions">
        <button onClick={(e) => handleShowMenu(user?.id)}>
          <FiMoreVertical />
        </button>
        {showMenuId === user?.id && (
          <div className="menu box">
            <a href={"/user/" + user?.id}>
              <FaEye /> View Details
            </a>
            <button>
              <FaUserTimes /> Blacklist User
            </button>
            <button>
              <FaUserCheck /> Activate User
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableItem;

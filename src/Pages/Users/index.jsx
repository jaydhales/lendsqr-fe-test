import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import "./Users.scss";
import statsIcon1 from "../../assets/stats-icon-1.svg";
import statsIcon2 from "../../assets/stats-icon-2.svg";
import statsIcon3 from "../../assets/stats-icon-3.svg";
import statsIcon4 from "../../assets/stats-icon-4.svg";
import { FiMoreVertical } from "react-icons/fi";
import { FaEye, FaUserCheck, FaUserCircle, FaUserTimes } from "react-icons/fa";

const Users = () => {
  const { localData, getUsersData } = useContext(AppContext);
  const [usersData, setUsersData] = useState(
    JSON.parse(localStorage.getItem("usersData")) || null
  );
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = usersData?.length;
  const totalPages = Math.ceil(totalItems / itemPerPage);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = usersData?.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentItems);

  useEffect(() => {
    async function fetchUsersData() {
      const result = await getUsersData(localData?.id);
      setUsersData(result);
    }

    fetchUsersData();
  }, [localData]);

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
    <div className="Users">
      <h2>Users</h2>
      <div className="Users-Stats">
        <div className="box">
          <div className="icon">
            <img src={statsIcon1} alt="Icon" />
          </div>
          <p>Users</p>
          <h2>2,453</h2>
        </div>
        <div className="box">
          <div className="icon">
            <img src={statsIcon2} alt="Icon" />
          </div>
          <p>Active Users</p>
          <h2>2,453</h2>
        </div>
        <div className="box">
          <div className="icon">
            <img src={statsIcon3} alt="Icon" />
          </div>
          <p>Users with Loans</p>
          <h2>12,453</h2>
        </div>
        <div className="box">
          <div className="icon">
            <img src={statsIcon4} alt="Icon" />
          </div>
          <p>Users with Savings</p>
          <h2>102,453</h2>
        </div>
      </div>

      <div className="Users-List box">
        <div className="Users-List-Header Row">
          <h3>Organization</h3>
          <h3>Username</h3>
          <h3>Email</h3>
          <h3>Phone number</h3>
          <h3>Date joined</h3>
          <h3>Status</h3>
        </div>

        {currentItems?.map((user) => (
          <div className="Users-List-Item Row" key={user?.id}>
            <p>{user?.orgName}</p>
            <p>{user?.userName}</p>
            <p>{user?.email}</p>
            <p>{user?.phoneNumber}</p>
            <p>{formatDate(user?.createdAt)}</p>
            <p className="status">Inactive</p>

            {/* <div className="Users-List-Item-Actions">
            <button>
              <FiMoreVertical />
            </button>

            <div className="menu box">
              <button>
                <FaEye /> View Details
              </button>
              <button>
                <FaUserTimes /> Blacklist User
              </button>
              <button>
                <FaUserCheck /> Activate User
              </button>
            </div>
          </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

import { TableItem, Filter } from "./../../Components";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import "./Users.scss";
import statsIcon1 from "../../assets/stats-icon-1.svg";
import statsIcon2 from "../../assets/stats-icon-2.svg";
import statsIcon3 from "../../assets/stats-icon-3.svg";
import statsIcon4 from "../../assets/stats-icon-4.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Users = () => {
  const { localData, getUsersData } = useContext(AppContext);
  const [usersData, setUsersData] = useState(
    JSON.parse(localStorage.getItem("usersData")) || null
  );

  const [currentData, setCurrentData] = useState(usersData);
  const [showMenuId, setShowMenuId] = useState(null);
  const [userStats, setUserStats] = useState({});
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = currentData?.length;
  const totalPages = Math.ceil(totalItems / itemPerPage);

  const dividePages = (divider) => {
    let result = [];
    if (divider >= totalItems) return [totalItems];
    for (let i = 1; i <= divider; i++) {
      const item = Math.ceil((i / divider) * totalItems);
      result.push(item);
    }

    return result;
  };

  const paginate = (num) => {
    let result = [];
    for (let i = 1; i <= num; i++) {
      result.push(i);
    }
    return result;
  };

  const handlePageChange = (action) => {
    if (action === "next") {
      setCurrentPage(currentPage + 1);
    } else if (action === "prev") {
      setCurrentPage(currentPage - 1);
    }
  };

  const calculateStatsData = () => {
    let totalUser = usersData.length;
    let activeUser = 0;
    let userWithLoans = 0;
    let userWithSavings = 0;

    usersData.forEach((user) => {
      user.accountBalance - user.education.loanRepayment > 0
        ? userWithSavings++
        : userWithLoans++;

      new Date(user.lastActiveDate) - new Date(user.createdAt) > 0
        ? activeUser++
        : null;
    });

    return {
      totalUser,
      activeUser,
      userWithLoans,
      userWithSavings,
    };
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = currentData?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    async function fetchUsersData() {
      const result = await getUsersData(localData?.id);
      setUsersData(result);
    }

    fetchUsersData();
  }, [localData]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [itemPerPage]);

  useEffect(() => {
    setUserStats(calculateStatsData());
  }, [usersData]);

  return (
    <div className="Users">
      <h2>Users</h2>
      <div className="Users-Stats">
        <div className="box">
          <div className="icon">
            <img src={statsIcon1} alt="Icon" />
          </div>
          <p>Users</p>
          <h2>{userStats.totalUser}</h2>
        </div>
        <div className="box">
          <div className="icon">
            <img src={statsIcon2} alt="Icon" />
          </div>
          <p>Active Users</p>
          <h2>{userStats.activeUser}</h2>
        </div>
        <div className="box">
          <div className="icon">
            <img src={statsIcon3} alt="Icon" />
          </div>
          <p>Users with Loans</p>
          <h2>{userStats.userWithLoans}</h2>
        </div>
        <div className="box">
          <div className="icon">
            <img src={statsIcon4} alt="Icon" />
          </div>
          <p>Users with Savings</p>
          <h2>{userStats.userWithSavings}</h2>
        </div>
      </div>

      <div className="Users-List box">
        <Filter
          usersData={usersData}
          currentData={currentData}
          setCurrentData={setCurrentData}
        />
        <div className="Users-List-Container">
          <div className="Users-List-Header Row">
            <h3>Organization</h3>
            <h3>Username</h3>
            <h3>Email</h3>
            <h3>Phone number</h3>
            <h3>Date joined</h3>
            <h3>Status</h3>
          </div>

          {currentItems?.map((user) => (
            <TableItem
              user={user}
              key={"user-" + user?.id}
              showMenuId={showMenuId}
              setShowMenuId={setShowMenuId}
            />
          ))}
        </div>
      </div>

      <div className="Users-List-Page-Control">
        <div className="item-per-page">
          <p>Showing</p>
          <div className="bg-grey">
            <select
              onChange={(e) => setItemPerPage(e.target.value)}
              value={itemPerPage}
            >
              {totalItems > 5 && <option value="10">10</option>}
              {dividePages(5).map((value) => (
                <option value={value} key={"page-" + value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <p>out of {totalItems}</p>
        </div>
        <div className="pagination">
          <button
            className="bg-grey"
            onClick={(e) => handlePageChange("prev")}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          {paginate(totalPages).map((num) => (
            <button
              key={"paginate-" + num}
              onClick={(e) => setCurrentPage(num)}
              className={`page-num ${currentPage === num && "active"}`}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-grey"
            onClick={(e) => handlePageChange("next")}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;

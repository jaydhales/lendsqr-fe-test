import { TableItem } from "./../../Components";
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
  const [showMenuId, setShowMenuId] = useState(null);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = usersData?.length;
  const totalPages = Math.ceil(totalItems / itemPerPage);

  const dividePages = (divider) => {
    let result = [];
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

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = usersData?.slice(indexOfFirstItem, indexOfLastItem);

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
              key={user?.id}
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
              <option value="10">10</option>
              {dividePages(5).map((value) => (
                <option value={value} key={value}>
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
              key={num}
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

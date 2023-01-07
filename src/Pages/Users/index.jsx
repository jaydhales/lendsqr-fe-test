import React from "react";
import "./Users.scss";
import statsIcon1 from "../../assets/stats-icon-1.svg";
import statsIcon2 from "../../assets/stats-icon-2.svg";
import statsIcon3 from "../../assets/stats-icon-3.svg";
import statsIcon4 from "../../assets/stats-icon-4.svg";
import { FiMoreVertical } from "react-icons/fi";
import { FaEye, FaUserCheck, FaUserCircle, FaUserTimes } from "react-icons/fa";

const Users = () => {
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

        

        <div className="Users-List-Item Row">
          <p>Lendsqr</p>
          <p>Adedeji</p>
          <p>adedeji@lendsqr.com</p>
          <p>08078903721</p>
          <p>May 15, 2020 10:00 AM</p>
          <p className="status">Inactive</p>

          <div className="Users-List-Item-Actions">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

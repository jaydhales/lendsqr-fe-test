import React, { useEffect, useState } from "react";

import "./Filter.scss";

const Filter = ({ usersData, currentData, setCurrentData }) => {
  const [orgs, setOrgs] = useState([]);
  const [filterValue, setFilterValue] = useState({
    orgName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    status: "",
  });
  //   console.log({ usersData });

  useEffect(() => {
    // get all organizations
    let orgArr = [];
    usersData.forEach(({ orgName }) => {
      if (!orgArr.includes(orgName)) {
        orgArr.push(orgName);
      }
    });

    setOrgs(orgArr);
  }, [usersData]);

  useEffect(() => {
    setCurrentData(
      usersData.filter((user) =>
        Object.keys(filterValue).every(
          (key) =>
            filterValue[key].toLowerCase() === "" ||
            user[key].toLowerCase().includes(filterValue[key].toLowerCase())
        )
      )
    );
  }, [filterValue]);

  return (
    <div className="box Filter">
      <label htmlFor="organization" className="Filter-Org">
        <p>Organization</p>
        <select
          className="form-group"
          name="organization"
          id="organization"
          value={filterValue.orgName}
          onChange={(e) =>
            setFilterValue({ ...filterValue, orgName: e.target.value })
          }
        >
          <option value=""> Show All </option>
          {orgs.map((org) => (
            <option value={org} key={"option-" + org}>
              {org}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="username" className="Filter-Username">
        <p>Username</p>
        <input
          className="form-group"
          type="text"
          name="username"
          value={filterValue.userName}
          onChange={(e) =>
            setFilterValue({ ...filterValue, userName: e.target.value })
          }
        />
      </label>
      <label htmlFor="email" className="Filter-Email">
        <p>Email</p>
        <input
          className="form-group"
          type="text"
          name="email"
          value={filterValue.email}
          onChange={(e) =>
            setFilterValue({ ...filterValue, email: e.target.value })
          }
        />
      </label>
      <label htmlFor="date" className="Filter-Date">
        <p>Date</p>
      </label>
      <label htmlFor="phone" className="Filter-Phone">
        <p>Phone Number</p>
        <input
          className="form-group"
          type="number"
          name="phone"
          value={filterValue.phoneNumber}
          onChange={(e) =>
            setFilterValue({ ...filterValue, phoneNumber: e.target.value })
          }
        />
      </label>
      <label htmlFor="status" className="Filter-Status">
        <p>Status</p>
      </label>
      <div className="Filter-Actions">
        <p>Reset</p>
      </div>
    </div>
  );
};

export default Filter;

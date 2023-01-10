import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import "./User.scss";

const User = () => {
  const { id } = useParams();
  const { localData, getUserDetails } = useContext(AppContext);

  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))?.[id] || null
  );

  useEffect(() => {
    async function fetchUserDetails() {
      const result = await getUserDetails(id);
      setUserDetails(result);
    }

    fetchUserDetails();
  }, [id]);

  return (
    <div className="User">
      <div className="User-Header">
        <h2>User</h2>
        <div className="User-Header-Actions">
          <button className="btn red">Blacklist User</button>
          <button className="btn green">Activate User</button>
        </div>
      </div>
      <div className="User-Profile box">
        <div className="User-Profile-Main">
          <div className="profile">
            <div className="avatar">
              <img src={userDetails?.profile.avatar} alt="" />
            </div>
            <div className="name-id">
              <h3>
                {userDetails?.profile.firstName} {userDetails?.profile.lastName}
              </h3>
              <p className="mt">{userDetails?.accountNumber}</p>
            </div>
          </div>

          <div className="tier">
            <p>User's Tier</p>
            <p className="mt">٭٭٭</p>
          </div>

          <div className="bank">
            <h3>₦ {userDetails?.accountBalance}</h3>
            <p className="mt">
              {userDetails?.profile.bvn}/{userDetails?.profile.address}
            </p>
          </div>
        </div>

        <div className="User-Profile-Nav">
          <a href="#" className="nav-links active">
            General Details
          </a>
          <a href="#" className="nav-links">
            Documents
          </a>
          <a href="#" className="nav-links">
            Bank Details
          </a>
          <a href="#" className="nav-links">
            Loans
          </a>
          <a href="#" className="nav-links">
            Savings
          </a>
          <a href="#" className="nav-links">
            App and System
          </a>
        </div>
      </div>
      <div className="User-Details box">
        <div className="personal-info">
          <h4>Personal Information</h4>
          <div className="row one">
            <div className="details">
              <small>full Name</small>
              <p>
                {userDetails?.profile.firstName} {userDetails?.profile.lastName}
              </p>
            </div>
            <div className="details">
              <small>Phone Number</small>
              <p>{userDetails?.profile.phoneNumber}</p>
            </div>
            <div className="details">
              <small>Email Address</small>
              <p>{userDetails?.email}</p>
            </div>
            <div className="details">
              <small>Bvn</small>
              <p>{userDetails?.profile.bvn}</p>
            </div>
            <div className="details">
              <small>Gender</small>
              <p>{userDetails?.profile.gender}</p>
            </div>
          </div>
          <div className="row">
            <div className="details">
              <small>Marital status</small>
              <p></p>
            </div>
            <div className="details">
              <small>Children</small>
              <p></p>
            </div>
            <div className="details">
              <small>Address</small>
              <p>{userDetails?.profile.address}</p>
            </div>
          </div>
        </div>
        <div className="professionals">
          <h4>Education and Employment</h4>
          <div className="row">
            <div className="details">
              <small>level of education</small>
              <p>{userDetails?.education.level}</p>
            </div>
            <div className="details">
              <small>employment status</small>
              <p>{userDetails?.education.employmentStatus}</p>
            </div>
            <div className="details">
              <small>sector of employment</small>
              <p>{userDetails?.education.sector}</p>
            </div>
            <div className="details">
              <small>Duration of employment</small>
              <p>{userDetails?.education.duration}</p>
            </div>
          </div>
          <div className="row">
            <div className="details">
              <small>office email</small>
              <p>{userDetails?.education.officeEmail}</p>
            </div>
            <div className="details">
              <small>Monthly income</small>
              <p>
                ₦{userDetails?.education.monthlyIncome[1]} {" - "} ₦
                {userDetails?.education.monthlyIncome[0]}
              </p>
            </div>
            <div className="details">
              <small>loan repayment</small>
              <p>₦{userDetails?.education.loanRepayment}</p>
            </div>
          </div>
        </div>
        <div className="socials">
          <h4>Socials</h4>
          <div className="row">
            <div className="details">
              <small>facebook</small>
              <p>{userDetails?.socials.facebook}</p>
            </div>
            <div className="details">
              <small>instagram</small>
              <p>{userDetails?.socials.instagram}</p>
            </div>
            <div className="details">
              <small>twitter</small>
              <p>{userDetails?.socials.twitter}</p>
            </div>
          </div>
        </div>
        <div className="guarantor">
          <h4>Guarantor</h4>
          <div className="row">
            <div className="details">
              <small>full Name</small>
              <p>
                {userDetails?.guarantor.firstName}{" "}
                {userDetails?.guarantor.lastName}
              </p>
            </div>
            <div className="details">
              <small>Phone Number</small>
              <p>{userDetails?.guarantor.phoneNumber}</p>
            </div>
            <div className="details">
              <small>Email Address</small>
              <p>{userDetails?.guarantor?.firstName}@gmail.com</p>
            </div>
            <div className="details">
              <small>Relationship</small>
              <p>
                {userDetails?.guarantor?.gender === "Male"
                  ? "Brother"
                  : "Sister"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

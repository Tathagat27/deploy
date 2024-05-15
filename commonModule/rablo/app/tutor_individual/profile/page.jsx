"use client";
import React, { useState, useEffect } from "react";
import "./styles/plans.css";
// import { Poppins } from 'next/font/google'
import SideNavBar from "../../GlobalComponents/SideNavBar_tutor/SideNavBar";
import TopBar from "../../GlobalComponents/TopBar_tutor/TopBar";
//Icons
import personIcon from "../../GlobalComponents/Assets_tutor/Images/Group 245.png";
import lockIcon from "../../GlobalComponents/Assets_tutor/Images/Group 243.png";
import emailIcon from "../../GlobalComponents/Assets_tutor/Images/email.svg";
import whatsappIcon from "../../GlobalComponents/Assets_tutor/Images/whatsapp.svg";
import phoneIcon from "../../GlobalComponents/Assets_tutor/Images/call.svg";
// import locationIcon from '../../GlobalComponents/Assets_tutor/Images/location.svg'
import reviewIcon from "../../GlobalComponents/Assets_tutor/Images/noReview.svg";
// import verifiedBtn from '../../GlobalComponents/Buttons_tutor/verifiedBtn/verifiedBtn'
import VerifyButton from "../../GlobalComponents/Buttons_tutor/verifyButton/verifyButton";
import categoryIcon from "../../GlobalComponents/Assets_tutor/Images/icon_category.svg";
import walletIcon from "../../GlobalComponents/Assets_tutor/Images/icon_wallet.svg";
import starIcon from "../../GlobalComponents/Assets_tutor/Images/icon_star.svg";
import Image from "next/image";

import RightPanel from "./subComponents/RightPanel/RightPanel";
import Logout from "../../GlobalComponents/Buttons_tutor/Logout/Logout";

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSection, setSection] = useState("overview");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = (val) => {
    if (val === 1) {
      setSection("overview");
    } else if (val === 2) {
      setSection("reviews");
    } else if (val === 3) {
      setSection("transactions");
    }
  };

  return (
    <div className="main_page">
      <div className="wrapUp">
        <h2>Wrap-Up Bar</h2>
        <div className="grid">
          <div className="gridContent">
            <Image
              src={personIcon}
              alt="person"
              style={{ width: "3.5vw", height: "auto" }}
            />
            <div className="head">
              <div className="head1">Available Student</div>
              <hr />
              <div className="head2">
                <b>200</b>
              </div>
            </div>
          </div>

          <div className="gridContent">
            <Image
              src={lockIcon}
              alt="lock"
              style={{ width: "3.5vw", height: "auto" }}
            />
            <div className="head">
              <div className="head1">Subscribed Student</div>
              <hr />
              <div className="head2">
                <span className="colour">
                  <b>Locked</b>
                </span>
              </div>
            </div>
          </div>

          <div className="gridContent">
            <Image
              src={lockIcon}
              alt="lock"
              style={{ width: "3.5vw", height: "auto" }}
            />
            <div className="head">
              <div className="head1">Active Batch </div>
              <hr />
              <div className="head2">
                <span className="colour">
                  <b>Locked</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="view">
        <div className="viewChange">
          <div
            onClick={() => handleClick(1)}
            className={`content ${isSection === "overview" ? "active" : ""}`}
          >
            <Image
              alt="category"
              src={categoryIcon}
              style={{ width: "1.1vw", height: "auto" }}
            />
            &nbsp;Overview
          </div>
          <div
            onClick={() => handleClick(2)}
            className={`content ${isSection === "reviews" ? "active" : ""}`}
          >
            <Image
              alt="star"
              src={starIcon}
              style={{ width: "1.2vw", height: "auto" }}
            />
            &nbsp;Reviews
          </div>
          <div
            onClick={() => handleClick(3)}
            className={`content ${
              isSection === "transactions" ? "active" : ""
            }`}
          >
            <Image
              alt="wallet"
              src={walletIcon}
              style={{ width: "1.2vw", height: "auto" }}
            />
            &nbsp;Transactions
          </div>
        </div>

        <div className={`overview ${isSection === "overview" ? "active" : ""}`}>
          <div>
            <div className="head"> Contact Details</div>
            <div className="contactDetails">
              <div>
                <Image
                  alt="email"
                  src={emailIcon}
                  style={{ width: "3.5vw", height: "auto", float: "left" }}
                />
                <div className="details">
                  email.address@gmail.com
                  <div className="name">Email Address</div>
                </div>
              </div>
              <div>
                <Image
                  alt="phone"
                  src={phoneIcon}
                  style={{ width: "3.5vw", height: "auto", float: "left" }}
                />
                <div className="details">
                  +91 7007 881 594
                  <div className="name">Mobile Number</div>
                </div>
              </div>
              <div>
                <Image
                  alt="whatsapp"
                  src={whatsappIcon}
                  style={{ width: "3.5vw", height: "auto", float: "left" }}
                />
                <div className="details">
                  +91 7007 881 594
                  <div className="name">WhatsApp Number</div>
                </div>
              </div>
              <div>
                <Image
                  alt="email"
                  src={emailIcon}
                  style={{ width: "3.5vw", height: "auto", float: "left" }}
                />
                <div className="details">
                  {" "}
                  Lucknow, Uttar Pradesh
                  <div className="name">Permanent Address</div>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>

        <div className={`reviews${isSection === "reviews" ? "active" : ""}`}>
          <div>
            <center>
              <div className="image">
                <Image
                  src={reviewIcon}
                  alt="review"
                  style={{ width: "22vw", height: "auto" }}
                />
              </div>
              <div className="text">
                {"Oops! Sorry couldn't find any Reviews."}
              </div>
            </center>
          </div>
        </div>
        <VerifyButton />

        <div
          className={`transactions ${
            isSection === "transactions" ? "active" : ""
          }`}
        >
          <div>
            <div className="heading">
              <div className="item1">Date</div>
              <div className="item2">Time</div>
              <div className="item3">Transaction ID</div>
              <div className="item4">Product/Service</div>
              <div className="item5">Amount</div>
              <div>Action</div>
            </div>
            <div className="values">
              <div className="item1">01/08/23</div>
              <div className="item2">10:00 AM</div>
              <div className="item3">#9904578</div>
              <div className="item4">Reward Coins</div>
              <div className="item5">$500</div>
              <div>
                <button>View Invoice</button>
              </div>
            </div>

            <div className="values">
              <div className="item1">01/08/23</div>
              <div className="item2">10:00 AM</div>
              <div className="item3">#9904578</div>
              <div className="item4">Reward Coins</div>
              <div className="item5">$500</div>
              <div>
                <button>View Invoice</button>
              </div>
            </div>

            <div className="values">
              <div className="item1">01/08/23</div>
              <div className="item2">10:00 AM</div>
              <div className="item3">#9904578</div>
              <div className="item4">Reward Coins</div>
              <div className="item5">$500</div>
              <div>
                <button>View Invoice</button>
              </div>
            </div>

            <div className="values">
              <div className="item1">01/08/23</div>
              <div className="item2">10:00 AM</div>
              <div className="item3">#9904578</div>
              <div className="item4">Reward Coins</div>
              <div className="item5">$500</div>
              <div>
                <button>View Invoice</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

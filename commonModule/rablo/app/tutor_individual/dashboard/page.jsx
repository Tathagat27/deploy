"use client";
import React, { useState, useEffect } from "react";
import "./styles/dashboard.css";
// import { Poppins } from 'next/font/google'
import SideNavBar from "../../GlobalComponents/SideNavBar_tutor/SideNavBar";
import TopBar from "../../GlobalComponents/TopBar_tutor/TopBar";
import personIcon from "../../GlobalComponents/Assets_tutor/Images/DashBoard/Group 245.png";
import lockIcon from "../../GlobalComponents/Assets_tutor/Images/DashBoard/Group 243.png";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
// import { CgCheck } from "react-icons/cg";
import { IoAdd } from "react-icons/io5";
import { PiLockKeyBold } from "react-icons/pi";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import tick from "../../GlobalComponents/Assets_tutor/Images/DashBoard/tick.svg";
import add from "../../GlobalComponents/Assets_tutor/Images/DashBoard/add.svg";
import lock from "../../GlobalComponents/Assets_tutor/Images/DashBoard/lock.svg";
import verify from "../../GlobalComponents/Assets_tutor/Images/DashBoard/verify.svg";
import mark from "../../GlobalComponents/Assets_tutor/Images/DashBoard/mark12.svg";
import dynamic from "next/dynamic";
import Axios from "../../Axios/Axios";

//POP UP
import UnderConstructionPopUp from "../../GlobalComponents/Popups_tutor/BoostrapModals/UnderConstruction/UnderConstruction";

//Next js functions
import { redirect, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import RightPanel from "./subComponents/RightPanel/RightPanel";

// import CustomizedSteppers from './steppers/page'
// const poppins=Poppins({
//   weight:'400',
//   subsets:['latin'],
// })

const Dashboard = () => {
  const [tutorName, setTutorName] = useState("");
  const searchParams = useSearchParams();

  const router = useRouter();

  if (typeof window !== 'undefined') {
  const tutorId = localStorage.getItem("query1");
  const authtoken = localStorage.getItem("query2");
  }

  const [user, setUser] = useState({
    tutorID: "",
    tokenID: "",
  });
  const [studentCount, setStudentCount] = useState(0);

  if (!tutorId || !authtoken) {
    router.push("/login");
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const tutorId = localStorage.getItem("query1");
    const authtoken = localStorage.getItem("query2");
    const userID = searchParams.get("query1");
    const tokenID = searchParams.get("query2");

    if (!tutorId || !authtoken) {
      if (userID && tokenID) {
        localStorage.setItem("query1", userID);
        localStorage.setItem("query2", tokenID);
        setUser({
          tutorID: userID,
          tokenID: tokenID,
        });
      } else {
        alert("Invalid login");
        router.push("/login");
      }
    } else {
      setUser({
        tutorID: tutorId,
        tokenID: authtoken,
      });
    }
  }
  }, []);

  useEffect(() => {
    const getDashBoard = async () => {
      try {
        const studentsCount = await Axios.get("/api/gettotalstudent");
        setStudentCount(studentsCount.data.data);
        const response = await Axios.get(`/api/dashboard/${user.tutorID}`);
        if (response.status === 200 && response.data) {
          setTutorName(response.data.data);
        } else {
          alert("check your network");
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    getDashBoard();
  }, [user.tutorID]);

  const datas = [
    {
      key: 1,
      value: "Create Account",
      show: "Completed",
      icon: tick,
      color: "#6764F",
      status: "complete",
    },
    {
      key: 2,
      value: "Profile Verified (0/4)",
      show: "Resume",
      icon: verify,
      color: "#6764FF",
      status: "active",
    },
    {
      key: 3,
      value: "Create Your Plan",
      show: "Create Plan",
      icon: add,
      color: "#6764FF",
      status: "active",
    },
    {
      key: 4,
      value: "Add Your Student",
      show: "Add",
      icon: lock,
      color: "#6764F",
      status: "locked",
    },
    {
      key: 5,
      value: "Create Your Batch",
      show: "Locked",
      icon: lock,
      color: "#6764F",
      status: "locked",
    },
    {
      key: 6,
      value: "Progress Insights",
      show: "Locked",
      icon: lock,
      color: "#6764F",
      status: "locked",
    },
    {
      key: 7,
      value: "Get Monthly Feedbacks",
      show: "Locked",
      icon: lock,
      color: "#6764F",
      status: "locked",
    },
    {
      key: 8,
      value: "Monthly Fee Credit",
      show: "Locked",
      icon: lock,
      color: "#6764F",
      status: "locked",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const NavigatePages = (key) => {
    console.log("from function", key);
    if (key == 3) {
      router.push("/tutor_individual/create_your_plan");
    }
  };
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      <div className="Dashboard_Wrapper">
        <SideNavBar
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />

        <div className={`dashboard__page ${isHovered ? "" : "dec"}`}>
          <TopBar />
          <div className="main_page">
            <UnderConstructionPopUp
              show={modalShow}
              onHide={() => setModalShow(false)}
              setModalShow={setModalShow}
            />

            {/* Tutor greetings section */}

            <div className="nameSec">
              <div>
                <h2>Namaste, {tutorName}</h2>
                <p>{"Let's Track All Your Students"}</p>
              </div>

              <a href="/tutor-individual/tutor-verification" className="verify">
                Verify
                <IoIosArrowForward />
              </a>
            </div>

            {/* Wrap Up bar section */}

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
                      <b>{studentCount}</b>
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

            {/* User Journey section */}

            <div className="User_journey_wrapper">
              <center>
                <h2>
                  User <span className="colour">Journey</span>
                </h2>
              </center>

              {/* <CustomizedSteppers/> */}

              <div className="stepSection">
                {datas.map((data, index) => (
                  <center key={index}>
                    <div
                      key={index}
                      className={`obj ${
                        data.status === "active" ? " active" : ""
                      }`}
                    >
                      <div class="a1">Steps {data.key}:</div>
                      <div className="a2">{data.value}</div>
                      <div
                        className="circle1"
                        onClick={() => NavigatePages(data.key)}
                      >
                        {data.status === "complete" && (
                          <Image
                            src={tick}
                            alt="tick"
                            style={{ width: "1.4vw", height: "auto" }}
                          />
                        )}
                        {data.status === "incomplete" && (
                          <Image
                            src={mark}
                            alt="mark"
                            style={{ width: "1.4vw", height: "auto" }}
                          />
                        )}
                        {data.status === "locked" && (
                          <Image
                            src={lock}
                            alt="lock"
                            style={{ width: "1.4vw", height: "auto" }}
                          />
                        )}
                        {data.status === "active" && (
                          <Image
                            src={data.icon}
                            alt="data"
                            style={{ width: "1.4vw", height: "auto" }}
                          />
                        )}
                      </div>
                      <div className="a3">{data.show}</div>
                    </div>
                  </center>
                ))}
              </div>
            </div>
          </div>
        </div>
        {!isHovered && <RightPanel />}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });

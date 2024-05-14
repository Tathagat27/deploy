"use client";
import { useState, useEffect } from "react";
import "./styles/plans.css";
import Link from "next/link";
// import SideNavBar from './subComponents/SideNavBar/SideNavBar'
import SideNavBar from "../../GlobalComponents/SideNavBar_student/SideNavBar";
import styles from "./styles/MyProfile.module.css";
import Image from "next/image";
import TopBarStudent from "../../GlobalComponents/TopBarStudent/TopBarStudent";
import Profile from "../../Images/Images_student/Profile.jpg";
import ProfileSvg from "../../Images/Images_student/user.svg";
import LockedSvg from "../../Images/Images_student/Group.svg";
import CurrentStreak from "../../Images/Images_student/currents.svg";
import Streak from "../../Images/Images_student/streak.svg";
import Achievements from "../../Images/Images_student/trophy.svg";
import Time from "../../Images/Images_student/clock.svg";
import Calender from "./components/Calender";
import transDark from "../../Images/Images_student/transDark.svg";
import AchiveDark from "../../Images/Images_student/AchiveDark.svg";
import OverLight from "../../Images/Images_student/OverviewLight.svg";
import OverDark from "../../Images/Images_student/OverviewDark.svg";
import trans from "../../Images/Images_student/transactions.svg";
import badge from "../../Images/Images_student/badge.svg";
import ArrowUp from "../../Images/Images_student/Arrow.svg";
import Overview from "./subComponents/Overview";
import Transactions from "./subComponents/Transactions";
import { useDispatch, useSelector } from "react-redux";
import { setDataMyProfile } from "../../Redux/studentSlices/MyProfile";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const studentId = localStorage.getItem("query1");
  const authtoken = localStorage.getItem("query2");

  // if (!studentId || !authtoken) {
  //   router.push('/login');
  //   return null;
  // }

  const [tutors, setTutors] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const myProfileData = useSelector((state) => state.MyProfile.data);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5500/api/overview/${studentId}`
        );
        const len = await fetch("http://localhost:5500/api/get_tutors");
        const tut = await len.json();
        setTutors(tut.data);
        const data = await response.json();
        console.log(tut);
        dispatch(setDataMyProfile(data.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const setOverview = () => {
    setActiveTab("overview");
  };

  console.log("My Profile Data:", myProfileData);

  return (
    <main className="Wrapper">
      <div
        className="sidebar"
        onMouseOver={() => setIsProfileOpen(true)}
        onMouseLeave={() => setIsProfileOpen(false)}
      >
        <SideNavBar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className="Plans__page">
        <TopBarStudent />
        <div className="Main_Div_Contains_PlanDetails_and_PlanOverview">
          <div className="Mypro">
            <main className={styles.MyProfilePage}>
              <main className={styles.myprofile}>
                <div className={styles.wrapupbar}>
                  <h1 className="">Wrap-Up Bar</h1>
                  <div className={styles.details}>
                    <div className={styles.borderright}>
                      <div className={styles.profile}>
                        <Image
                          className={styles.wrapLogo}
                          src={ProfileSvg}
                          alt="alt"
                        />
                      </div>
                      <div className={styles.right}>
                        <h3>Available Tutors</h3>
                        <div className={styles.addbutton}>
                          <span>{tutors}</span>
                          <span className={styles.red}>Add {">"}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.borderright}>
                      <div className={styles.locked}>
                        <Image
                          className={styles.wrapLogo}
                          src={LockedSvg}
                          alt="alt"
                        />
                      </div>
                      <div className={styles.right}>
                        <h3>Subscribed Tutors</h3>
                        <div className={styles.addbutton}>
                          <span className={styles.red}>Locked</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.border}>
                      <div className={styles.locked}>
                        <Image
                          className={styles.wrapLogo}
                          src={LockedSvg}
                          alt="alt"
                        />
                      </div>
                      <div className={styles.right}>
                        <h3>Active Classes</h3>
                        <div className={styles.addbutton}>
                          <span className={styles.red}>Locked</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.tab}>
                  <div className={styles.tabbuttons}>
                    <div
                      className={`${
                        activeTab === "overview" ? styles.active : ""
                      }`}
                      onClick={() => handleTabClick("overview")}
                    >
                      {activeTab == "overview" ? (
                        <Image
                          className={styles.tabImg}
                          src={OverLight}
                          alt="alt"
                        />
                      ) : (
                        <Image
                          className={styles.tabImg}
                          src={OverDark}
                          alt="alt"
                        />
                      )}{" "}
                      Overview
                    </div>
                    <div className={styles.borderright}></div>
                    <div
                      className={`${
                        activeTab === "achievements" ? styles.active : ""
                      }`}
                      onClick={() => handleTabClick("achievements")}
                    >
                      {activeTab == "achievements" ? (
                        <Image
                          className={styles.tabImg}
                          src={AchiveDark}
                          alt="alt"
                        />
                      ) : (
                        <Image
                          className={styles.tabImg}
                          src={badge}
                          alt="alt"
                        />
                      )}{" "}
                      Achievements
                    </div>
                    <div className={styles.borderright}></div>
                    <div
                      className={`${
                        activeTab === "transactions" ? styles.active : ""
                      }`}
                      onClick={() => handleTabClick("transactions")}
                    >
                      {activeTab == "transactions" ? (
                        <Image
                          className={styles.tabImg}
                          src={transDark}
                          alt="alt"
                        />
                      ) : (
                        <Image
                          className={styles.tabImg}
                          src={trans}
                          alt="alt"
                        />
                      )}{" "}
                      Transactions
                    </div>
                  </div>
                </div>
              </main>
            </main>
          </div>
        </div>
        <div className={`' '`}>
          {activeTab === "overview" && (
            <div className={styles.tabDiv}>
              <Overview />
            </div>
          )}

          {activeTab === "achievements" && (
            <div className={styles.tabDiv}>
              <Transactions setOverview={setOverview} />
            </div>
          )}

          {activeTab === "transactions" && (
            <div className={styles.tabDiv}>
              <Transactions setOverview={setOverview} />
            </div>
          )}
        </div>
      </div>
      {!isProfileOpen && (
        <div className={styles.MySideProfile}>
          <div className={styles.MySideProfileContainer}>
            <div className={styles.profileDetails}>
              <div className={styles.img}>
                <Image className={styles.Logo} src={Profile} alt="alt" />
              </div>
              <h4 className={styles.username}>@{myProfileData?.firstName}</h4>
              <h2 className={styles.fullName}>
                {myProfileData?.firstName} {myProfileData?.lastName}
              </h2>
              <h3 className={styles.grade}>
                {myProfileData?.class_}{" "}
                <span className={styles.gradeType}>Std</span>{" "}
                {myProfileData?.boards}{" "}
                <span className={styles.gradeType}>Board</span>
              </h3>
              <Link href="/student/myprofileedit">
                <button className={styles.button}>Edit Your Profile</button>
              </Link>
            </div>
            <div className={styles.statistics}>
              <h2 className={styles.statisticsTitle}>Statistics</h2>
              <div className={styles.statsContainer}>
                <div className={styles.stat}>
                  <div className={styles.statlogo}>
                    <Image src={Streak} alt="alt" className={styles.svglogo} />
                  </div>
                  <div className={styles.statInfo}>
                    <h4 className={styles.statValue}>0</h4>
                    <h4 className={styles.statLabel}>Days of streak</h4>
                  </div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statlogo}>
                    <Image
                      src={CurrentStreak}
                      alt="alt"
                      className={styles.svglogo}
                    />
                  </div>
                  <div className={styles.statInfo}>
                    <h3 className={styles.statValue}>0</h3>
                    <h3 className={styles.statLabel}>Days present</h3>
                  </div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statlogo}>
                    <Image src={Time} alt="alt" className={styles.svglogo} />
                  </div>
                  <div className={styles.statInfo}>
                    <h3 className={styles.statValue}>0</h3>
                    <h3 className={styles.statLabel}>Time Spending</h3>
                  </div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statlogo}>
                    <Image
                      src={Achievements}
                      alt="alt"
                      className={styles.svglogo}
                    />
                  </div>
                  <div className={styles.statInfo}>
                    <h3 className={styles.statValue}>0</h3>
                    <h3 className={styles.statLabel}>Achievements</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.calender}>
              <h2 className={styles.calenderTitle}>Calendar</h2>
              <Calender />
            </div>
            {/* <div className={styles.preferredLanguages}>
              <h2 className={styles.languagesTitle}>Preferred Language</h2>
              <div className={styles.languagesContent}>
                <div className={styles.stats}>
                  <div className={styles.statlog}>
                    <Image src={English} alt="alt" className={styles.svglog} height={20} />
                  </div>
                  <div className={styles.statInfo}>
                    <h3 className={styles.statValue}>English</h3>
                  </div>
                </div>
              </div>
            </div> */}
            <div className={styles.ArrowUp}>
              <Image src={ArrowUp} alt="alt" height={25} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default page;

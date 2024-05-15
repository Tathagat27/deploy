"use client";
import { useState } from "react";
import "./styles/plans.css";
import SideNavBar from "../../GlobalComponents/SideNavBarTutor/SideNavBar";
import styles from "./styles/MyProfile.module.css";
import Image from "next/image";
import TopBar from "../../GlobalComponents/TopBar_tutor/TopBar";
import Profile from "../../Images/Images_tutor/Profile.jpg";
import ProfileSvg from "../../Images/Images_tutor/user.svg";
import LockedSvg from "../../Images/Images_tutor/Group.svg";
import CurrentStreak from "../../Images/Images_tutor/currents.svg";
import Streak from "../../Images/Images_tutor/streak.svg";
import Achievements from "../../Images/Images_tutor/trophy.svg";
import Time from "../../Images/Images_tutor/clock.svg";
import English from "../../Images/Images_tutor/english.svg";
import Hindi from "../../Images/Images_tutor/hindi.svg";
//import Calender from '../components/Calender'
import transDark from "../../Images/Images_tutor/transDark.svg";
import AchiveDark from "../../Images/Images_tutor/AchiveDark.svg";
import OverLight from "../../Images/Images_tutor/OverviewLight.svg";
import OverDark from "../../Images/Images_tutor/OverviewDark.svg";
import trans from "../../Images/Images_tutor/transactions.svg";
import badge from "../../Images/Images_tutor/badge.svg";
import ArrowUp from "../../Images/Images_tutor/Arrow.svg";
import Overview from "./subComponents/Overview";
import Transactions from "./subComponents/Transactions";
import EditProfile from "./editprofile/EditProfile";
import ProfilePanel from "../../GlobalComponents/ProfilePanel/ProfilePanel";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="Wrapper">
      <div
        className="sidebar"
        onMouseOver={() => setIsProfileOpen(true)}
        onMouseLeave={() => setIsProfileOpen(false)}
      >
        <SideNavBar
          toggleSidebar={toggleSidebar}
          isHovered={isSidebarOpen}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className="Plans__page">
        <TopBar />
        <EditProfile />
      </div>
      {
        !isProfileOpen && <ProfilePanel />
        // <div className={styles.MySideProfile}>
        //   <div className={styles.MySideProfileContainer}>
        //     <div className={styles.profileDetails}>
        //       <div className={styles.img}>
        //         <Image src={Profile} alt="alt" width={90} height={90} />
        //       </div>
        //       <h4 className={styles.username}>@christina</h4>
        //       <h2 className={styles.fullName}>J.Christina</h2>
        //       <h3 className={styles.grade}>VII <span className={styles.gradeType}>Std</span> CBSE <span className={styles.gradeType}>Board</span></h3>
        //     </div>
        //     <div className={styles.statistics}>
        //       <h2 className={styles.statisticsTitle}>Statistics</h2>
        //       <div className={styles.statsContainer}>
        //         <div className={styles.stat}>
        //           <div className={styles.statlogo}>
        //             <Image src={Streak} alt="alt" className={styles.svglogo} />
        //           </div>
        //           <div className={styles.statInfo}>
        //             <h4 className={styles.statValue}>0</h4>
        //             <h4 className={styles.statLabel}>Days of streak</h4>
        //           </div>
        //         </div>
        //         <div className={styles.stat}>
        //           <div className={styles.statlogo}>
        //             <Image src={CurrentStreak} alt="alt" className={styles.svglogo} />
        //           </div>
        //           <div className={styles.statInfo}>
        //             <h3 className={styles.statValue}>0</h3>
        //             <h3 className={styles.statLabel}>Days present</h3>
        //           </div>
        //         </div>
        //         <div className={styles.stat}>
        //           <div className={styles.statlogo}>
        //             <Image src={Time} alt="alt" className={styles.svglogo} />
        //           </div>
        //           <div className={styles.statInfo}>
        //             <h3 className={styles.statValue}>0</h3>
        //             <h3 className={styles.statLabel}>Time Spending</h3>
        //           </div>
        //         </div>
        //         <div className={styles.stat}>
        //           <div className={styles.statlogo}>
        //             <Image src={Achievements} alt="alt" className={styles.svglogo} />
        //           </div>
        //           <div className={styles.statInfo}>
        //             <h3 className={styles.statValue}>0</h3>
        //             <h3 className={styles.statLabel}>Achievements</h3>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div className={styles.calender}>
        //       <h2 className={styles.calenderTitle}>Calendar</h2>
        //       <Calender />
        //     </div>
        //     <div className={styles.preferredLanguages}>
        //       <h2 className={styles.languagesTitle}>Preferred Languages</h2>
        //       <div className={styles.languagesContent}>
        //         <div className={styles.stats}>
        //           <div className={styles.statlog}>
        //             <Image src={English} alt="alt" className={styles.svglog} height={20} />
        //           </div>
        //           <div className={styles.statInfo}>
        //             <h3 className={styles.statValue}>English</h3>
        //           </div>
        //         </div>
        //         <div className={styles.stats}>
        //           <div className={styles.statlog}>
        //             <Image src={Hindi} alt="alt" className={styles.svglog} height={20} />
        //           </div>
        //           <div className={styles.statInfo}>
        //             <h3 className={styles.statValue}>Hindi</h3>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div className={styles.ArrowUp}>
        //       <Image src={ArrowUp} alt='alt' height={25} />
        //     </div>
        //   </div>
        // </div>
      }
    </main>
  );
};

export default Page;

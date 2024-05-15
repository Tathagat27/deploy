"use client";
import { useState, useEffect } from "react";
import "./styles/plans.css";
import SideNavBar from "../../GlobalComponents/SideNavBar_student/SideNavBar";
import styles from "./styles/MyProfile.module.css";
import Image from "next/image";
import TopBarStudent from "../../GlobalComponents/TopBarStudent/TopBarStudent";
import Profile from "../../Images/Images_student/Profile.jpg";
import CurrentStreak from "../../Images/Images_student/currents.svg";
import Streak from "../../Images/Images_student/streak.svg";
import Achievements from "../../Images/Images_student/trophy.svg";
import Time from "../../Images/Images_student/clock.svg";
import Link from "next/link";
import Calender from "./components/Calender";
import ArrowUp from "../../Images/Images_student/Arrow.svg";
import EditProfile from "./editprofile/EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { setDataMyProfile } from "../../Redux/studentSlices/MyProfile";
import { useRouter } from "next/navigation";

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  if (typeof window !== 'undefined') {
  const studentId = localStorage.getItem("query1");
  const authtoken = localStorage.getItem("query2");
  }

  // if (!studentId || !authtoken) {
  //   router.push('/login');
  //   return null;
  // }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const myProfileData = useSelector((state) => state.MyProfile.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5500/api/overview/${studentId}`
        );
        const data = await response.json();
        console.log(data);
        dispatch(setDataMyProfile(data.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className="Plans__page">
        <TopBarStudent />
        <EditProfile />
      </div>
      {!isProfileOpen && (
        <div className={styles.MySideProfile}>
          <div className={styles.MySideProfileContainer}>
            <div className={styles.profileDetails}>
              <div className={styles.img}>
                <Image
                  className={styles.Logo}
                  src={Profile}
                  alt="alt"
                  width={60}
                  height={60}
                />
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
              {/* <Link href="myprofileedit"><button className={styles.button}>Edit Your Profile</button></Link> */}
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
              <h2 className={styles.languagesTitle}>Preferred Languages</h2>
              <div className={styles.languagesContent}>
                <div className={styles.stats}>
                  <div className={styles.statlog}>
                    <Image src={English} alt="alt" className={styles.svglog} height={20} />
                  </div>
                  <div className={styles.statInfo}>
                    <h3 className={styles.statValue}>English</h3>
                  </div>
                </div>
                <div className={styles.stats}>
                  <div className={styles.statlog}>
                    <Image src={Hindi} alt="alt" className={styles.svglog} height={20} />
                  </div>
                  <div className={styles.statInfo}>
                    <h3 className={styles.statValue}>Hindi</h3>
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

export default Page;

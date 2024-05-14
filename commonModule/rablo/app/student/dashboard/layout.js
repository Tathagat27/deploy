"use client";
import TopBar from "../../GlobalComponents/TopBar_student/TopBar";
import styles from "./style/dashboard.module.css";
import SideNavBar from "../../GlobalComponents/SideNavBar_student/SideNavBar";
import Group from "./subComponents/group/Group";
import { useState } from "react";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const isSidebarOpen = useSelector((state) => state.sideNavBar.isSidebarOpen);

  return (
    <div className={styles.main}>
      <div>
        <SideNavBar />
      </div>
      <div className={styles.wrapper}>
        <TopBar />
        {/* pages for the layout */}
        {children}
      </div>
      {!isSidebarOpen && (
        <div className={styles.wrapper2}>
          <div>
            <Group />
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;

"use client";
import TopBar from "../../GlobalComponents/TopBarStudent/TopBarStudent";
import styles from "./style/myclass.module.css";
import SideNavBar from "../../GlobalComponents/SideNavBar_student/SideNavBar";
import Group from "./subComponents/Group/Group";
import { useSelector } from "react-redux";

import { createContext, useState, useContext } from "react";

const LayoutContext = createContext();

function Layout({ children }) {
  const isSidebarOpen = useSelector((state) => state.sideNavBar.isSidebarOpen);

  const [myclassPages, setMyclassPages] = useState(0);

  return (
    <main className={styles.main}>
      <div className={styles.sidenav}>
        <SideNavBar />
      </div>
      <div className={styles.wrapper}>
        <TopBar />
        {/* pages for the layout */}
        <LayoutContext.Provider
          value={{ myclassPages, setMyclassPages }}
        >
          {children}
        </LayoutContext.Provider>
      </div>
      {(myclassPages === 1) && !isSidebarOpen && (
        <div className={styles.wrapper2}>
          <Group />
        </div>
      )}
    </main>
  );
}

export default Layout;

export const useLayoutContext = () => useContext(LayoutContext);

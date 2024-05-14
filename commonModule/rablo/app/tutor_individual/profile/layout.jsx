"use client";
import React, { useState } from "react";
import SideNavBar from "../../GlobalComponents/SideNavBar_tutor/SideNavBar";
import ProfilePanel from "./subComponents/RightPanel/RightPanel";
import TopBar from "../../GlobalComponents/TopBar_tutor/TopBar";
import "./layoutstyles/Layout.css";

const Layout = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="MyProfile_student_Wrapper">
      <SideNavBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <div className="MyProfile__page">
        <TopBar />
        <div className="MyProfile_Main_Contains">{children}</div>
      </div>

      {!isHovered && <ProfilePanel />}
    </div>
  );
};

export default Layout;

"use client";
import SideNavBar from "../../GlobalComponents/SideNavBar_tutor/SideNavBar";
import TopBar from "../../GlobalComponents/TopBar_tutor/TopBar";
import ProfilePanel from "./ProfilePanel/ProfilePanel";
import "./layoutstyles/layout.css";
import { useState } from "react";
import Image from "next/image";
export default function Layout({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="add_student_Wrapper">
      <SideNavBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <div className="add__Student__page">
        <TopBar />
        <div className="add__Student_Main_Contains">{children}</div>
      </div>

      {!isHovered && <ProfilePanel />}
    </div>
  );
}

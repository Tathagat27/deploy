import React from "react";
import "./styles/EditProfile.css";
import Image from "next/image";
import SideNavBar from "../../GlobalComponents/SideNavBar_tutor/SideNavBar";
import TopBar from "../../GlobalComponents/TopBar_tutor/TopBar";
import BasicInfo from "./subComponents/BasicInfo/BasicInfo";
import BackArrow from "./Assets/arrow_back.svg";

const EditProfile = () => {
  return (
    <div className="Wrapper">
      <SideNavBar />
      <div className="Edit_Profile_page">
        <TopBar />
        <div className="Main_div_contains_editProfile_Components">
          <div>
            <Image
              src={BackArrow}
              alt="Back"
              style={{ width: "2.083vw", height: "2.083vw" }}
            />
            <h4>Edit Your Profile</h4>
          </div>

          <div className="Basic_Academic_Preference">
            <div>
              <h4>Basic Info</h4>
              <h4>Academic</h4>
              <h4>Preference</h4>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div>
            <BasicInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import MyVerticallyCenteredModal from "./ClientComponents/LogoutPopup/MyVerticallyCenteredModal";
// import UserAlreadyExitsPopup from '../Popups_student/BoostrapModals/UserAlreadyExits/UserAlreadyExits'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// Styling
import "./styles/LeftPanel.css";

//Images
import Logo from "../../GlobalComponents/Assets_student/LogoWhite.svg";

//buttons
import LogoutBtn from "./ClientComponents/Logout/Logout";
import BackButton from "./ClientComponents/BackButton/BackButton";

const LeftPanel = ({ action }) => {
  const [modalShow, setModalShow] = useState(false);
  const [LeftPanelBG, setLeftPanelBG] = useState(1);
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const isDay = currentHour >= 6 && currentHour < 16;
    const isEvening = currentHour >= 16 && currentHour < 19;
    if (isDay) {
      setLeftPanelBG(1);
    } else if (isEvening) {
      setLeftPanelBG(2);
    } else {
      setLeftPanelBG(3);
    }
  }, []);

  return (
    <div
      className={
        LeftPanelBG === 1
          ? "Left_Panel_Wrapper_Day"
          : LeftPanelBG === 2
          ? "Left_Panel_Wrapper_Evening"
          : "Left_Panel_Wrapper_Night"
      }
    >
      <div className="Logo_Wrapper">
        <BackButton />
        <Image
          src={Logo}
          alt="rablo"
          style={{
            width: "13.020vw",
            height: "3.75vw",
            filter: "brightness(1000%)",
          }}
        />
      </div>

      <div className="LogoutBtn_wrapper">
        <LogoutBtn setModalShow={setModalShow} />
      </div>
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setModalShow={setModalShow}
        />
        {/* <UserAlreadyExitsPopup
          show={modalShow}
          onHide={() => setModalShow(false)}
          setModalShow={setModalShow}
           /> */}
      </>
    </div>
  );
};

export default LeftPanel;

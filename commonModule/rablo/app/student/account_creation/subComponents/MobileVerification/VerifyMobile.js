// VerifyMobile.jsx
import React, { useState } from "react";
import style from "./Style/VerifyMobile.module.css";
import MobileImage from "./Asset/Images/Phone.svg";
import ChatImage from "./Asset/Images/chat.svg";
import PhoneAndChatImage from './Asset/Images/PhoneAndChat.svg'
import Image from "next/image";
import SendOtp from "./SendOtp";
import VerifyOtp from "./VerifyOtp";

const VerifyMobile = () => {
  const [page, setPage] = useState("sendOtp");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showWelcomePage, setShowWelcomePage] = useState(false);

  const handleClickBtn = (targetPage) => {
    setPage(targetPage);
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.Mobile__icon__wrapper}>
          {/* <Image src={PhoneAndChatImage} alt="chat icon" /> */}
          <Image
            src={PhoneAndChatImage}
            style={{ width:"10vw"}}
            alt="Mobile icon"
          />
        </div>
        <div className={style.container}>
          {/* {page === "sendOtp" && (
            <SendOtp
              setMobileNumber={setMobileNumber}
              handleClickBtn={handleClickBtn}
              mobileNumber={mobileNumber}
            />
          )}
          {page === "verify" && (
            <VerifyOtp
              setShowWelcomePage={setShowWelcomePage}
              mobileNumber={mobileNumber}
              handleClickBtn={handleClickBtn}
            />
          )} */}
          <VerifyOtp
              setShowWelcomePage={setShowWelcomePage}
              mobileNumber={mobileNumber}
              handleClickBtn={handleClickBtn}
            />
        </div>
      </div>
      {showWelcomePage && (
        <div className={style.modalBackdrop} style={{ background: "#fff" }}>
          {/* WelcomePage component goes here */}
        </div>
      )}
    </>
  );
};

export default VerifyMobile;

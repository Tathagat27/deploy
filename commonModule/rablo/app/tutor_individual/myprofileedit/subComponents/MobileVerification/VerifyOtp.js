import React, { useState, useEffect, useRef } from "react";
import style from "./style/VerifyMobile.module.scss";
import WelcomePage from "./WelcomePage";
import SendOtp from "./SendOtp";

const VerifyOtp = ({ mobileNumber, handleClickBtn }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(600);
  const [showWelcomePage, setShowWelcomePage] = useState(false);
  const [page, setPage] = useState(true);
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const clickBack = () => {
    setPage(false);
    handleClickBtn("sendOtp");
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClickVerify = () => {
    if (otp.every((ot) => ot !== "")) {
      setShowWelcomePage(true);
      setOtp(["", "", "", ""]);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      {page ? (
        <div className={style.secPage}>
          <h2>Verify your Mobile Number</h2>
          <p>
            Verifying your number will give access to more features on
            <br />
            Rablo. A one-time password has been sent to +91 {mobileNumber}
          </p>
          <div className={style.inputCSS}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          <p className={style.timeStamp}>Time Left: {formatTime(timeLeft)}</p>
          <button onClick={handleClickVerify}>{"Verify >"}</button>
          <p>{"Resend OTP>"}</p>
          <p onClick={clickBack} style={{ cursor: "pointer" }}>
            Entered Incorrect number?
          </p>
        </div>
      ) : (
        <SendOtp handleClickBtn={handleClickBtn} />
      )}
      {showWelcomePage && (
        <div className={style.modalBackdrop}>
          <div className={style.welcomePopup}>
            <WelcomePage />
            <svg
              onClick={() => setShowWelcomePage(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="2.402vw"
              height="2.402vh"
              viewBox="0 0 22 22"
              fill="none"
              style={{
                color: "#000000B8",
                position: "absolute",
                right: "10px",
                top: "18px",
                cursor: "pointer",
                marginRight:"0.457vw"
              }}
            >
              <path
                d="M2 2L20 20"
                stroke="black"
                strokeOpacity="0.72"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 20L20 2"
                stroke="black"
                strokeOpacity="0.72"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyOtp;

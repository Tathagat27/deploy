import React, { useState, useEffect, useRef } from "react";
import style from "./Style/VerifyMobile.module.css";
import WelcomePage from "./WelcomePage";
import SendOtp from "./SendOtp";
import Axios from '../../../../Axios/Axios'
import { useRouter } from "next/navigation";

const VerifyOtp = ({ mobileNumber, handleClickBtn }) => {
  const router = useRouter();

  //OTP INPUT State
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [showAlert, setShowAlert] = useState(false);


  const [timeLeft, setTimeLeft] = useState(600);
  const [showWelcomePage, setShowWelcomePage] = useState(false);
  const [page, setPage] = useState(true);
  const inputRefs = useRef([]);
  
  //handling OTP Input
  const handleOnChange = (e) => {
    setShowAlert(false)
    const inputValue = e.target.value;
    const inputIndex = parseInt(e.target.id.split('-')[1], 10) - 1;

    if (inputValue && !/^\d$/.test(inputValue)) {
      e.target.value = '';
      return;
    }

    const newOtpValues = [...otpValues];
    newOtpValues[inputIndex] = inputValue;
    setOtpValues(newOtpValues);

    if (inputValue && inputIndex !== 3) {
      document.getElementById(`ip-${inputIndex + 2}`).focus();
    } else if (!inputValue && inputIndex !== 0) {
      document.getElementById(`ip-${inputIndex}`).focus();
    }
  };

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



  const handleClickVerify = () => {
    if (otpValues.every((ot) => ot !== "")) {
      handleOtpSubmit();
    }
  };

  const handleOtpSubmit = async (event) =>{
    event.preventDefault();
    try {
      const response = await Axios.post('https://example.com/api/login', otpValues);
      if(response.status === 200){
        router.push("/student/account_creation/dashboard")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      {page ? (
        <div className={style.secPage}>
          <h2>Verify your Email</h2>
          <p>
            Verifying your Email will give access to more features on
            <br />
            Rablo. A one-time password has been sent to email
          </p>
          <div className={style.inputCSS}>
            {/* {otp.map((digit, index) => (
              <input
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))} */}
                <input type="text" id="ip-1" value={otpValues[0]} onChange={handleOnChange} autoComplete="off" />
                <input type="text" id="ip-2" value={otpValues[1]} onChange={handleOnChange} autoComplete="off"/>
                <input type="text" id="ip-3" value={otpValues[2]} onChange={handleOnChange} autoComplete="off"/>
                <input type="text" id="ip-4" value={otpValues[3]} onChange={handleOnChange} autoComplete="off"/>
          </div>
          <p className={style.timeStamp}>Time Left: {formatTime(timeLeft)}</p>
          <button onClick={handleClickVerify} style={{marginTop:"1vw"}}>{"Verify >"}</button>
          <p style={{marginTop:"1vw"}}>{"Resend OTP>"}</p>
          {/* <p onClick={clickBack} style={{ cursor: "pointer" }}>
            Entered Incorrect number?
          </p> */}
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

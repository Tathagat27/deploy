import React from "react";
import LeftPanel from "../../../GlobalComponents/LeftPanel_tutor/LeftPanel";
import Header from "../SubComponents/RegistrationPage/subComponents/RegistrationHeader/RegistrationHeader";
import "../styles/RegsiterPage.css";
import "./styles/verify.css";
import Otpverification from "../../../GlobalComponents/OtpVerification/OtpVerification";

const Verify = () => {
  return (
    <div className="Register">
      <div className="Left_Panel">
        <LeftPanel />
      </div>
      <div className="Verify__page">
        <Header />
        <Otpverification />
      </div>
    </div>
  );
};

export default Verify;

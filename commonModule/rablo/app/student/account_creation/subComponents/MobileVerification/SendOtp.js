// SendOtp.jsx
import React, { useState } from "react";

import style from "./Style/VerifyMobile.module.css"

const SendOtp = ({ setMobileNumber, handleClickBtn, mobileNumber }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const handleMobileNumberChange = (event) => {
    const input = event.target.value;
    const formattedNumber = input.replace(/\D/g, "");
    setMobileNumber(formattedNumber);
  };

  return (
    <>
      <h2>Verify your Mobile Number</h2>
      <p>
        Verifying your number will give access to more features on
        <br />
        Rablo. Click the button to send a verification OTP.
      </p>
      <label htmlFor="mobileNumber">
        Mobile Number<span className={style.eclips}></span>
      </label>
      <br />
      <input
        type="text"
        maxLength="10"
        placeholder={showPlaceholder ? "98765-43210" : ""}
        onFocus={() => setShowPlaceholder(false)}
        onBlur={(e) => setShowPlaceholder(e.target.value === "")}
        className={style.mob_input}
        onChange={handleMobileNumberChange}
        value={mobileNumber}
      />
      <label
        style={{
          marginLeft: " 0.854vw",
          marginTop: "4.896vw",
          fontSize: "0.885vw",
          marginLeft: "3.887vw",
          position: "absolute",
        }}
      >
        + 9 1
      </label>
      <br />
      <button
        onClick={() => handleClickBtn("verify")}
        style={{ marginTop: "0.878vw" }}
      >
        Send OTP
      </button>
    </>
  );
};

export default SendOtp;

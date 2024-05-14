import React,{useState, useEffect} from "react";
import "./styles/OtpInput.css";

const OtpInput = ({otpValues, setOtpValues,showAlert,setShowAlert}) => {


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

      

      // <===  OPT Count Down Related Functions and State ===>

      const [timer, setTimer] = useState(30);
      const [resendEnabled, setResendEnabled] = useState(false);

      useEffect(() => {
        const intervalId = setInterval(() => {
          if (timer > 0) {
            setTimer(timer - 1);
          } else {
            clearInterval(intervalId);
            setResendEnabled(true);
          }
        }, 1000);
        return () => clearInterval(intervalId);
      }, [timer]);
    
      const handleResendClick = () => {
        setTimer(30);
        setResendEnabled(false);
      };
    
    return (
        <div className="otp">
            <div className="otp-ip">
                <input className="ip" type="text" id="ip-1" value={otpValues[0]} onChange={handleOnChange} autoComplete="off" />
                <input className="ip" type="text" id="ip-2" value={otpValues[1]} onChange={handleOnChange} autoComplete="off"/>
                <input className="ip" type="text" id="ip-3" value={otpValues[2]} onChange={handleOnChange} autoComplete="off"/>
                <input className="ip" type="text" id="ip-4" value={otpValues[3]} onChange={handleOnChange} autoComplete="off"/>
            </div>
            <div className="otp-resend" style={{ height: "15px" }}>
                <div className="otp-resend-p">
                    Time Left: {"00:" + timer}
                </div>
                <div className={timer > 0 ? "InActive_otp-resend-p" :"otp-resend-p"}
                onClick={() => timer === 0 && setTimer(30)}>
                    {"Resend >"}
                </div>
            </div>
            {showAlert && (
              <p className="otp_alert">Wrong OTP entered</p>
            )}
        </div>
    );
}

export default OtpInput;
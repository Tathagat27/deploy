import React from "react";

import "./styles/SendOtpButton.css";
// className={props.number.length === 10 ? "stepotpbutton" : "Inactive_stepotpbutton"}
const StepOtpButton = (props) => {

    
    // return (
    //     props.buttonKey !== "Verify" ? (
    //         <button className={props.number.length === 10 ? "stepotpbutton" : "Inactive_stepotpbutton"}
    //                 disabled={props.number.length < 10 ? true : false } 
    //                 onClick={props.SendMobileNumber}>
    //             <span style={{fontSize: ".9625rem", color: "#ffffff"}}>{props.text}</span>
    //         </button>
    //     ) : (
    //         <button className={props.otpValues.every(value => value !== '') ? "stepotpbutton" : "Inactive_stepotpbutton"}
    //                 disabled={props.number.length < 10 ? true : false } 
    //                 onClick={props.SendOtp}>
    //             <span style={{fontSize: ".9625rem", color: "#ffffff"}}>{props.text}</span>
    //         </button>
    //     )
    // );
    return(
        <button className={props.otpValues.every(value => value !== '') ? "stepotpbutton" : "Inactive_stepotpbutton"} 
                    onClick={props.SendOtp}>
                <span style={{fontSize: ".9625rem", color: "#ffffff"}}>verify</span>
        </button>
    )
    

     
}

export default StepOtpButton;
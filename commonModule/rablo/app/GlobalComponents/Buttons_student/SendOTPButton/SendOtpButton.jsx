import React from "react";

import "./styles/SendOtpButton.css";

const StepOtpButton = (props) => {
    return (
        <div className="stepotpbutton" onClick={(props.onClick)?props.onClick(true):props.setModalShow(true)}>
            <span style={{fontSize: ".9625rem", color: "#ffffff"}}>{props.text}</span>
        </div>
    );
}

export default StepOtpButton;
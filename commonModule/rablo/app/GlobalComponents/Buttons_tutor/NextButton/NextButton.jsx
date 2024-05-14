"use client"
import React from "react";
import "./styles/NextButton.css";

const NextButton = ({handleSubmit,isStateEmpty,userData}) => {
    
    return (
        <button className={isStateEmpty(userData) ? "nextbutton" : "InActive_nextbutton"} onClick={handleSubmit} >
            {"Sumbit"}
        </button>
    );
}

export default NextButton;
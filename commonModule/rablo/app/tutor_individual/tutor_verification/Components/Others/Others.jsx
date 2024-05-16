"use client";
import { useState } from "react";
import "./Others.css";
import { FiPlus } from "react-icons/fi";
import Checkbox from "../center-section/Checkbox/Checkbox"
import { alphabets } from "../data.JS";
// import { alphabets } from "../data.JS";

const Others = ({ options, setOptions, classInput }) => {

  const [inputValue, setInputValue] = useState("");

  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleAddOption = () => {
    if (inputValue != "") {
      setOptions([...options, inputValue]);
      setInputValue("");
    }
    setIsInputClicked(!isInputClicked);
  };
  return (
    <div
      style={
        classInput
          ? {
              width: "19.5vw",
              height: "6.019vh",
              borderRadius: "0.521vw",
              justifyContent:"left",
              fontWeight:600,
              color:"#6764ffcc",
              boxSizing:"border-box",
              border:"2px solid rgba(103, 100, 255, 0.8)"
            }
          : null
      }
      className="Others_Objective"
    >
      {classInput && <p style={{fontWeight:600, margin:0, display:"flex", alignItems:"center"}} onClick={() => setIsInputClicked(!isInputClicked)}>
        <Checkbox text={alphabets[options.length]}/><span>Others</span>
      </p>}
      {!classInput && <p onClick={() => setIsInputClicked(!isInputClicked)}>Others</p>}
      {isInputClicked && (
        <input
          className={classInput ? "Other_input_sq": "Other_input"}
          style={
            (inputValue.length > 12 && !classInput)
              ? { width: inputValue.length + 15 + "vh" }
              : { width: !classInput ? "12vw": null }
          }
          placeholder="Type"
          maxLength={70}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      {isInputClicked && (
        <FiPlus className="Plus_icon" onClick={() => handleAddOption()} />
      )}
    </div>
  );
};

export default Others;

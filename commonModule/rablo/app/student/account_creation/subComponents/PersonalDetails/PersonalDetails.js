import React, { useEffect, useState } from "react";
import style from "./Personal.module.scss";
import "react-datepicker/dist/react-datepicker.css";

import Gender from "../UserInputs/Gender/Gender";
import CustomCalender from "../UserInputs/calender/Calender";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../../../Redux/studentSlices/StudentAccountCreation";


const PersonalDetails = ({ handleNext }) => {

  const {firstName, lastName, Dob, gender, mobNumber, guardianMobNumber} = useSelector((state) => state.StudentAccountCreation)

  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumber1, setMobileNumber1] = useState("");

  const [enableButton,setEnableButton] = useState(false);

  const handleMobileNumberChange = (event) => {
    const input = event.target.value;
    const formattedNumber = input.replace(/\D/g, "");
    dispatch(setUserDetails({ key: "mobNumber", value: formattedNumber }));
    setMobileNumber(formattedNumber);
  };

  const handleMobileNumberChange1 = (event) => {
    const input = event.target.value;
    const formattedNumber = input.replace(/\D/g, "");
    dispatch(setUserDetails({ key: "guardianMobNumber", value: formattedNumber }));
    setMobileNumber1(formattedNumber);
  };


  //redux dispatch functions
  const dispatch = useDispatch();
  const handleInputChange = (key, value) => {
    dispatch(setUserDetails({ key: key, value: value }));
  };

  //handling data submission
  const handleSubmission = () =>{
    if( firstName && lastName && Dob && gender && mobNumber && guardianMobNumber ){
      handleNext("AddressDetails")
    }else{
      alert("Please fill out all required fields.");
    } 
  }
  useEffect(() =>{
    if( firstName && lastName && Dob && gender && mobNumber.length == 10 && guardianMobNumber.length == 10 ){
      setEnableButton(true)
    }
  },[firstName, lastName, Dob, gender, mobNumber, guardianMobNumber])

  return (
    <>
      <form action="">
        <div className={style.Wrapper}>
          <div className={style.Input__Section}>
            <div className={style.Input__wrapper}>
              <label className={style.label}>First Name</label>
              <input
                className={style.Input}
                type="text"
                placeholder="Type your First Name"
                name="firstName"
                autoComplete="off"
                maxLength={30}
                onChange={(e) => handleInputChange("firstName",e.target.value)}
              />
            </div>
            <div className={style.Input__wrapper}>
              <label className={style.label}>Last Name</label>
              <input
                className={style.Input}
                type="text"
                placeholder="Type your Last Name"
                name="lastName"
                autoComplete="off"
                maxLength={30}
                onChange={(e) => handleInputChange("lastName",e.target.value)}
              />
            </div>
          </div>

          <div className={style.Input__Section}>
            <div className={style.Input__wrapper}>
              <label className={style.label}>Date of Birth</label>
             <CustomCalender/>
             </div>
            <div className={style.Input__wrapper}>
              <label className={style.label}>Gender</label>
              <Gender />
            </div>
          </div>

          <div className={style.Input__Section}>
            <div className={style.Input__wrapper}>
              <label className={style.label}>
                Mobile Number <span>{"(Optional)"}</span>
              </label>
              <input
                className={style.Number__Input}
                autoComplete="off"
                type="text"
                placeholder="__________"
                id="mobileNumber"
                maxLength="10"
                onChange={handleMobileNumberChange}
                value={mobileNumber}
                
              />
              <label className={style.Number__label}>+91</label>
            </div>
            <div className={style.Input__wrapper}>
              <label className={style.label}>
                {" Guardian's Mobile Number"}
              </label>
              <input
                className={style.Number__Input}
                type="text"
                placeholder="__________"
                id="guardianMobNumber"
                maxLength="10"
                onChange={handleMobileNumberChange1}
                value={mobileNumber1}
                
              />
              <label className={style.Number__label}>+91</label>
            </div>
          </div>

          <div className={style.Input__Button__Section}>
            <button
              onClick={() => handleSubmission()}
              className={style.button}
              style={
                enableButton ?
                {cursor:'pointer'} :
                {cursor:'not-allowed',color:"#666",background: "#ccc"}
              }
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;

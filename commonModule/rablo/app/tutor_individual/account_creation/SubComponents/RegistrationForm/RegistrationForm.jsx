import React from "react";
import "./styles/RegistrationForm.css";
import RInput from "../../../../GlobalComponents/Input/RInput/RInput";
import PicturUpload from "../../../../GlobalComponents/Input/RInput/subComponents/DropBox/DropBox";
import DropDown from "../../../../GlobalComponents/Input/RInput/subComponents/DropDown/DropDown";
import { useSelector } from "react-redux";
const RegistrationForm = () => {
  return (
    <div className="RegistrationForm__wrapper">
      {/* 1st Name and Last Name  */}
      <div className="Input__wrapper">
        <div className="Input__container">
          <RInput
            label={"First Name"}
            placeHolder={"Type Your First Name"}
            type={"text"}
            StateName={"firstName"}
          />
        </div>
        <div className="Input__container">
          <RInput
            label={"Last Name"}
            placeHolder={"Type Your Last Name"}
            type={"text"}
            StateName={"lastName"}
          />
        </div>
      </div>

      {/* Upload Your Profile Picture */}

      <div className="Input__wrapper__ImageUpload">
        <RInput
          label={"Upload your Best Profile Picture"}
          placeHolder={"Type Your Last Name"}
          type={"file"}
          StateName={"file"}
        />
      </div>

      {/* Gender and Mobile number */}
      <div className="Input__wrapper">
        <div className="Input__container">
          <RInput
            label={"Gender"}
            placeHolder={"Type Your Address"}
            type={"gender"}
          />
        </div>
        <div className="Input__container">
          <RInput
            label={"Mobile Number"}
            placeHolder={"Enter Mobile Number"}
            type={"number"}
          />
        </div>
      </div>

      {/* Apaarment House & Date of Birth */}
      <div className="Input__wrapper">
        <div className="Input__container">
          <RInput
            label={"Apartment/House No."}
            placeHolder={"Type Your Address"}
            type={"text"}
            StateName={"addressLine1"}
          />
        </div>
        <div className="Input__container">
          <RInput label={"Date of Birth"} type={"date"} />
        </div>
      </div>

      {/* Apaarment House*/}
      <div className="Input__wrapper">
        <div className="Appartment__Input__container">
          <RInput
            label={"Apartment/House No."}
            placeHolder={"Address Line 2"}
            StateName={"addressLine2"}
          />
        </div>
      </div>

      {/* City and State*/}
      <div className="Input__wrapper">
        <div className="Input__container">
          <RInput
            label={"City"}
            placeHolder={"Enter Your State"}
            type={"dropdownCity"}
            StateName={"city"}
          />
        </div>
        <div className="Input__container">
          <RInput
            label={"State"}
            placeHolder={"Select Your State"}
            type={"dropdownState"}
            StateName={"state"}
          />
        </div>
      </div>

      {/* Pin COde and Referral Code*/}
      <div className="Input__wrapper">
        <div className="Input__container">
          <RInput
            label={"PIN Code"}
            placeHolder={"Type Your PINCODE"}
            type={"pincode"}
          />
        </div>
        <div className="Input__container">
          <RInput
            label={"Referral Code"}
            placeHolder={"Type Your Referral"}
            type={"referral"}
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

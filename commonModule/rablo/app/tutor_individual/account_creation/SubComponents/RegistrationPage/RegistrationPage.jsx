"use client";
import { useEffect, useState } from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ProgressBar from "../../../../GlobalComponents/ProgressBar/ProgressBar";
import "./styles/RegistrationPage.css";
import NextButton from "../../../../GlobalComponents/Buttons_tutor/NextButton/NextButton";
import Header from "./subComponents/RegistrationHeader/RegistrationHeader";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Axios from "../../../../Axios/Axios";
import Cookies from "universal-cookie";
import axios from "axios";

const RegistrationPage = ({ Toggle }) => {
  const router = useRouter();

  const userData = useSelector((state) => state.tutorAccountCreation);

  console.log(userData);

  const {
    firstName,
    lastName,
    file,
    gender,
    mobileNumber,
    dob,
    addressLine1,
    addressLine2,
    city,
    state,
    pincode,
  } = userData;

  const isStateEmpty = (state) => {
    return Object.values(state).every((value) => {
      return !(
        value === "" ||
        value === 0 ||
        value === undefined ||
        value === null ||
        (typeof value === "number" && isNaN(value))
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    console.log("formdata", formData);

    // axios.post('http://localhost:6500/api/upload', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // })
    // .then(response => {
    //   if(response.status === 200){
    //     console.log("filelink",response.data.data)
    //     const {fileLink} = response.data.data;
    //     sessionStorage.setItem("driveLink",fileLink);
    //     sendData();
    //   }
    //   console.log('File uploaded successfully:', response.data);
    //   // Handle response from backend if needed
    // })
    // .catch(error => {
    //   console.error('Error uploading file:', error);
    // })
    sendData();
  };

  const sendData = () => {
    if (typeof window !== 'undefined') {
    const tutorId = localStorage.getItem("query1");
    const token = localStorage.getItem("query2");
    }

    console.log("function Calling tutor ID", tutorId);
    console.log("function Calling token ID", token);

    const bodyData = {
      firstName: firstName,
      lastName: lastName,
      tutorId: tutorId,
      profile: file.name.toString(),
      gender: gender,
      mobileNumber: mobileNumber.toString(),
      dob: dob,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      state: state,
      pincode: pincode,
    };
    console.log("BODY DATA", bodyData);
    Axios.post("/api/account", bodyData)
      .then((response) => {
        if (response.status === 200) {
          router.push("/tutor_individual/dashboard");
        }
      })
      .catch((error) => {
        alert("Check your Network connection");
        console.error("Error making POST request:", error);
      });
    Axios.post("/api/sendmail", {
      tutorId: tutorId,
    }).then((response) => {
      console.log(response.response);
    });
  };

  // const bodyData = {
  //   "firstName" : "sridhsar",
  //   "lastName" : "arivu",
  //   "file" : "file.jpg",
  //   "gender" : "male",
  //   "mobileNumber" : "8946018164",
  //   "dob" : "12-07-2001",
  //   "addressLine1" : "qkehfkwef",
  //   "addressLine2" : "wlefjlkw",
  //   "city" : "tiruvannamalai",
  //   "state" : "tamil nadu",
  //   "pincode" :606601
  //   }

  // Assuming 'userData.file' contains the image file

  return (
    <div className="Registartion__wrapper">
      <Header />

      <div className="Registration__main">
        <h3>Personal Details</h3>
        <h4>Fill out the details</h4>
        <div className="RegistrationForm">
          <ProgressBar />
          <RegistrationForm />
        </div>
      </div>
      <div className="Next_Button">
        <NextButton
          isStateEmpty={isStateEmpty}
          userData={userData}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default RegistrationPage;

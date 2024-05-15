"use client";
// Components
import HeaderHelp from "../RegistrationPage/SubComponents/HeaderHelp";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import AddressDetails from "../AddressDetails/AddressDetails";
import AcademicDetails from "../AcademicDetails/AcademicDetails";
import VerifyMobile from "../MobileVerification/VerifyMobile";

//next js import
import { useRouter } from "next/navigation";

//Hooks
import { useState } from "react";

//Axios
import axios from "axios";

// Styling
import styles from "../../page.module.css";
import PageStyle from "../RegistrationPage/styles/InputPage.module.scss";
import fontStyle from "../RegistrationPage/styles/font.module.scss";
import IconsStyle from "../RegistrationPage/styles/Icons.module.scss";

// icons and others
import { IoChevronForward } from "react-icons/io5";
import Image from "next/image";
import reactangleBar from "../MobileVerification/Asset/Images/Rectangle.png";
import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
} from "react-icons/tb";

//Redux imports
import { useSelector } from "react-redux";

const UserInputPage = ({ user }) => {
  const router = useRouter();
  const STUDENT_BACKEND_URL = process.env.NEXT_PUBLIC_STUDENT_BACKEND_URL;

  if (typeof window !== 'undefined') {
  const studentID = localStorage.getItem("query1");
  }

  const [activeSection, SetActiveSection] = useState("PersonalDetails");

  const handleNext = (nextSection) => {
    if (nextSection != "userInputDone") {
      SetActiveSection(nextSection);
    } else {
      submitHandler();
    }
  };

  const userDataStudent = useSelector((state) => state.StudentAccountCreation);
  const {
    firstName,
    lastName,
    Dob,
    gender,
    mobNumber,
    guardianMobNumber,
    addressLine1,
    city,
    state,
    pincode,
    referralCode,
    schoolName,
    Class,
    boards,
    subjects,
  } = userDataStudent;

  const submitHandler = async () => {
    try {
      const response = await axios.post(
        `${STUDENT_BACKEND_URL}/api/account_creation`,
        {
          firstName: firstName,
          lastName: lastName,
          dob: Dob,
          gender: gender,
          studentId: studentID,
          phoneNumber: mobNumber,
          guardianMobNumber: guardianMobNumber,
          addressLine1: addressLine1,
          city: city,
          state: state,
          pincode: pincode,
          schoolName: schoolName,
          class_: Class,
          boards: boards,
          subjects: subjects,
        }
      );
      if (response.status === 200) {
        router.push("/student/dashboard");
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.log(err.response.data.message);
      alert("Failed to submit. Please try again.");
    }
  };
  return (
    <div className={styles.userInputWrapper}>
      <HeaderHelp />
      {activeSection != "userInputDone" ? (
        <div>
          {/* <==== Heading section ===> */}

          <div className={PageStyle.Page__title}>
            <p className={fontStyle.font_Style2}>
              We would love to know more about you.
            </p>
            <p className={fontStyle.font_Style2}>
              Please share some basic details{" "}
            </p>
          </div>

          {/*         <==== Section Navigation  ===>
          informing users which section they are currently In 3 - sections
          */}

          <div className={PageStyle.Section__navbar}>
            <div className={PageStyle.section}>
              <TbSquareRoundedNumber1Filled
                className={
                  activeSection === "PersonalDetails"
                    ? IconsStyle.Active__Section__nav__icons
                    : IconsStyle.InActive__Section__nav__icons
                }
              />
              <p
                className={
                  activeSection === "PersonalDetails"
                    ? fontStyle.Active__navbar__font
                    : fontStyle.InActive__navbar__font
                }
              >
                Personal Details
              </p>
              {activeSection === "PersonalDetails" && (
                <Image
                  className={PageStyle.section__bar}
                  src={reactangleBar}
                  alt="section bar"
                />
              )}
            </div>

            <IoChevronForward color="rgba(0, 0, 0, 0.30)" />

            <div className={PageStyle.section}>
              <TbSquareRoundedNumber2Filled
                className={
                  activeSection === "AddressDetails"
                    ? IconsStyle.Active__Section__nav__icons
                    : IconsStyle.InActive__Section__nav__icons
                }
              />
              <p
                className={
                  activeSection === "AddressDetails"
                    ? fontStyle.Active__navbar__font
                    : fontStyle.InActive__navbar__font
                }
              >
                Address Details
              </p>
              {activeSection === "AddressDetails" && (
                <Image
                  className={PageStyle.section__bar}
                  src={reactangleBar}
                  alt="section bar"
                />
              )}
            </div>

            <IoChevronForward color="rgba(0, 0, 0, 0.30)" />

            <div className={PageStyle.section}>
              <TbSquareRoundedNumber3Filled
                className={
                  activeSection === "AcademicDetails"
                    ? IconsStyle.Active__Section__nav__icons
                    : IconsStyle.InActive__Section__nav__icons
                }
              />
              <p
                className={
                  activeSection === "AcademicDetails"
                    ? fontStyle.Active__navbar__font
                    : fontStyle.InActive__navbar__font
                }
              >
                Academic Details
              </p>
              {activeSection === "AcademicDetails" && (
                <Image
                  className={PageStyle.section__bar}
                  src={reactangleBar}
                  alt="section bar"
                />
              )}
            </div>
          </div>

          {/* <=== getting inputs from users ===> */}
          {/* <=== Personal Details Section ===> */}

          {activeSection === "PersonalDetails" && (
            <>
              <div className={PageStyle.User__Input__Heading}>
                <h2 className={fontStyle.font_Style2}>Personal Details</h2>
                <p className={fontStyle.font__style3}>Fill out the details</p>
              </div>
              <PersonalDetails handleNext={handleNext} />
            </>
          )}
          {/* <=== Address Details ===> */}

          {activeSection === "AddressDetails" && (
            <>
              <div className={PageStyle.User__Input__Heading}>
                <h2 className={fontStyle.font_Style2}>Address Details</h2>
                <p className={fontStyle.font__style3}>Fill out the details</p>
              </div>
              <AddressDetails handleNext={handleNext} />
            </>
          )}

          {/* <=== Academic Details ===> */}
          {activeSection === "AcademicDetails" && (
            <div className={PageStyle.overflow__wrapper}>
              <div className={PageStyle.User__Input__Heading}>
                <h2 className={fontStyle.font_Style2}>Academic Details</h2>
                <p className={fontStyle.font__style3}>Fill out the details</p>
              </div>
              <AcademicDetails handleNext={handleNext} />
            </div>
          )}
        </div>
      ) : (
        // <=== Mobile Verification Page ===>
        <VerifyMobile />
      )}
    </div>
  );
};

export default UserInputPage;

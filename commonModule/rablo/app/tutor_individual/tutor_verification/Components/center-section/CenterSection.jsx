"use client";
import React, { useEffect, useState } from "react";
import "./style/CenterSection.css";
import breadCrumbArrow from "../../../../GlobalComponents/Assets_tutor/Images/bread-crumb-arrow.svg";
import Image from "next/image";
import QualificationForm from "./Sub-Component/form/QualificationForm";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSelectionIndex } from "../../../../Redux/tutorSlices/tutor-verification";
import PreferenceForm from "./Sub-Component/form/PreferenceForm";
import VerificationForm from "./Sub-Component/form/VerificationForm";
import SelfDeclarationForm from "./Sub-Component/form/SelfDeclarationForm";
import UpdateBox from "../update-box/UpdateBox";
import { redirect, useRouter } from "next/navigation";
import CompleteBox from "../CompletedBox/CompletedBox";
import {
  updatePreference,
  updateQualification,
  updateVerification,
} from "../../server/api";

const CenterSection = ({ tutorID }) => {
  const router = useRouter();
  const sections = useSelector(
    (state) => state.tutorVerificationReducer.sections
  );
  let selectedSectionIndex = useSelector(
    (state) => state.tutorVerificationReducer.selectedSectionIndex
  );
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const selectedSection = sections[selectedSectionIndex];
  const dispatch = useDispatch();
  let [percentage, setPercentange] = useState(0);
  let [top, setTop] = useState(0);
  let [fillHeight, setFillHeight] = useState(0);
  const [updateBox, showUpdateBox] = useState(false);
  const [completedBox, showCompletedBox] = useState(false);

  //preference
  const [selectedSection2, setSelectedSection] = useState();
  const [languages, setLanguages] = useState([]);
  const [ModeofClass, setModeofClass] = useState("");
  const [TimeInvest, setTimeInvest] = useState("");

  //Qualificatoin
  const [optionSelected, setOptionSelected] = useState();
  const [EverWorkedAs, setEverWorkedAs] = useState("");
  const [CurrentRole, setCurrentRole] = useState("");
  const [HighestQualification, setHighestQualification] = useState("");
  const [YearsOfExperience, setYearsOfExperience] = useState("");
  const [SelectYourExpertiseCategory, setSelectYourExpertiseCategory] =
    useState("");
  const [NameOfSchoolOrUniversity, setNameOfSchoolOrUniversity] = useState("");
  const [Academics, setAcademics] = useState("");
  const [anyCertificate, setAnyCertificate] = useState("");
  const [FinalMark, setFinalMark] = useState({
    selectedFile: null,
    fileName: "",
    uploading: true,
    loadingBar: 0,
  });
  const [Experience, setExperience] = useState({
    selectedFile: null,
    fileName: "",
    uploading: true,
    loadingBar: 0,
  });

  //Verification
  const [RealTime, setRealTime] = useState({
    selectedFile: null,
    fileName: "",
    uploading: true,
    loadingBar: 0,
  });
  const [Addhar, setAddhar] = useState({
    selectedFile: null,
    fileName: "",
    uploading: true,
    loadingBar: 0,
  });
  const [addharNumber, setAddharNumber] = useState();

  //AcceptHandler
  const acceptHandler = async () => {
    // alert("Accepted");
    showCompletedBox(true);
  };
  useEffect(() => {
    if (selectedSectionIndex === 0) {
      setTop(3);
      setPercentange(0);
      setFillHeight(0);
    } else if (selectedSectionIndex === 1) {
      setTop(23);
      setPercentange(33);
      setFillHeight(23);
    } else if (selectedSectionIndex === 2) {
      setTop(56);
      setPercentange(66);
      setFillHeight(66);
    } else {
      setTop(90);
      setPercentange(100);
      setFillHeight(100);
    }
  }, [selectedSectionIndex]);

  const nextHandler = async () => {
    if (selectedSectionIndex !== 3) {
      if (selectedSectionIndex === 0) {
        try {
          const response = await updateQualification(
            {
              workedAs: EverWorkedAs,
              currentRole: CurrentRole,
              qualifications: {
                finalMarksheetUrl: FinalMark.selectedFile,
                degree: HighestQualification,
                nameOfInstitute: NameOfSchoolOrUniversity,
              },
              certifications: {
                title: anyCertificate,
                instituteName: NameOfSchoolOrUniversity,
                publishedDate: new Date(),
                certificateUrl: Experience.selectedFile,
              },
              moreAcademics: Academics,
              collegeUniversity: NameOfSchoolOrUniversity,
              experience: YearsOfExperience,
              expertise: SelectYourExpertiseCategory,
            },
            tutorID
          );
          dispatch(setSelectedSelectionIndex(selectedSectionIndex + 1));
          showUpdateBox(true);
        } catch (error) {
          alert(error.message);
        }
      }
      if (selectedSectionIndex === 1) {
        try {
          const response = await updatePreference(
            {
              preferredClasses: selectedSection2,
              preferredLanguage: languages,
              modeofClass: ModeofClass,
              jobType: TimeInvest,
            },
            tutorID
          );
          dispatch(setSelectedSelectionIndex(selectedSectionIndex + 1));
          showUpdateBox(true);
        } catch (error) {
          alert(error.message);
        }
      }
      if (selectedSectionIndex == 2) {
        try {
          const response = await updateVerification(
            {
              aadhar: {
                profilePictureUrl: RealTime.selectedFile,
                aadharNumber: addharNumber,
                aadharImageUrl: {
                  front: Addhar.selectedFile,
                  back: Addhar.selectedFile,
                },
              },
              drivingLisence: {
                licenceNumber: addharNumber,
                licenceImageUrl: {
                  front: Addhar.selectedFile,
                  back: Addhar.selectedFile,
                },
              },
            },
            tutorID
          );
        } catch (error) {
          alert(error.message);
        }
      }
    }
  };

  const backHandler = () => {
    dispatch(setSelectedSelectionIndex(selectedSectionIndex - 1));
  };

  const skipHandler = () => {
    if (selectedSectionIndex !== 3)
      dispatch(setSelectedSelectionIndex(selectedSectionIndex + 1));
  };

  return (
    <div className="center-section">
      <div className="container-1">
        <div>
          <div className="heading-1">{selectedSection}</div>
          <div className="line-1">
            {selectedSectionIndex === 0 && (
              <>Enter your qualification details here</>
            )}
            {selectedSectionIndex === 1 && (
              <>Choose the best way you want to teach.</>
            )}
            {selectedSectionIndex === 2 && <>Select the mode of verification</>}
            {selectedSectionIndex === 3 && <>Select the mode of verification</>}
          </div>
        </div>

        <div className="bread-crumbs">
          {sections.map((process, i) => (
            <div className="single-crumb" key={i}>
              <div
                style={
                  i === selectedSectionIndex
                    ? { borderBottom: "0.177vw solid #6764FF" }
                    : null
                }
                className="container-sc-1"
              >
                <div
                  style={
                    i === selectedSectionIndex
                      ? { backgroundColor: "#6764FF" }
                      : null
                  }
                  className={`step-box ${
                    i < selectedSectionIndex ? "completed" : ""
                  }`}
                >
                  <div>{i + 1}</div>
                </div>
                <span
                  className={i < selectedSectionIndex ? "completed-span" : ""}
                  style={
                    i === selectedSectionIndex ? { color: "#6764FF" } : null
                  }
                >
                  {process}
                </span>
              </div>
              {i !== sections.length - 1 ? (
                <Image
                  alt="bread crumb"
                  src={breadCrumbArrow}
                  className={`${i < selectedSectionIndex ? "completed" : ""}`}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="container-2">
        {selectedSectionIndex !== 3 && (
          <div className="progress-bar">
            <div className="bar-text">Start</div>
            <div className="bar">
              <div className="fill" style={{ height: `${fillHeight}%` }}></div>
              <div className="percentage" style={{ top: `${top}%` }}>
                {percentage}%
              </div>
            </div>
            <div className="bar-text">Completed</div>
            <div
              className="button skip-button"
              style={
                selectedSectionIndex === 0 || selectedSectionIndex === 3
                  ? { visibility: "hidden" }
                  : null
              }
              onClick={skipHandler}
            >
              Skip
            </div>
          </div>
        )}

        <div className="container-3">
          {selectedSectionIndex === 0 && (
            <QualificationForm
              optionSelected={optionSelected}
              setOptionSelected={setOptionSelected}
              EverWorkedAs={EverWorkedAs}
              setEverWorkedAs={setEverWorkedAs}
              CurrentRole={CurrentRole}
              setCurrentRole={setCurrentRole}
              HighestQualification={HighestQualification}
              setHighestQualification={setHighestQualification}
              YearsOfExperience={YearsOfExperience}
              setYearsOfExperience={setYearsOfExperience}
              SelectYourExpertiseCategory={SelectYourExpertiseCategory}
              setSelectYourExpertiseCategory={setSelectYourExpertiseCategory}
              NameOfSchoolOrUniversity={NameOfSchoolOrUniversity}
              setNameOfSchoolOrUniversity={setNameOfSchoolOrUniversity}
              Academics={Academics}
              setAcademics={setAcademics}
              FinalMark={FinalMark}
              setFinalMark={setFinalMark}
              anyCertificate={anyCertificate}
              setAnyCertificate={setAnyCertificate}
              Experience={Experience}
              setExperience={setExperience}
            />
          )}
          {selectedSectionIndex === 1 && (
            <PreferenceForm
              selectedSection={selectedSection2}
              setSelectedSection={setSelectedSection}
              languages={languages}
              setLanguages={setLanguages}
              ModeofClass={ModeofClass}
              setModeofClass={setModeofClass}
              TimeInvest={TimeInvest}
              setTimeInvest={setTimeInvest}
            />
          )}
          {selectedSectionIndex === 2 && (
            <VerificationForm
              RealTime={RealTime}
              setRealTime={setRealTime}
              Addhar={Addhar}
              setAddhar={setAddhar}
              addharNumber={addharNumber}
              setAddharNumber={setAddharNumber}
            />
          )}
          {selectedSectionIndex === 3 && (
            <SelfDeclarationForm
              checkBox1={checkBox1}
              checkBox2={checkBox2}
              setCheckBox1={setCheckBox1}
              setCheckBox2={setCheckBox2}
            />
          )}

          <div className="buttons">
            <button
              className="button back-button"
              onClick={backHandler}
              style={
                selectedSectionIndex === 0 ? { visibility: "hidden" } : null
              }
            >
              &lt; Back
            </button>
            {selectedSectionIndex !== 3 ? (
              <>
                <div onClick={nextHandler} className="button next-button">
                  Next &gt;
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={(checkBox1 && checkBox2 && acceptHandler) || null}
                  className="button next-button"
                  style={
                    checkBox1 && checkBox2
                      ? {
                          backgroundColor: "rgba(103, 100, 255, 0.8)",
                          cursor: "pointer",
                        }
                      : {
                          backgroundColor: "rgba(211, 211, 211, 0.8)",
                          cursor: "no-drop ",
                          color: "#808080",
                        }
                  }
                >
                  Accept &gt;
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {updateBox && <UpdateBox showUpdateBox={showUpdateBox} />}
      {completedBox && <CompleteBox showUpdateBox={showCompletedBox} />}
    </div>
  );
};

export default CenterSection;

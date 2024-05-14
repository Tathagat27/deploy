import React, { useEffect, useState } from "react";
import "./styles/CreateYourPlan.css";
import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
} from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import Class from "./SubComponets/Class/Class";
import Declaration from "./SubComponets/Declaration/Declaration";
import Objective from "./SubComponets/Objective/Objective";
import SaveAndNext from "../../../../GlobalComponents/Buttons_tutor/SaveAndNext/SaveAndNext";
import { LuChevronLeft } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import PlanUpdated from "../../../../GlobalComponents/Popups_tutor/BoostrapModals/PlanUpdated/PlanUpdated";
import {
  UpdatePlanCount,
  createPlans,
  sendEmail,
  updatePlans,
} from "../../serverComponents/api";
import { duration } from "@mui/material";

const CreateYourPlan = ({
  tutorID,
  navigation,
  SetNavigation,
  modalShow,
  setModalShow,
}) => {
  //const [navigation , SetNavigation ] = useState("Class");

  const [ObjectiveClick, setObjectiveClick] = useState([]);
  const [OutcomeClick, setOutcomeClick] = useState([]);
  const [isActive, setIsActive] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
  });

  const standardList = [
    "Nus-2nd",
    "3rd - 5th",
    "6th - 8th",
    "9th - 10th",
    "11th - 12th",
    "Exam Prep",
    "Other",
  ];

  const standardset = () => {
    let s = "";
    if (isActive.A) {
      s += standardList[0];
    }
    if (isActive.B) {
      if (s !== "") s += ", ";
      s += standardList[1];
    }
    if (isActive.C) {
      if (s !== "") s += ", ";
      s += standardList[2];
    }
    if (isActive.D) {
      if (s !== "") s += ", ";
      s += standardList[3];
    }
    if (isActive.E) {
      if (s !== "") s += ", ";
      s += standardList[4];
    }
    if (isActive.F) {
      if (s !== "") s += ", ";
      s += standardList[5];
    }
    if (isActive.G) {
      if (s !== "") s += ",";
      s += standardList[6];
    }
    return s;
  };
  // const standardset = () => {
  //   let s = "";
  //   const activeStandards = Object.keys(isActive).filter(key => isActive[key]);
  //   activeStandards.forEach(key => {
  //     s += standardList[key];
  //   });
  //   return s;
  // };
  useEffect(() => {
    SetNavigation("Class");
  }, []);
  const { SelectedPlan } = useSelector((state) => state.CreateYourPlan);
  console.log("SelectedPlan", SelectedPlan);
  const [StudentCount, setStudentCount] = useState(1);
  const [ModeOfClass, setModeOfClass] = useState({
    online: false,
    offline: false,
  });
  const [selectedLanguages, setSelectedLanguages] = useState([
    "Hindi",
    "English",
  ]);
  const [Duration, setDuration] = useState({ hours: 1, min: 0 });
  const [StartTime, SetStartTime] = useState({ Hours: 11, Minutes: 10 });
  const [EndTime, SetEndTime] = useState({ Hours: 12, Minutes: 10 });
  const [AM_PM_Toggle, setAM_PM_Toggle] = useState(false);
  const [AM_PM_Toggle_EndTime, setAM_PM_Toggle_EndTime] = useState(false);
  const [isHoursSelected, setIsHoursSelected] = useState({
    HoursSelected: true,
    MinutesSelected: false,
  });
  const [Weeks, setWeeks] = useState([]);
  const Icon = TbSquareRoundedNumber1Filled;
  const navigation_path_varibles = [
    {
      name: "Class",
      Icon: TbSquareRoundedNumber1Filled,
      Arrow: MdKeyboardArrowRight,
    },
    {
      name: "Objective",
      Icon: TbSquareRoundedNumber2Filled,
      Arrow: MdKeyboardArrowRight,
    },
    { name: "Declaration", Icon: TbSquareRoundedNumber3Filled },
  ];
  const dispatch = useDispatch();
  const { updateYourPlan } = useSelector((state) => state.CreateYourPlan);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [batchStrength, setBatchStrength] = useState(1);
  const [TuitionFees, SetTuitionFees] = useState(0);

  // Create Plan handler
  const createPlan = async () => {
    try {
      const data = await createPlans({
        tutorId: tutorID || "RABALO02",
        standard: standardset(),
        demo_Timings: StudentCount.toString(),
        modeOfClass: ModeOfClass.online ? "Online" : "Offline",
        duration: Duration.min.toString() + "min",
        class_begins:
          StartTime.Hours.toString() +
          ":" +
          StartTime.Minutes.toString() +
          " " +
          (AM_PM_Toggle ? "PM" : "AM") +
          " - " +
          EndTime.Hours.toString() +
          ":" +
          EndTime.Minutes.toString() +
          " " +
          (AM_PM_Toggle_EndTime ? "PM" : "AM"),
        Subjects: selectedSubjects,
        Weekly_schedule: Weeks,
        language: selectedLanguages,
        fee_charge: TuitionFees,
        batch_length: batchStrength,
        Objective: ObjectiveClick[0],
        Outcome: OutcomeClick[0],
      });
      await UpdatePlanCount({
        tutorId: tutorID || "RABALO02",
      });
      setModalShow(true);
      await sendEmail({
        email: "prathamkumar.mbd@gmail.com",
        subject: "Plan Created",
        message: "Your Plan has been created successfully",
      });
    } catch (error) {
      alert(error.message);
    }
  };
  //Upadate Plan handler
  const updatePlan = async () => {
    try {
      const data = await updatePlans({
        tutorId: tutorID || "RABALO02",
        standard: standardset(),
        demo_Timings: "Monday, 3:00 PM",
        modeOfClass: ModeOfClass.online ? "Online" : "Offline",
        duration: Duration.min.toString(),
        class_begins: "2024-02-01T08:00:00Z",
        Subjects: selectedSubjects,
        Weekly_schedule: Weeks,
        language: selectedLanguages,
        fee_charge: TuitionFees,
        batch_length: batchStrength,
        Objective: ObjectiveClick[0],
        Outcome: OutcomeClick[0],
        PlanId: SelectedPlan.PlanId,
      });
      setModalShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  const Navigate = (back) => {
    if (back != "back") {
      if (navigation === "Class") {
        SetNavigation("Objective");
      } else if (navigation === "Objective") {
        SetNavigation("Declaration");
      } else {
        if (updateYourPlan) {
          updatePlan();
          // console.log("update plan")
        } else {
          createPlan();
        }
      }
    } else {
      if (navigation === "Declaration") {
        SetNavigation("Objective");
      } else {
        SetNavigation("Class");
      }
    }
  };
  const [SaveAndNextBtnDisabled, setSaveAndNextBtnDisabled] = useState(true);
  return (
    <div className="CreateYourPlan_wrapper">
      <h4>{!updateYourPlan ? "Create Your Plan" : "Edit Your Plan"}</h4>
      <p>The power of creating your batch plan now at your disposal!!!</p>
      <div className="navigation_path">
        {navigation_path_varibles.map((items, index) => (
          <div key={index} className="path_variables">
            <items.Icon
              className={
                navigation === items.name ? "Selected_path_icons" : "path_icons"
              }
            />
            <p
              className={
                navigation === items.name
                  ? "Selected_Variable_name"
                  : "variable_name"
              }
            >
              {items.name}
            </p>
            {items.Arrow && <items.Arrow className="arrow" />}
          </div>
        ))}
      </div>
      <div className="Scroll_Container_create_plan">
        {navigation === "Class" ? (
          <Class
            isActive={isActive}
            setIsActive={setIsActive}
            StudentCount={StudentCount}
            setStudentCount={setStudentCount}
            ModeOfClass={ModeOfClass}
            setModeOfClass={setModeOfClass}
            selectedSubjects={selectedSubjects}
            setSelectedSubjects={setSelectedSubjects}
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
            batchStrength={batchStrength}
            setBatchStrength={setBatchStrength}
            TuitionFees={TuitionFees}
            SetTuitionFees={SetTuitionFees}
            Duration={Duration}
            setDuration={setDuration}
            StartTime={StartTime}
            SetStartTime={SetStartTime}
            EndTime={EndTime}
            SetEndTime={SetEndTime}
            AM_PM_Toggle={AM_PM_Toggle}
            setAM_PM_Toggle={setAM_PM_Toggle}
            AM_PM_Toggle_EndTime={AM_PM_Toggle_EndTime}
            setAM_PM_Toggle_EndTime={AM_PM_Toggle_EndTime}
            isHoursSelected={isHoursSelected}
            setIsHoursSelected={setIsHoursSelected}
            Weeks={Weeks}
            setWeeks={setWeeks}
          />
        ) : navigation === "Objective" ? (
          <Objective
            ObjectiveClick={ObjectiveClick}
            setObjectiveClick={setObjectiveClick}
            setOutcomeClick={setOutcomeClick}
            OutcomeClick={OutcomeClick}
          />
        ) : (
          <Declaration
            ModeOfClass={ModeOfClass}
            selectedSubjects={selectedSubjects}
            selectedLanguages={selectedLanguages}
            batchStrength={batchStrength}
            Weeks={Weeks}
            TuitionFees={TuitionFees}
            Duration={Duration}
            s={standardset}
            timing={
              StartTime.Hours.toString() +
              ":" +
              StartTime.Minutes.toString() +
              " " +
              (AM_PM_Toggle ? "PM" : "AM") +
              " - " +
              EndTime.Hours.toString() +
              ":" +
              EndTime.Minutes.toString() +
              " " +
              (AM_PM_Toggle_EndTime ? "PM" : "AM")
            }
            setSaveAndNextBtnDisabled={setSaveAndNextBtnDisabled}
            SaveAndNextBtnDisabled={SaveAndNextBtnDisabled}
          />
        )}
      </div>
      <div className="save_and_next_btn">
        {navigation != "Class" && (
          <button
            onClick={() => Navigate("back")}
            className="Objective_Back_btn"
          >
            <LuChevronLeft style={{ fontSize: "1.5vw" }} />{" "}
            <span
              style={{
                fontStyle: "1vw",
                fontFamily: "Poppins,sans serif",
                fontSize: "1.2vw",
                marginRight: "0.8vw",
              }}
            >
              Back
            </span>
          </button>
        )}
        {navigation === "Declaration" ? (
          <SaveAndNext
            ButtonText={"Continue"}
            SaveAndNextBtnDisabled={SaveAndNextBtnDisabled}
            disabled={SaveAndNextBtnDisabled}
            function={Navigate}
          />
        ) : (
          <SaveAndNext ButtonText={"Save & Next"} function={Navigate} />
        )}

        <PlanUpdated
          show={modalShow}
          onHide={() => setModalShow(false)}
          setModalShow={setModalShow}
        />
      </div>
    </div>
  );
};

export default CreateYourPlan;

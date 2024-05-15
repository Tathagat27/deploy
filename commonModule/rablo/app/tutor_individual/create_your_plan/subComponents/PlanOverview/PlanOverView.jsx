"use client";
import "./styles/PlanOverView.css";

import Delete_Icon from "./Assets/Delete_icon.svg";
import deletegreen from "./Assets/bag.svg";
import Left_arrow from "./Assets/Left_arrow.svg";
import Right_arrow from "./Assets/Right_arrow.svg";
import arrow from "./Assets/arrrow.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import RemoveYourPlanPopup from "../../../../GlobalComponents/Popups_tutor/BoostrapModals/RemoveYourPlan/RemoveYourPlan";
import { useState } from "react";
import {
  setAddPlan,
  setPlanDetails,
  setPlanSelected,
} from "../../../../Redux/tutorSlices/CreateYourPlan";
import { useDispatch, useSelector } from "react-redux";
import { deletePlans } from "../../serverComponents/api";

const PlanOverView = () => {
  const renderSubjects = (subjects) => {
    if (!subjects || subjects.length === 0) return "No subjects";

    let displaySubjects = `${subjects[0]} ${subjects[1]}`; // Initial value with first two subjects

    if (subjects.length > 2) {
      const remainingCount = subjects.length - 2;
      displaySubjects += ` +${remainingCount} more`;
    }

    return displaySubjects;
  };

  const dispatch = useDispatch();
  const { SelectedPlan } = useSelector((state) => state.CreateYourPlan);
  console.log("SelectedPlan", SelectedPlan);

  const deletehandle = () => {
    if (SelectedPlan.isActive) {
      SetPopupShow(true);
    } else {
      deletehandler();
    }
  };
  const { FetchedPlanDetails, isPlanSelected } = useSelector(
    (state) => state.CreateYourPlan
  );
  const deletehandler = async () => {
    try {
      const data = await deletePlans({
        tutorId: SelectedPlan.tutorId,
        PlanId: SelectedPlan.PlanId,
      });
      const newPlanDetails = FetchedPlanDetails.filter(
        (item) => item.PlanId !== SelectedPlan.PlanId
      );
      newPlanDetails.push({ ...SelectedPlan, isActive: false });
      console.log(newPlanDetails);
      dispatch(setPlanDetails(newPlanDetails));
      dispatch(
        setPlanSelected({
          boolean: isPlanSelected,
          plan: { ...SelectedPlan, isActive: false },
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const myMap = new Array();
  myMap.push({ name: "Grade", value: `${SelectedPlan.standard}` });
  myMap.push({ name: "Mode", value: SelectedPlan.modeOfClass });
  myMap.push({
    name: "Schedule",
    value: `${SelectedPlan.Weekly_schedule.length} days/week, 1 hour${
      SelectedPlan.duration == "0min" ? "" : " " + SelectedPlan.duration
    }/day`,
  });
  myMap.push({ name: "Time", value: SelectedPlan.class_begins });
  myMap.push({
    name: "Subject",
    value:
      SelectedPlan.Subjects.length > 2
        ? `${SelectedPlan.Subjects[0]}, ${SelectedPlan.Subjects[1]} +${
            SelectedPlan.Subjects.length - 2
          }`
        : `${SelectedPlan.Subjects[0]}, ${SelectedPlan.Subjects[1]}`,
  });
  myMap.push({
    name: "Batch size",
    value: `${SelectedPlan.batch_length} students`,
  });
  myMap.push({ name: "Objective", value: SelectedPlan.Objective });
  myMap.push({ name: "Outcome", value: SelectedPlan.Outcome });
  myMap.push({ name: "Duration", value: `1 Hour ${SelectedPlan.duration}` });

  const [PopupShow, SetPopupShow] = useState(false);
  return (
    <div className="PlanOverView__wrapper">
      {/* <ChooseYourPlan/> */}
      <div className="PlanOverView__Container">
        <h4>Plan Overview</h4>
        <p>The power of creating your batch plan now at your disposal!!</p>

        <div
          className="Summary__wrapper"
          style={
            SelectedPlan.isActive
              ? { backgroundColor: "#F8208350" }
              : { backgroundColor: "#15DB1D80" }
          }
        >
          <h4>Summary</h4>
          <div className="Summary_container">
            <p>
              If you have reviewed your selections and feel satisfied with your
              choices, you can simply <span>click on the "Create" button</span>{" "}
              located below to proceed.
            </p>
            <h4 className="Details_Heading">Details</h4>
            <div className="Details_container">
              {myMap.map((items) => (
                <div className="Details__field" key={items.name}>
                  <ul>
                    <li>{items.name}</li>
                  </ul>{" "}
                  <span>:</span> <p>{items.value}</p>
                </div>
              ))}
            </div>

            <div className="Summary_bottom">
              <h4>Your Payment Per Class </h4>
              <div>
                <h4
                  style={
                    SelectedPlan.isActive
                      ? { color: "#F82083CC" }
                      : { color: "#15DB1D" }
                  }
                >
                  ₹{SelectedPlan.fee_charge}
                </h4>
                <p>Per Hour</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Edit__Delete_and__Share">
          <button
            style={
              SelectedPlan.isActive
                ? { color: "#F82083" }
                : { color: "#15DB1D" }
            }
            onClick={() => deletehandle()}
          >
            <Image
              src={SelectedPlan.isActive ? Delete_Icon : deletegreen}
              alt="Delete"
              style={{ marginBottom: "0.6vh", marginRight: "1vh" }}
            />
            Delete
          </button>

          <button
            style={
              SelectedPlan.isActive
                ? { color: "#F82083CC", borderColor: "#F82083CC" }
                : { color: "#15DB1D", borderColor: "#15DB1D" }
            }
            onClick={() => {
              dispatch(
                setAddPlan({
                  isChooseYourPlan: true,
                  updateYourPlan: true,
                  PlanCardShrink: true,
                })
              );
              dispatch(setPlanSelected({ boolean: false, plan: SelectedPlan }));
            }}
          >
            <Image
              src={SelectedPlan.isActive ? Left_arrow : arrow}
              alt="Edit"
              style={{ marginRight: "1vh" }}
            />
            Edit
          </button>

          <button
            style={
              SelectedPlan.isActive
                ? {
                    border: "1px solid #F8208380",
                    backgroundColor: "#F82083CC",
                  }
                : { border: "1px solid #15DB1D", backgroundColor: "#15DB1D" }
            }
          >
            Share
            <Image src={Right_arrow} alt="Edit" style={{ marginLeft: "1vh" }} />
          </button>
        </div>
      </div>

      <RemoveYourPlanPopup
        show={PopupShow}
        onHide={() => SetPopupShow(false)}
        SetPopupShow={SetPopupShow}
        deletehandler={deletehandler}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(PlanOverView), { ssr: false });

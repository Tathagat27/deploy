"use client";
import "./styles/PlanDetails.css";
import PlanCard from "../../../../GlobalComponents/PlanCard/PlanCard";
import AddPlanButton from "../AddPlanButton/AddPlanButton";
import LockedButton from "../LockedButton/LockedButton";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronRight } from "react-icons/fa6";
import {
  shrinkOrExpandCard,
  setPlanDetails,
} from "../../../../Redux/tutorSlices/CreateYourPlan";
import { getPlans } from "../../serverComponents/api";
import PlanCardDeleted from "../../../../GlobalComponents/CardDelete/CardDelete";
import { useEffect } from "react";
// import { fetchData } from "next-auth/client/_utils";

const PlanDetails = ({ navigation, SetNavigation, modalShow }) => {
  const planData = {
    order: "A",
    standard: "10th",
    modeOfClass: "Online",
    Weekly_schedule: ["Monday", "Wednesday", "Friday"],
    duration: "1 hour",
    demo_Timings: "Monday, 3:00 PM",
    Subjects: ["Math", "Science"],
    batch_length: 15,
    Objective: "To cover the syllabus in an interactive manner",
    Outcome: "Students will have a solid understanding of the subjects.",
    language: ["English"],
    class_begins: "2024-02-01T08:00:00Z",
    color: "#15DB1D",
    createdAt: "2024-01-30T12:00:00Z",
    fee_charge: 1000,
    isActive: true,
    tutorId: "RABALO02",
    PlanId: "bf5c0fef-136a-4c95-a669-30f3c8331227",
    _id: "65c556b874d2fa67fcb87bf8",
  };

  const { PlanCardShrink, isChooseYourPlan, FetchedPlanDetails } = useSelector(
    (state) => state.CreateYourPlan
  );

  const dispatch = useDispatch();
  const ShrinkOrExpandCard = () => {
    dispatch(shrinkOrExpandCard());
  };

  const GetPlans = async () => {
    try {
      const plansArray = await getPlans();

      dispatch(setPlanDetails(plansArray.data));
      console.log(plansArray.data);
      console.log(FetchedPlanDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPlans();
  }, [modalShow]);

  return (
    <div className="PlanDetails_wrapper">
      <div className="PlanDetails_Container">
        <h4>{PlanCardShrink ? "" : "Plan Details"}</h4>
        <p>{PlanCardShrink ? "" : "This is a List of Existing Plans:"}</p>
        <div
          className={
            PlanCardShrink
              ? "Scroll_container_extra_marginTop"
              : "Scroll_container"
          }
        >
          {isChooseYourPlan && (
            <div className="Expand_icon" onClick={() => ShrinkOrExpandCard()}>
              <FaChevronRight className="right_arrow_icon" />
            </div>
          )}

          {FetchedPlanDetails?.map((plan, index) =>
            plan.isActive ? (
              <PlanCard plan={plan} key={index} id={index} />
            ) : (
              <PlanCardDeleted plan={plan} key={index} id={index} />
            )
          )}

          <AddPlanButton
            navigation={navigation}
            SetNavigation={SetNavigation}
          />
          <LockedButton />
          <LockedButton />
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;

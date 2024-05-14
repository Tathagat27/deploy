"use client";
import "./styles/PlanDetails.css";
import PlanCard from "@/app/GlobalComponents/PlanCard/PlanCard";
import AddPlanButton from "../AddPlanButton/AddPlanButton";
import LockedButton from "../LockedButton/LockedButton";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronRight } from "react-icons/fa6";
import {
  shrinkOrExpandCard,
  setPlanDetails,
} from "@/app/Redux/Slices/CreateYourPlan";
import getPlans from "../../serverComponents/getPlans";
import { useState, useEffect } from "react";
import Axios from "@/app/Axios/Axios";

const PlanDetails = ({ navigation, SetNavigation }) => {
  const { PlanCardShrink, isChooseYourPlan, FetchedPlanDetails } = useSelector(
    (state) => state.CreateYourPlan
  );
  const dispatch = useDispatch();
  const ShrinkOrExpandCard = () => {
    dispatch(shrinkOrExpandCard());
  };

  const GetPlans = async () => {
    const plansArray = await getPlans();
    const { data } = plansArray;
    console.log(data.data);
    dispatch(setPlanDetails(data.data));
  };

  useEffect(() => {
    GetPlans();
  }, []);

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

          {FetchedPlanDetails.map((plan) => (
            <PlanCard plan={plan} />
          ))}

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

"use client";
import { useEffect, useState } from "react";
import "./styles/plans.css";
import SideNavBar from "../../GlobalComponents/SideNavBar_tutor/SideNavBar";
import TopBar from "../../GlobalComponents/TopBar_tutor/TopBar";
import PlanDetails from "./subComponents/PlanDetails/PlanDetails";
import PlanOverView from "./subComponents/PlanOverview/PlanOverView";
import CreateYourPlan from "./subComponents/CreateYourPlan/CreateYourPlan";
import ChooseYourPlan from "./subComponents/Instructions/ChooseYourPlan";
import ProfilePanel from "../../GlobalComponents/ProfilePanel/ProfilePanel";
import { useSelector } from "react-redux";
import { redirect, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const page = () => {
  const [user, setUser] = useState({
    tutorID: "",
    tokenID: "",
  });
  const searchParams = useSearchParams();
  const router = useRouter();
  // useEffect(() => {
  //   const tutorId = localStorage.getItem("query1");
  //   const authtoken = localStorage.getItem("query2");
  //   const userID = searchParams.get('query1');
  //   const tokenID = searchParams.get('query2');

  //   if (!tutorId || !authtoken) {
  //     if (userID && tokenID) {
  //       localStorage.setItem("query1", userID);
  //       localStorage.setItem("query2", tokenID);
  //       setUser({
  //         tutorID: userID,
  //         tokenID: tokenID
  //       });
  //     } else {
  //       alert("Invalid login");
  //       router.push('/login');
  //     }
  //   } else {
  //     setUser({
  //       tutorID: tutorId,
  //       tokenID: authtoken
  //     });

  //   }
  // },[]);

  const { PlanCardShrink, AddPlan, isChooseYourPlan, isPlanSelected } =
    useSelector((state) => state.CreateYourPlan);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [navigation, SetNavigation] = useState("Class");
  const [modalShow, setModalShow] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="Wrapper">
      <SideNavBar
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="Plans__page">
        <TopBar />
        <div className="Main_Div_Contains_PlanDetails_and_PlanOverview">
          <PlanDetails
            modalShow={modalShow}
            navigation={navigation}
            SetNavigation={SetNavigation}
          />
          <div className="Separation_Line"></div>
          {/* <=== Shifts Beetween "Choose your plan" to "PlanOverView" and "Create Your Plan" , When Users Clicks any of the PlanCards ===> */}
          {isChooseYourPlan ? (
            isPlanSelected ? (
              <PlanOverView />
            ) : (
              <CreateYourPlan
                tutorID={user.tutorID}
                modalShow={modalShow}
                setModalShow={setModalShow}
                navigation={navigation}
                SetNavigation={SetNavigation}
              />
            )
          ) : isPlanSelected ? (
            <PlanOverView />
          ) : (
            <ChooseYourPlan />
          )}
        </div>
      </div>
      {PlanCardShrink && (
        <ProfilePanel
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
    </div>
  );
};

export default page;

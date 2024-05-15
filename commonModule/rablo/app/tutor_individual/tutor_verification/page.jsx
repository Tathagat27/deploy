"use client";

import "./styles/main.css";
import LeftPanel from "./Components/LeftPanel/LeftPanel.jsx";
import CenterSection from "./Components/center-section/CenterSection.jsx";
import TopBar from "../../GlobalComponents/TopBar_tutor/TopBar.jsx";
import { useSelector } from "react-redux";
import { redirect, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Home() {
  // const selectedSection = useSelector(state => state.tutorVerificationReducer.selectedSection);
  // console.log(selectedSection)
  const router = useRouter();
  const searchParams = useSearchParams();
  const tutorId = localStorage.getItem("query1");
  const authtoken = localStorage.getItem("query2");

  // if (!tutorId || !authtoken) {
  //   router.push("/login");
  //   return null;
  // }
  // const [user, setUser] = useState({
  //   tutorID: "",
  //   tokenID: "",
  // });

  // useEffect(() => {
  //   const tutorId = localStorage.getItem("query1");
  //   const authtoken = localStorage.getItem("query2");
  //   const userID = searchParams.get("query1");
  //   const tokenID = searchParams.get("query2");

  //   if (!tutorId || !authtoken) {
  //     if (userID && tokenID) {
  //       localStorage.setItem("query1", userID);
  //       localStorage.setItem("query2", tokenID);
  //       setUser({
  //         tutorID: userID,
  //         tokenID: tokenID,
  //       });
  //     } else {
  //       alert("Invalid login");
  //       router.push("/login");
  //     }
  //   } else {
  //     setUser({
  //       tutorID: tutorId,
  //       tokenID: authtoken,
  //     });
  //   }
  // }, []);
  return (
    <main className="main">
      <LeftPanel />
      <div className="content">
        <div className="top-container">
          <span className="line line1">Having Trouble?</span>
          <span className="line line2">Need Help!</span>
        </div>
        <CenterSection tutorID={tutorId} />
      </div>
    </main>
  );
}

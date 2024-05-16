"use client";
import styles from "./page.module.css";
import LeftPanel from "../../GlobalComponents/LeftPanel_student/LeftPanel";
import UserInputPage from "../account_creation/subComponents/RegistrationPage/UserInputPage";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
export default function Account_Creation() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [user, setUser] = useState({
    studentID: "",
    tokenID: "",
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tutorId = localStorage.getItem("query1");
      const authtoken = localStorage.getItem("query2");
      const userID = searchParams.get("query1");
      const tokenID = searchParams.get("query2");

      if (!tutorId || !authtoken) {
        if (userID && tokenID) {
          localStorage.setItem("query1", userID);
          localStorage.setItem("query2", tokenID);
          setUser({
            studentID: userID,
            tokenID: tokenID,
          });
        } else {
          alert("Invalid login");
          router.push("/login");
        }
      } else {
        setUser({
          studentID: tutorId,
          tokenID: authtoken,
        });
      }
    }
  }, []);

  return (
    <main>
      <div className={styles.main}>
        <LeftPanel />
        <UserInputPage user={user} />
      </div>
    </main>
  );
}

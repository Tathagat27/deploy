"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Axios from "../../Axios/Axios";
import axios from "axios";

//Styling
import "./styles/RegsiterPage.css";
import LeftPanel from "../../GlobalComponents/LeftPanel_tutor/LeftPanel";
import RegistrationPage from "./SubComponents/RegistrationPage/RegistrationPage";
import { usePathname } from "next/navigation";
import VerifyPage from "./verify/page";

//next import
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Register = () => {
  const path = usePathname();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalShow, setModalShow] = useState(false);

  const Toggle = () => {
    setModalShow(!modalShow);
  };
  const [user, setUser] = useState({
    tutorID: "",
    tokenID: "",
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  if (typeof window !== 'undefined') {
  const tutorId = localStorage.getItem("query1");
  const authtoken = localStorage.getItem("query2");
  }

  if (!tutorId || !authtoken) {
    router.push("/login");
  }

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
          tutorID: userID,
          tokenID: tokenID,
        });
      } else {
        router.push("/login");
      }
    } else {
      setUser({
        tutorID: tutorId,
        tokenID: authtoken,
      });
    }
  }
  }, []);

  return (
    <div className="Register">
      <div className="Left_Panel">
        <LeftPanel action={Toggle} />
      </div>
      <RegistrationPage Toggle={Toggle} />
      <div></div>
    </div>
  );
};

export default Register;

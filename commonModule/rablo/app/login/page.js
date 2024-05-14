"use client";

import React from "react";
import "./styles/login.css";
import logo from "../GlobalComponents/Assets/logo.png";
import Image from "next/image";
import LoginBox from "./components/LoginBox/LoginBox";
import { useSelector } from "react-redux";

const Login = () => {
  const { module } = useSelector((state) => state.loginSlice);
  return (
    <main
      className={module === "tutor" ? "tutor-bg login" : "student-bg login"}
    >
      <Image
        src={logo}
        alt="rablo"
        className="logo"
        height="auto"
        width="auto"
      />
      <LoginBox />
    </main>
  );
};

export default Login;

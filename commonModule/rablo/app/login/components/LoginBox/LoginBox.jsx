"use client"
import React, { useEffect, useState } from 'react';
import "./styles/LoginBox.css";
import { useDispatch, useSelector } from 'react-redux';
import { setModule } from '../../../Redux/Slices/Login';
//import googleIcon from "../../../GlobalComponents/Assets/Images/login/Google.svg";
import googleIcon from "../../../GlobalComponents/Assets/login-img/Google.svg";
import facebookIcon from "../../../GlobalComponents/Assets/login-img/facebook.svg";
import linkedInIcon from "../../../GlobalComponents/Assets/login-img/Linkedin.svg";
import Image from 'next/image';


const LoginBox = () => {
  const dispatch = useDispatch();
  const { module } = useSelector(state => state.loginSlice);
  const changeModule = (moduleName) => {
    dispatch(setModule(moduleName));
  }
  const TUTOR_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const STUDENT_BACKEND_URL = process.env.NEXT_PUBLIC_STUDENT_BACKEND_URL

  const handleLogin = () => {
    if (module === 'tutor') {
      window.open(`${TUTOR_BACKEND_URL}/auth/google`, '_self');
    } else {
      window.open(`${STUDENT_BACKEND_URL}/auth/google/student`, '_self');
    }
  }

  return (
    <div className='login-box'>
      <div className='nav'>
        <div onClick={() => changeModule("tutor")} className='nav-btn' style={module === 'tutor' ? ({ backgroundColor: "rgba(103, 100, 255, 0.4)" }) : null}>{"I'm a Tutor"}</div>
        <div onClick={() => changeModule("student")} className='nav-btn' style={module === 'student' ? ({ backgroundColor: "rgba(237, 110, 127, 0.65)" }) : null}>{"I'm a Student"}</div>
      </div>
      <div className={module === 'tutor' ? 'blue-shadow container-lb' : 'red-shadow container-lb'}>
        <div className='heading'>Login or Signup</div>
        <div className='button' onClick={() => handleLogin()}><Image src={googleIcon} alt='google login' className='icon' height='auto' width='auto' />Continue with Google</div>

        <div className='button'><Image src={facebookIcon} alt='facebook login' className='icon' height={0}
          width={0}
          style={{ width: '30px', height: "50px" }} />Continue with Facebook</div>
        <div className='button'><Image src={linkedInIcon} alt='LinkedIN login' className='icon' height='auto' width='auto' />Continue with LinkedIn</div>
        <div className='para'>By Login or Signup, you agree with our <br /><strong>Terms and Conditions</strong> and <strong>Privacy Policies</strong></div>
      </div>
    </div>
  )
}

export default LoginBox

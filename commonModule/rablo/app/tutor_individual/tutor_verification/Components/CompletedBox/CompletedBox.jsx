import React from "react";
import "./styles/UpdateBox.css";
import { RxCross1 } from "react-icons/rx";

import { redirect, useRouter } from 'next/navigation'

const CompletedBox = ({showUpdateBox}) => {
  const router = useRouter();
  const handleButtonEvent = () => {
    showUpdateBox(false);
    router.push('/tutor_individual/dashboard');

  }
  return (
    <div className="update-background">
      <div className="update-box">
        <RxCross1 className="close-btn" onClick={() => showUpdateBox(false)}/>
        <div className="container-ub1">
          <div className="heading">Congratulation!</div>
          <div className="label">You Account has been Verified with Rablo.</div>
          <div className="proceed-btn" onClick={handleButtonEvent}>Explore</div>
        </div>
      </div>
    </div>
  );
};

export default CompletedBox;

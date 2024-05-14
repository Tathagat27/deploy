import React from "react";
import "./styles/UpdateBox.css";
import { RxCross1 } from "react-icons/rx";


const UpdateBox = ({showUpdateBox}) => {
  return (
    <div className="update-background">
      <div className="update-box">
        <RxCross1 className="close-btn" onClick={() => showUpdateBox(false)}/>
        <div className="container-ub1">
          <div className="heading">Updated!</div>
          <div className="label">Your Profile has been Successfully Updated</div>
          <div className="proceed-btn" onClick={() => showUpdateBox(false)}>Proceed</div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBox;

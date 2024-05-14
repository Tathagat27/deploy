"use client";
import React, { useState } from "react";
import "./styles/QualificationForm.css";
import DropBox from "../../../DropBox/DropBox";
import Checkbox from "../../Checkbox/Checkbox";

const VerificationForm = ({RealTime,setRealTime,Addhar,setAddhar,addharNumber,setAddharNumber}) => {
  const [selectedCard, setSelectedCard] = useState();
  
  return (
    <div className="qualification-form">
      <div className="container-QF-1">
        <div
          onClick={() => setSelectedCard("Aadhar Card")}
          className="card-container"
          style={
            selectedCard === "Aadhar Card"
              ? { backgroundColor: "rgba(103, 100, 255, 1)", color: "white" }
              : null
          }
        >
          <Checkbox
            text="A"
            active={selectedCard === "Aadhar Card"}
            className="box"
          />
          <div>Aadhar Card</div>
        </div>
        <div
          onClick={() => setSelectedCard("Driving Licence")}
          className="card-container"
          style={
            selectedCard === "Driving Licence"
              ? { backgroundColor: "rgba(103, 100, 255, 1)", color: "white" }
              : null
          }
        >
          <Checkbox text="B" active={selectedCard === "Driving Licence"} />
          <div>Driving Licence</div>
        </div>
      </div>
      {selectedCard && (
        <>
          <div className="container-QF-1">
            <div>
              <div className="label">Upload Real-Time Photo</div>
              {/* <DropBox type="Open a Camera" /> */}
              <DropBox BrowseImage={RealTime} setBrowseImage={setRealTime} type="Upload Photo" />
            </div>
          </div>
          <div className="container-QF-1">
            <div>
              <div className="label">
                {selectedCard === "Aadhar Card"
                  ? `Aadhar Number`
                  : `Driving License`}
              </div>
              <div className="label-small">
                {selectedCard === "Aadhar Card"
                  ? `Enter your complete Aadhar number of the Registered person only.`
                  : `Enter your complete Driving License number of the Registered person only.`}
              </div>
              <input
                type="text"
                className="input"
                value={addharNumber}
                onChange={(e) => setAddharNumber(e.target.value)}
                placeholder={
                  selectedCard === "Aadhar Card"
                    ? "0000-0000-0000"
                    : `DL-01-20201234567`
                }
                style={{ width: "35.677vw" }}
              />
            </div>
          </div>
          <DropBox
            BrowseImage={Addhar}
            setBrowseImage={setAddhar}
            type={
              selectedCard === "Aadhar Card"
                ? "Upload Front & Back Side"
                : `Upload Front Side Only`
            }
          />
        </>
      )}
    </div>
  );
};

export default VerificationForm;

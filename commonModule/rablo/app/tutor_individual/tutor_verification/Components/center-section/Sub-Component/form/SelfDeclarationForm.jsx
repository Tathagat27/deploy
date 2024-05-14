import React from "react";
import "./styles/QualificationForm.css";
import { TiTick } from "react-icons/ti";

import SelfDeclarationText from "../../Sub-Component/form/SelfDeclarationText/SelfDeclarationText";

const SelfDeclarationForm = ({checkBox1, checkBox2, setCheckBox1, setCheckBox2}) => {


  return (
    <div className="qualification-form" style={{"overflow-y":"hidden"}}>
      <div className="scroll-box">
        <SelfDeclarationText />
      </div>
      <div className="container-sd-1">
        <div
          onClick={(e) => setCheckBox1(!checkBox1)}
          className="checkbox"
          style={
            checkBox1 ? { backgroundColor: "#6764FF", border: "none" } : null
          }
        >
          {checkBox1 && <TiTick />}
        </div>
        <div className="text">
          {"I accept the terms and conditions and acknowledge that I have read and agree to abide by the company's policies and guidelines."}
        </div>
      </div>
      <div className="container-sd-1">
        <div
          onClick={(e) => setCheckBox2(!checkBox2)}
          className="checkbox"
          style={
            checkBox2 ? { backgroundColor: "#6764FF", border: "none" } : null
          }
        >
          {checkBox2 && <TiTick />}
        </div>
        <div className="text">
          I give consent to receive promotional communications from the company.
        </div>
      </div>
    </div>
  );
};

export default SelfDeclarationForm;

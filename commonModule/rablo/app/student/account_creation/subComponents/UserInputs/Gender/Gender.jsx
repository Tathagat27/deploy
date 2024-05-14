"use client"
import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/Gender.css";
import { icons } from "./styles/assets/data";
import { setUserDetails } from "../../../../../Redux/studentSlices/StudentAccountCreation";
import { useDispatch } from "react-redux";


const Gender = () => {

    const [clickevent, setClickevent] = useState(0);
    const [others, setOthers] = useState("");

    const dispatch = useDispatch();

    const handleMaleClick = () => {
        setClickevent(1); 
        setOthers("")
        dispatch(setUserDetails({ key: "gender", value: "Male" }))
    }
    const handleFemaleClick = () => {
        dispatch(setUserDetails({ key: "gender", value: "Female" }))
        setClickevent(2);
        setOthers("")
    }
    const handleOthersChange = (e) => {
        setOthers(e.target.value)
        dispatch(setUserDetails({ key: "gender", value: e.target.value }))
    }
  
        
    return (
        <div className="gender">
            {
                (clickevent !== 3) ?
                    <div className="gender-gen">
                        <div className="gender-gen-btn1"
                            style={{
                                backgroundColor: clickevent === 1 ? " #EC5F70" : "#ffffff",
                                color: clickevent !== 1 ? "rgba(236, 95, 112, 0.9)" : "#ffffff",
                            }}
                            onClick={handleMaleClick}
                        >
                            <div>
                                {
                                    (clickevent === 1) ?
                                        icons["male_clicked"] :
                                        icons["male"]
                                }
                            </div>
                        
                        </div>
                        <div className="gender-gen-btn1"
                            style={{
                                background: (clickevent === 2) ? " #EC5F70" : "#ffffff",
                                color: (clickevent !== 2) ? "rgba(236, 95, 112, 0.9)" : "#ffffff",
                            }}
                            onClick={handleFemaleClick}

                        >
                            <div>
                                {
                                    (clickevent === 2) ?
                                        icons["female_clicked"] :
                                        icons["female"]
                                }
                            </div>
                    
                        </div>
                        <div className="gender-gen-btn"
                           style={{
                            background: (others.length !== 0) ? " #EC5F70" : "#ffffff",
                            color: (others.length === 0) ? "rgb(236, 95, 112, 0.9)" : "#ffffff",
                        }}
                            onClick={() => setClickevent(3) }
                        >
                            <div style={others.length === 0 ?{color:" #EC5F70" }:{color:"#ffffff"}}>
                                {others.length === 0? "Others":others}
                            </div>
                            <div>
                                {
                                    (clickevent === 3) ?
                                        "<" :
                                        icons["left"]
                                }
                            </div>

                        </div>
                    </div>
                    :
                    <div className="gender-ngen">
                        <div className="gender-gen-btn">
                            <div onClick={() => setClickevent(0)} >
                                Others
                            </div>
                            <div style={{ marginRight: "5px"}}>
                                {
                                    (clickevent === 3) ?
                                        ">" :
                                    (others.length!==0)?
                                        icons["down"]:
                                        icons["down_fill"]
                                }
                            </div>
                            <div>
                                <input type="text" className="other-genip" 
                                maxLength={15}
                                value={others} placeholder="Type" 
                                onChange={handleOthersChange} />
                            </div>
                        </div>
                    </div>
                }
        </div>
    );
}

export default Gender;
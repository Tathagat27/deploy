"use client"
import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/Gender.css";
import { icons } from "./styles/assets/data";
import { setUserDetails } from "../../../../../Redux/tutorSlices/AccountCreation";
import { useDispatch } from "react-redux";


const Gender = () => {

    const [clickevent, setClickevent] = useState(0);
    const [others, setOthers] = useState("");

    const dispatch = useDispatch();

    const handleMaleClick = () => {
        setClickevent(1); 
        setOthers("")
        dispatch(setUserDetails({ key: "gender", value: "male" }))
    }
    const handleFemaleClick = () => {
        dispatch(setUserDetails({ key: "gender", value: "female" }))
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
                                backgroundColor: clickevent === 1 ? "#6764FF" : "#ffffff",
                                color: clickevent !== 1 ? "rgba(74, 55, 148, 0.8)" : "#ffffff",
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
                                background: (clickevent === 2) ? "#6764FF" : "#ffffff",
                                color: (clickevent !== 2) ? "rgba(74, 55, 148, 0.8)" : "#ffffff",
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
                                background: (others.length !== 0) ? "#6764FF" : "#ffffff",
                                color: (others.length === 0) ? "rgba(74, 55, 148, 0.8)" : "#ffffff",
                            }}
                            onClick={() => setClickevent(3) }
                        >
                            <div>
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
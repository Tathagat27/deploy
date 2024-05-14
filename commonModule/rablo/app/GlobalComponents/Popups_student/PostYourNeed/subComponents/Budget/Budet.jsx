"use client";
import Choose from "../../../../Buttons_student/Choose/Choose";
import React from "react";
import style from "./style/Budget.module.scss";
import TuitionFessGraph from "./TuitionFeesGraph/TuitionFeesGraph";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Link from "next/link";
import { useSelector,useDispatch } from "react-redux";
import { setBudget } from "../../../../../Redux/studentSlices/PostYouNeed";
import { postYourNeed } from "../../serverComponents/api";

function Budet({ nextHandler, closeModal }) {
  const {Budget,online,timingSlot,duration,subjects,kindOfTutor,gender,ageGroup,locationRange,raputedInstitute,rating} = useSelector((state) => state.postNeed);
  const dispatch = useDispatch();
  const step = 10000 / 20;
  const calculate = () => {
     let arr=[];
     timingSlot.A?arr.push("before 9 pm"):null;
      timingSlot.B?arr.push("9 am - 12 pm"):null;
      timingSlot.C?arr.push("12 pm - 3 pm"):null;
      timingSlot.D?arr.push("3 pm - 6 pm"):null;
      timingSlot.E?arr.push("6 pm - 9 pm"):null;
      timingSlot.F?arr.push("after 9 pm"):null;
      return arr;
  }
   const sumbitHandler = async() => {
        try {
           const data = await postYourNeed({
            userId: "123",
            classMode: online?"Online":"Offline",
            TimingSlot:calculate(),
            Duration:duration,
            Subject:[...subjects],
            TutorNature:kindOfTutor.A?"Friendly and supportive":kindOfTutor.B?"Strict and disciplined":null,
            AgeGroup:ageGroup.A?"18-25":ageGroup.B?"25-30":ageGroup.C?"30-35":ageGroup.D?"35+":null,
            TutorGender:gender,
            LocationRange:Number(locationRange),
            Rating:rating.D?5:rating.C?4:rating.B?3:rating.A?2:1,
            coachingInstitute:raputedInstitute,
            Budget:Budget.max
           });
            console.log(data);
            closeModal();

        } catch (error) {
          alert("error : "+ error.message);
          
        }
   }
  const handleChange = (e) => {
   dispatch(setBudget({key:"min",value:e.target.value}));
  };
  const handleChange2 = (e) => {
    dispatch(setBudget({key:"max",value:e.target.value}));
  };
  return (
    <>
      <div className={style.sidebar}>
        <Link href={"#mode"} className={style.sidebar_heading}>
          Budget
        </Link>
        <div className={style.line}></div>
      </div>
      <div className={style.vertical_line}></div>
      <div className={style.content}>
        <div id="mode" className={style.content_wrapper}>
          <h3 className={style.heading}>
            1: What is your budget for tuition fees?
          </h3>
          <div className={style.Graph_Selection}>
            <TuitionFessGraph
              TuitionFees={Budget.min}
              TuitionFees2={Budget.max}
            />
            <div className={style.Section_9_range_bar_wrapper}>
              <BiSolidLeftArrow className={style.arrow_range_bar} />
              <div className={style.double_thumb}>
                <div className={style.progress}></div>
                <div className={style.range_input}>
                  <input
                    type="range"
                    className="range-min"
                    step={step}
                    steps={step}
                    min="1000"
                    max="10000"
                    defaultValue={"30"}
                    value={Budget.min}
                    onChange={handleChange}
                  />
                  <input
                    type="range"
                    className="range-min"
                    step={step}
                    steps={step}
                    max="10000"
                    min="1000"
                    defaultValue={"50"}
                    value={Budget.max}
                    onChange={handleChange2}
                  />
                </div>
              </div>

              {/* <input type="range" step={step} steps={step} min="0" max="100" value={TuitionFees} onChange={handleChange}/> */}
              <BiSolidRightArrow className={style.arrow_range_bar} />
            </div>
            <div className={style.Start_at}>
              <p>Starts at</p>
              <h4>₹1000</h4>
            </div>
            <div className={style.Maximum}>
              <p>maximum</p>
              <h4>₹11k</h4>
            </div>
            <div className={style.Ask_and_avg}>
              <div className={style.Ask_Price}>
                <h4>Min</h4>
                <h4>{Budget.min}</h4>
                <div>₹</div>
              </div>
              <div className={style.Avg_Price}>
                <h4>Max</h4>
                <h4>{Budget.max}</h4>
                <div>₹</div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.button_wrapper}>
          <button onClick={() => nextHandler("Tutor")} className={style.back}>
            Back
          </button>
          <button onClick={sumbitHandler} className={style.next}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Budet;

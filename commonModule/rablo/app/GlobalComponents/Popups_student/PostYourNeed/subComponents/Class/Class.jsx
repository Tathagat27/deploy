import React from "react";
import style from "./style/Class.module.scss";
import Subject from "../../../../Buttons_student/Subject/Subject";
import Morning from "./Assets/1.svg";
import Morningwhite from "./Assets/1white.svg"
import AfterNood from "./Assets/2.svg";
import AfterNoodWhite from "./Assets/2white.svg"
import Moon from "./Assets/3.svg"
import MoonWhite from "./Assets/3white.svg"
import person from "./Assets/person.svg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { setOnline,setDuration,setSubjects,setTimingSlot } from "../../../../../Redux/studentSlices/PostYouNeed";
function Class({ nextHandler }) {
  
  const online = useSelector((state) => state.postNeed.online);
  const dispatch = useDispatch();
  const handleOnline = (value) => {
    dispatch(setOnline(value));
  };
 const ranger = useSelector((state) => state.postNeed.duration);
 const handleDuration = (value) => {
    dispatch(setDuration(value));
  };
 const timeing = useSelector((state) => state.postNeed.timingSlot);
  const handletimign = (key,value) => {
     dispatch(setTimingSlot({key,value}));
  };
  return (
    <>
      <div className={style.sidebar}>
        <a href={"#mode"} className={style.sidebar_heading}>
          Mode
        </a>
        <div className={style.line}></div>
        <a href="#Slot" className={style.sidebar_heading}>
          Slot
        </a>
        <div className={style.line}></div>
        <a href="#Class_Duration" className={style.sidebar_heading}>
          Class Duration
        </a>
        <div className={style.line}></div>
        <a href="#subject" className={style.sidebar_heading}>
          Subject
        </a>
        <div className={style.line}></div>
      </div>
      <div className={style.vertical_line}></div>
      <div className={style.content}>
        <div id="mode" className={style.content_wrapper}>
          <h3 className={style.heading}>
            1: How would you prefer to attend classes?
          </h3>
          <div
            style={{
              display: "flex",
              width: "21.0vw",
              justifyContent: "space-evenly",
            }}
          >
            <div onClick={() => setOnline(true)} className={style.main_21}>
              <div
                style={
                  online
                    ? {
                        backgroundColor: "#F82083",
                        color: "white",
                        width: "9.01vw",
                      }
                    : { width: "9.01vw", backgroundColor: "white" }
                }
                className={style.main_3}
                onClick={() => {
                  handleOnline(true);
                }}
              >
                <div
                  style={
                    online
                      ? { background: "white" }
                      : { background: "#F820831A" }
                  }
                  className={style.option_no}
                >
                  <span>{online ? <FaCheck /> : "A"}</span>
                </div>
                <div className={style.option_title}>
                  <div>Online</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4vw",
                }}
              >
                <Image src={person} width={9} />
                <div className={style.text2}>25642+</div>
                <div className={style.text3}>
                  <div>Already</div>
                  <div>Enrolled</div>
                </div>
              </div>
            </div>
            <div
              style={
                !online
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
                handleOnline(false);
              }}
            >
              <div
                style={
                  !online
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{!online ? <FaCheck /> : "B"}</span>
              </div>
              <div className={style.option_title}>
                <div>Offline</div>
              </div>
            </div>
          </div>
        </div>
        <div id="Slot" className={style.content_wrapper}>
          <h3 className={style.heading}>
            2: What timing slot would be suitable for you to attend classes?
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "42.37vh",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={
                timeing.A
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handletimign("A",!timeing.A)}
            >
              <div
                style={
                  timeing.A
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{timeing.A ? <FaCheck /> : "A"}</span>
              </div>
              <div className={style.option_title}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "9.82vw",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image src={timeing.A?Morningwhite:Morning} width={30} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "7.44vw",
                      }}
                    >
                      <div>Early morning</div>
                      <div
                        style={
                          timeing.A
                            ? { color: "white" }
                            : { color: "#F8208380" }
                        }
                        className={style.small_text}
                      >
                        (before 9 AM)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={
                timeing.B
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handletimign("B",!timeing.B)}
            >
              <div
                style={
                  timeing.B
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{timeing.B ? <FaCheck /> : "B"}</span>
              </div>
              <div className={style.option_title}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "9.82vw",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image src={timeing.B?Morningwhite:Morning} width={30} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "7.44vw",
                      }}
                    >
                      <div>Morning</div>
                      <div
                        style={
                          timeing.B
                            ? { color: "white" }
                            : { color: "#F8208380" }
                        }
                        className={style.small_text}
                      >
                        (9 AM - 12 PM)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={
                timeing.C
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handletimign("C",!timeing.C)}
            >
              <div
                style={
                  timeing.C
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{timeing.C ? <FaCheck /> : "C"}</span>
              </div>
              <div className={style.option_title}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "9.82vw",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image src={timeing.C?AfterNoodWhite:AfterNood} width={30} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "7.44vw",
                      }}
                    >
                      <div>Afternoon</div>
                      <div
                        style={
                          timeing.C
                            ? { color: "white" }
                            : { color: "#F8208380" }
                        }
                        className={style.small_text}
                      >
                        (12 PM - 3 PM)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={
                timeing.D
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handletimign("D",!timeing.D)}
            >
              <div
                style={
                  timeing.D
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{timeing.D ? <FaCheck /> : "D"}</span>
              </div>
              <div className={style.option_title}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "9.82vw",
                      justifyContent: "space-between",
                      
                    }}
                  >
                    <Image src={timeing.D?AfterNoodWhite:AfterNood} width={30} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "7.44vw",
                      }}
                    >
                      <div>Evening</div>
                      <div
                        style={
                          timeing.D
                            ? { color: "white" }
                            : { color: "#F8208380" }
                        }
                        className={style.small_text}
                      >
                        (3 PM - 6 PM)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={
                timeing.E
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handletimign("E",!timeing.E)}
            >
              <div
                style={
                  timeing.E
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{timeing.E ? <FaCheck /> : "E"}</span>
              </div>
              <div className={style.option_title}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "9.82vw",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image src={timeing.E?MoonWhite:Moon} width={30} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "7.44vw",
                      }}
                    >
                      <div>Night</div>
                      <div
                        style={
                          timeing.E
                            ? { color: "white" }
                            : { color: "#F8208380" }
                        }
                        className={style.small_text}
                      >
                        (6 PM - 9 PM)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={
                timeing.F
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handletimign("F",!timeing.F)}
            >
              <div
                style={
                  timeing.F
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{timeing.F ? <FaCheck /> : "F"}</span>
              </div>
              <div className={style.option_title}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "9.82vw",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image src={timeing.F?MoonWhite:Moon} width={30} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "7.44vw",
                      }}
                    >
                      <div>Late Night</div>
                      <div
                        style={
                          timeing.F
                            ? { color: "white" }
                            : { color: "#F8208380" }
                        }
                        className={style.small_text}
                      >
                        (after 9 PM)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Class_Duration" className={style.content_wrapper}>
          <h3 className={style.heading}>
            3: What duration of class would you prefer?
          </h3>
          <div
            style={{
              display: "flex",
              width: "30.21vw",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={
                ranger === "2"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
                handleDuration("2");
              }}
            >
              <div
                style={
                  ranger === "2"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{ranger === "2" ? <FaCheck /> : "A"}</span>
              </div>
              <div className={style.option_title}>
                <div>1 Hr</div>
              </div>
            </div>
            <div
              style={
                ranger === "5"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
                handleDuration("5");
              }}
            >
              <div
                style={
                  ranger === "5"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{ranger === "5" ? <FaCheck /> : "B"}</span>
              </div>
              <div className={style.option_title}>
                <div>1.2 hr</div>
              </div>
            </div>
            <div
              style={
                ranger === "10"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
                handleDuration("10");
              }}
            >
              <div
                style={
                  ranger === "10"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{ranger === "10" ? <FaCheck /> : "C"}</span>
              </div>
              <div className={style.option_title}>
                <div>1.5 Hr</div>
              </div>
            </div>
          </div>
        </div>

        <div id="subject" className={style.content_wrapper}>
          <h3 className={style.heading}>
            4: Which subjects would you like to study? (Choose all that apply)
          </h3>
          <div
            className={style.grid}
            style={{ width: "35.677vw", height: "30.68vh" }}
          >
            <div style={{ display: "flex" }}>
              <Subject width={"9.87vw"} name="English" />
              <Subject width={"9.20vw"} name="Hindi" />
              <Subject width={"9.87vw"} name="Biology" />
              <Subject width={"9.87vw"} name="Chemistry" />
            </div>

            <div style={{ display: "flex" }}>
              <Subject width={"11.87vw"} name="Political Science" />
              <Subject width={"11.87vw"} name="Computer Science" />
              <Subject width={"11.87vw"} name="Accountancy" />
            </div>
            <div style={{ display: "flex" }}>
              <Subject width={"11.87vw"} name="Geography" />
              <Subject width={"11.87vw"} name="Economics" />
              <Subject width={"11.87vw"} name="Mathamatics" />
            </div>
            <div style={{ display: "flex" }}>
              <Subject width={"11.87vw"} name="Physical Education" />
              <Subject width={"11.87vw"} name="Social Science" />
              <Subject width={"11.87vw"} name="Business" />
            </div>
            <Subject width={"11.87vw"} name="Physics" />
          </div>
        </div>
        <div className={style.button_wrapper}>
          <div className={style.skip} onClick={() => nextHandler("Tutor")}>
            Skip
          </div>

          <button onClick={() => nextHandler("Tutor")} className={style.next}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Class;

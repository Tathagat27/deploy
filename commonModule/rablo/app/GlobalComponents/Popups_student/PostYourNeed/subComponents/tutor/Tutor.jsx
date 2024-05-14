"use client";
import React from "react";
import style from "./style/tutor.module.scss";
import { FaCheck } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { setGender,setAgeGroup,setKindOfTutor,setRaputedInstitute,setLocationRange, setRating } from "../../../../../Redux/studentSlices/PostYouNeed";

function Tutor({ nextHandler }) {
 const gender=useSelector((state)=>state.postNeed.gender);
 const dispatch=useDispatch();
 const range=useSelector((state)=>state.postNeed.locationRange);
 const rating = useSelector((state) => state.postNeed.raging);
  const reputed=useSelector((state)=>state.postNeed.raputedInstitute);
 const kind = useSelector((state) => state.postNeed.kindOfTutor);
 const age=useSelector((state)=>state.postNeed.ageGroup);

  const handleKind = (key,value) => {
    dispatch(setKindOfTutor({key , value}));
  };

  const handleAge = (key,value) => {
     dispatch(setAgeGroup({key,value}));
  };
  const ratinghandler = (key,value) => {
    dispatch(setRating({key,value}));
 };

  const Youthful = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Youthful</div>{" "}
      <div
        style={
          age.A
            ? { color: "white", textAlign: "center" }
            : { color: "#F8208380", textAlign: "center" }
        }
        className={style.small_text}
      >
        18-25 Yrs
      </div>
    </div>
  );
  const Experienced = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Experienced</div>{" "}
      <div
        style={
          age.B
            ? { color: "white", textAlign: "center" }
            : { color: "#F8208380", textAlign: "center" }
        }
        className={style.small_text}
      >
        25-30 Yrs
      </div>
    </div>
  );
  const Matured = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Matured</div>{" "}
      <div
        style={
          age.C
            ? { color: "white", textAlign: "center" }
            : { color: "#F8208380", textAlign: "center" }
        }
        className={style.small_text}
      >
        30-35 Yrs
      </div>
    </div>
  );
  const Seasoned = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Seasoned</div>{" "}
      <div
        style={
          age.D
            ? { color: "white", textAlign: "center" }
            : { color: "#F8208380", textAlign: "center" }
        }
        className={style.small_text}
      >
        35+ Yrs
      </div>
    </div>
  );

  return (
    <>
      <div className={style.sidebar}>
        <a href="#Tutor" className={style.sidebar_heading}>
          Tutor Preference
        </a>
        <div className={style.line}></div>
        <a href="#Gender" className={style.sidebar_heading}>
          Gender
        </a>
        <div className={style.line}></div>
        <a href="#Age" className={style.sidebar_heading}>
          Age Group
        </a>
        <div className={style.line}></div>
        <a href="#Location" className={style.sidebar_heading}>
          Location
        </a>
        <div className={style.line}></div>
        <a href="#Previous" className={style.sidebar_heading}>
          Previous Tution
        </a>
      </div>
      <div className={style.vertical_line}></div>
      <div className={style.content}>
        <div id="Tutor" className={style.content_wrapper}>
          <h3 className={style.heading}>
            1: What kind of tutor would you prefer?
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3vw" }}
          >
            <div
              style={
                kind.A
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handleKind("A",!kind.A)}
            >
              <div
                style={
                  kind.A ? { background: "white" } : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{kind.A ? <FaCheck /> : "A"}</span>
              </div>
              <div className={style.option_title}>
                <div>Friendly and supportive</div>
              </div>
            </div>
            <div
              style={
                kind.B
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handleKind("B",!kind.B)}
            >
              <div
                style={
                  kind.B ? { background: "white" } : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{kind.B ? <FaCheck /> : "A"}</span>
              </div>
              <div className={style.option_title}>
                <div>Strict and disciplined</div>
              </div>
            </div>
          </div>
        </div>
        <div id="Gender" className={style.content_wrapper}>
          <h3 className={style.heading}>
            2: What gender of tutor would you prefer?
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
                gender === "Male"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
                dispatch(setGender("Male"))
              }}
            >
              <div
                style={
                  gender === "Male"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{gender === "Male" ? <FaCheck /> : "A"}</span>
              </div>
              <div className={style.option_title}>
                <div>Male</div>
              </div>
            </div>
            <div
              style={
                gender === "Female"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
                dispatch(setGender("Female"))
              }}
            >
              <div
                style={
                  gender === "Female"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{gender === "Female" ? <FaCheck /> : "B"}</span>
              </div>
              <div className={style.option_title}>
                <div>Female</div>
              </div>
            </div>
            <div
              style={
                gender === "Other"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
                dispatch(setGender("Other"))
              }}
            >
              <div
                style={
                  gender === "Other"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{gender === "Other" ? <FaCheck /> : "C"}</span>
              </div>
              <div className={style.option_title}>
                <div>Other</div>
              </div>
            </div>
          </div>
        </div>
        <div id="Age" className={style.content_wrapper}>
          <h3 className={style.heading}>
            3: What age group range of tutor would you prefer?
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "26.85vh",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={
                age.A
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handleAge("A",!age.A)}
            >
              <div
                style={
                  age.A ? { background: "white" } : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{age.A ? <FaCheck /> : "A"}</span>
              </div>
              <div className={style.option_title}>
                <div>{Youthful}</div>
              </div>
            </div>
            <div
              style={
                age.B
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handleAge("B",!age.B)}
            >
              <div
                style={
                  age.B ? { background: "white" } : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{age.B ? <FaCheck /> : "B"}</span>
              </div>
              <div className={style.option_title}>
                <div>{Experienced}</div>
              </div>
            </div>
            <div
              style={
                age.C
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handleAge("C",!age.C)}
            >
              <div
                style={
                  age.C ? { background: "white" } : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{age.C ? <FaCheck /> : "C"}</span>
              </div>
              <div className={style.option_title}>
                <div>{Matured}</div>
              </div>
            </div>
            <div
              style={
                age.D
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => handleAge("D",!age.D)}
            >
              <div
                style={
                  age.D ? { background: "white" } : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{age.D ? <FaCheck /> : "D"}</span>
              </div>
              <div className={style.option_title}>
                <div>{Seasoned}</div>
              </div>
            </div>
          </div>
        </div>
        <div id="Location" className={style.content_wrapper}>
          <h3 className={style.heading}>
            4: What location range of tutor would you prefer?
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
                range === "2"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
                dispatch(setLocationRange("2"))
              }}
            >
              <div
                style={
                  range === "2"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{range === "2" ? <FaCheck /> : "A"}</span>
              </div>
              <div className={style.option_title}>
                <div>Under 2 Km</div>
              </div>
            </div>
            <div
              style={
                range === "5"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
             dispatch(setLocationRange("5"))
              }}
            >
              <div
                style={
                  range === "5"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{range === "5" ? <FaCheck /> : "B"}</span>
              </div>
              <div className={style.option_title}>
                <div>Under 5 Km</div>
              </div>
            </div>
            <div
              style={
                range === "10"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
              dispatch(setLocationRange("10"))
              }}
            >
              <div
                style={
                  range === "10"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{range === "10" ? <FaCheck /> : "C"}</span>
              </div>
              <div className={style.option_title}>
                <div>Under 10 Km</div>
              </div>
            </div>
          </div>
        </div>
        <div id="Previous" className={style.content_wrapper}>
          <h3 className={style.heading}>
            5: Have you ever had a tuition with a tutor who is from a reputed
            school or Coaching institute?
          </h3>
          <div
            style={{
              display: "flex",
              width: "20.06vw",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={
                reputed === "Y"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
                dispatch(setRaputedInstitute("Y"));
              }}
            >
              <div
                style={
                  reputed === "Y"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{reputed === "Y" ? <FaCheck /> : "A"}</span>
              </div>
              <div className={style.option_title}>
                <div>Yes</div>
              </div>
            </div>
            <div
              style={
                reputed === "N"
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "9.01vw",
                    }
                  : { width: "9.01vw" }
              }
              className={style.main_3}
              onClick={() => {
                dispatch(setRaputedInstitute("N"));
              }}
            >
              <div
                style={
                  reputed === "N"
                    ? { background: "white" }
                    : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{reputed === "N" ? <FaCheck /> : "B"}</span>
              </div>
              <div className={style.option_title}>
                <div>No</div>
              </div>
            </div>
          </div>
        </div>
        <div id="rating" className={style.content_wrapper}>
          <h3 className={style.heading}>
            3: What rating range of tutor would you prefer?
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "26.85vh",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={
                rating.A
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => ratinghandler("A",!rating.A)}
            >
              <div
                style={
                  rating.A ? { background: "white" } : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{rating.A ? <FaCheck /> : "A"}</span>
              </div>
              <div className={style.option_title}>
                <div><div style={{ display: "flex", flexDirection: "column" }}>
      <div>Fine</div>{" "}
      <div
        style={
          rating.A
            ? { color: "white", textAlign: "center" }
            : { color: "#F8208380", textAlign: "center" }
        }
        className={style.small_text}
      >
        1-2 stars
      </div>
    </div></div>
              </div>
            </div>
            <div
              style={
                rating.B
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => ratinghandler("B",!rating.B)}
            >
              <div
                style={
                  rating.B ? { background: "white" } : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{rating.B ? <FaCheck /> : "B"}</span>
              </div>
              <div className={style.option_title}>
                <div><div style={{ display: "flex", flexDirection: "column" }}>
      <div>Good</div>{" "}
      <div
        style={
          rating.B
            ? { color: "white", textAlign: "center" }
            : { color: "#F8208380", textAlign: "center" }
        }
        className={style.small_text}
      >
         2-3 stars
      </div>
    </div></div>
              </div>
            </div>
            <div
              style={
                rating.C
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => ratinghandler("C",!rating.C)}
            >
              <div
                style={
                  rating.C ? { background: "white" } : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{rating.C ? <FaCheck /> : "C"}</span>
              </div>
              <div className={style.option_title}>
                <div><div style={{ display: "flex", flexDirection: "column" }}>
      <div>Great</div>{" "}
      <div
        style={
          rating.C
            ? { color: "white", textAlign: "center" }
            : { color: "#F8208380", textAlign: "center" }
        }
        className={style.small_text}
      >
        3-4 stars
      </div>
    </div></div>
              </div>
            </div>
            <div
              style={
                rating.D
                  ? {
                      backgroundColor: "#F82083",
                      color: "white",
                      width: "19.06vw",
                    }
                  : { width: "19.06vw" }
              }
              className={style.main_3}
              onClick={() => ratinghandler("D",!rating.D)}
            >
              <div
                style={
                  rating.D ? { background: "white" } : { background: "#F820831A" }
                }
                className={style.option_no}
              >
                <span>{rating.D ? <FaCheck /> : "D"}</span>
              </div>
             <div className={style.option_title}>
                <div><div style={{ display: "flex", flexDirection: "column" }}>
      <div>Excellent</div>{" "}
      <div
        style={
          rating.D
            ? { color: "white", textAlign: "center" }
            : { color: "#F8208380", textAlign: "center" }
        }
        className={style.small_text}
      >
        4-5 stars
      </div>
    </div></div>
              </div>
           
            </div>
          </div>
        </div>
        <div className={style.button_wrapper}>
          <div onClick={() => nextHandler("Budet")} className={style.skip}>
            Skip
          </div>
          <button onClick={() => nextHandler("Class")} className={style.back}>
            Back
          </button>
          <button onClick={() => nextHandler("Budet")} className={style.next}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Tutor;

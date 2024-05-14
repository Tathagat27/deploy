import Class from "./subComponents/Class/Class";
import style from "./styles/PostNeed.module.scss";

import React from "react";
import { IoClose } from "react-icons/io5";
import leftarrow from "./Assets/leftarrow.svg";
import Modal from "react-modal";
import Budet from "./subComponents/Budget/Budet";
import Tutor from "./subComponents/tutor/Tutor";
import Image from "next/image";

function PostNeed({ modalIsOpen, setIsOpen }) {
  const [activeSection, setActiveSection] = React.useState("Class");
  const nextHandler = (next) => {
    setActiveSection(next);
  };
  const customStyles = {
    overlay: {
      zIndex: 999, // Adjust the value as per your requirement
    },
    content: {
      padding: "0",
      borderRadius: "1.30vw",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
    setActiveSection("Class");
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={style.main}>
        <div className={style.header}>
          <div className={style.heading_container}>
            <h2 className={style.main_heading}>Post Your Needs</h2>
            <p className={style.subHeading}>Let’s get you Best Educator</p>
          </div>
          <div className={style.title}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: " 0.52vw",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: " 0.52vw",
                  alignItems: "center",
                }}
              >
                <div
                  style={
                    activeSection === "Class"
                      ? {
                          backgroundColor: "#F82083",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {
                          backgroundColor: "#F8208380",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                  }
                  className={style.title_box}
                >
                  <div>1</div>
                </div>
                <div
                  style={
                    activeSection === "Class"
                      ? { color: "#F82083" }
                      : { color: "#F8208380" }
                  }
                >
                  Class
                </div>
              </div>

              <div
                style={
                  activeSection === "Class"
                    ? {
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#F82083",
                      }
                    : { display: "hidden" }
                }
              ></div>
            </div>
            <Image src={leftarrow} alt="leftarrow" width="15" height="15" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: " 0.52vw",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: " 0.52vw",
                  alignItems: "center",
                }}
              >
                <div
                  style={
                    activeSection === "Tutor"
                      ? {
                          backgroundColor: "#F82083",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {
                          backgroundColor: "#F8208380",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                  }
                  className={style.title_box}
                >
                  <div>2</div>
                </div>
                <div
                  style={
                    activeSection === "Tutor"
                      ? { color: "#F82083" }
                      : { color: "#F8208380" }
                  }
                >
                  Tutor
                </div>
              </div>

              <div
                style={
                  activeSection === "Tutor"
                    ? {
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#F82083",
                      }
                    : { display: "hidden" }
                }
              ></div>
            </div>
            <Image src={leftarrow} alt="leftarrow" width="15" height="15" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: " 0.52vw",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: " 0.52vw",
                  alignItems: "center",
                }}
              >
                <div
                  style={
                    activeSection === "Budet"
                      ? {
                          backgroundColor: "#F82083",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {
                          backgroundColor: "#F8208380",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                  }
                  className={style.title_box}
                >
                  <div>3</div>
                </div>
                <div
                  style={
                    activeSection === "Budet"
                      ? { color: "#F82083" }
                      : { color: "#F8208380" }
                  }
                >
                  Budget
                </div>
              </div>

              <div
                style={
                  activeSection === "Budet"
                    ? {
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#F82083",
                      }
                    : { display: "hidden" }
                }
              ></div>
            </div>
          </div>
        </div>
        <div className={style.wrapper}>
          {activeSection === "Class" && <Class nextHandler={nextHandler} />}
          {activeSection === "Tutor" && <Tutor nextHandler={nextHandler} />}
          {activeSection === "Budet" && (
            <Budet closeModal={closeModal} nextHandler={nextHandler} />
          )}
        </div>
      </div>
    </Modal>
  );
}

export default PostNeed;

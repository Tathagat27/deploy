"use client";
import React from "react";
import styles from "./style/accordion.module.scss";
import image from "../Assets_student/Images/Expand Arrow.svg";
import Image from "next/image";

function Accordion({ question, answer, index }) {
  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <div className={styles.main_heading}>
      <div>
        <h3 className={styles.question}>
          {index}. {question}
        </h3>
        {showInfo && (
          <>
            <div className={styles.question}>Answer:</div>
            <p className={styles.answer}>{answer}</p>
          </>
        )}
        <div className={styles.line} />
      </div>

      <div
        className={styles.icon_wrapper}
        onClick={() => setShowInfo((prev) => !prev)}
      >
        {showInfo ? (
          <Image src={image} alt="expand" className={styles.icon_down} />
        ) : (
          <Image src={image} alt="expand" className={styles.icon} />
        )}
      </div>
    </div>
  );
}

export default Accordion;

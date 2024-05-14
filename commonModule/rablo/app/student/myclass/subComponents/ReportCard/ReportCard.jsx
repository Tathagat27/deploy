"use client";
import Image from "next/image";
import styles from "./style/reportcard.module.css";

import icon1 from "./icons/Group 194.svg";
import cross from "./icons/cross.svg";

const ReportCard = ({ type, about, setIsReport }) => {
  return (
    <div className={styles.reportcard}>
      <Image
        src={cross}
        className={styles.closeIcon}
        onClick={() => setIsReport(false)}
        alt="close icon"
      />
      <Image src={icon1} className={styles.icon1} alt="report icon" />
      <div className={styles.heading}>
        {type} {about} ?
      </div>
      <div className={styles.msg}>
        Are you sure you want to {type} the class and the tutor ?
      </div>
      <button>{type}</button>
    </div>
  );
};

export default ReportCard;

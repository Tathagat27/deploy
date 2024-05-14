import React from "react";
import styles from "./style/frequently.module.scss";
import { frequent } from "./constants";
import Accordion from "../../../GlobalComponents/Accordion/Accordion.jsx";
function page() {
  return (
    <div className={styles.main_container}>
      <div className={styles.banner_container}>
        <div className={styles.line}></div>
        <div className={styles.title_container}>
          <h1 className={styles.container_heading}>
            {" "}
            Frequently Asked Questions
          </h1>
          <div className={styles.sub_heading}>
            Have questions ? we are here to help.
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.accordion_container}>
        {frequent.map((item, index) => {
          return (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
              index={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default page;

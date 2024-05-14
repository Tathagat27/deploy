import React from "react";
import styles from "./style/Unsubscribe.module.scss";
import Image from "next/image";
import verfiy from "../Assets_student/Images/verify.svg";
import Line from "../Assets_student/Images/Line 245.svg";
import { FaPlus } from "react-icons/fa";
import TutorProfile from './Images/Tutor_Profile.jpg'

function UnsubscribeCard({items}) {
  return (
    <div className={styles.main}>
      <Image
        className={styles.image}
        alt="tutor profile picture"
        src={TutorProfile}
      />
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.flex}>
            <span className={styles.heading}>{items.firstName} {items.lastName}</span>
            <Image className={styles.verify_icon} alt="verify" src={verfiy} />
          </div>
          <div className={styles.flex2}>
            <span>Bsc(pys)</span>
            <span>.</span>
            <span>5 year exp</span>
            <span>.</span>
            <span>En</span>
          </div>
        </div>
        <hr className={styles.line} width="100%" />
        <div className={styles.box}>
          <span className={styles.text2}>Subjects</span>
          <div className={`${styles.text3} ${styles.flex2}`}>
            <span>Maths(pys)</span>
            <span>.</span>
            <span>science</span>
            <span>.</span>
            <span>Hindi</span>
          </div>
        </div>
        <hr className={styles.line} width="100%" />
        <div className={styles.about}>
          <span>About</span>
          <div className={styles.flex3}>
            <div className={styles.flex10}>
              <div className={styles.circle}>130</div>
              <span>Subscriber</span>
            </div>
            <div className={styles.flex10}>
              <div className={styles.circle}>03</div>
              <span>Free Classes</span>
            </div>
          </div>
        </div>
        <div className={styles.flex4}>
          <button className={styles.button}>
            <div className={styles.text4}>View profile</div>
            <Image className={styles.Line} alt="line" src={Line} />
          </button>
          <button className={styles.button2}>
            <div className={styles.text5}>Add Tutor</div>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnsubscribeCard;

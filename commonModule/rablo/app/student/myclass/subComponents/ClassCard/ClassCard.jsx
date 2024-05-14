"use client";
import styles from "./style/classcard.module.css";
import Image from "next/image";

import cardProfile from "./icons/Rectangle 890.svg";
import icon2 from "./icons/Group 795 (1).svg";
import icon3 from "./icons/Group 795 (2).svg";
import icon1 from "./icons/Group 795.svg";
import icon4 from "./icons/Group 798.svg";

const ClassCard = ({ selectedClass, setSelectedClass, num }) => {
  function handleSelectedClass() {
    setSelectedClass(num);
  }

  return (
    <div
      className={`${
        selectedClass === num ? styles.selectedclasscard : styles.classcard
      }`}
      onClick={handleSelectedClass}
    >
      <div className={styles.cardtop}></div>
      <div className={styles.maincard}>
        <div className={styles.cardheading}>
          <Image src={cardProfile} className={styles.cardProfile} alt="tutor image" />
          <div className={styles.groupheading}>
            <div className={styles.cardclass}>Class 10</div>
            <div className={styles.cardsubject}>Mathematics</div>
          </div>
        </div>
        <div className={styles.carddetails}>
          <div className={styles.carddetailsleft}>
            <div className={styles.modecontent}>
              <Image src={icon1} className={styles.cardicon} alt="mode icon" />
              <div className={styles.testcontent}>
                <div className={styles.mode}>Mode</div>
                <div className={styles.modestate}>Online</div>
              </div>
            </div>
            <div className={styles.strengthcontent}>
              <Image src={icon2} className={styles.cardicon} alt="strength icon" />
              <div className={styles.testcontent}>
                <div className={styles.mode}>Strength</div>
                <div className={styles.modestate}>25</div>
              </div>
            </div>
          </div>
          <div className={styles.carddetailsright}>
            <div className={styles.timecontent}>
              <Image src={icon3} className={styles.cardicon} alt="time icon" />
              <div className={styles.testcontent}>
                <div className={styles.mode}>Time</div>
                <div className={styles.timestate}>6:00 PM - 7:00 PM</div>
              </div>
            </div>
            <div className={styles.wscontent}>
              <Image src={icon4} className={styles.cardicon} alt="schedule icon" />
              <div className={styles.testcontent}>
                <div className={styles.ws}>Weekly Schedule</div>
                <div className={styles.wsstate}>
                  <div className={styles.selectedday}>M</div>
                  <div className={styles.selectedday}>T</div>
                  <div className={styles.selectedday}>W</div>
                  <div className={styles.selectedday}>Th</div>
                  <div className={styles.selectedday}>F</div>
                  <div>S</div>
                  <div>S</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

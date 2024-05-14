import styles from "./style/subscribedtutor.module.css";

import Image from "next/image";

import subTutorImage from "./icons/Rectangle 890 (1).svg";
import arrowLine from "./icons/Line 245.svg";
import verifyIcon from "./icons/verify.svg";

const SubscribedTutors = ({
  recommededTutors,
  setUnsubscribedTutorView,
  setMyclassPages,
}) => {
  function handleViewProfile() {
    setUnsubscribedTutorView(false);
    setMyclassPages(2);
  }

  return (
    <div className={styles.subscribedtutorcontainer}>
      <div className={styles.heading}>Subscribed Tutors</div>
      <div className={styles.subscribedtutorwrapper}>
        {recommededTutors?.map((items, index) => (
          <div className={styles.subtutorcard} key={index}>
            <Image src={subTutorImage} className={styles.subtutorimage} alt="tutor image" />
            <div className={styles.tutorname}>
              <p>Nishant Patwardhan</p>
              <Image src={verifyIcon} className={styles.verifyicon} alt="verified icon" />
            </div>
            <div className={styles.tutorclass}>Class 10th : Science</div>

            <button
              className={styles.viewprofilebutton}
              onClick={handleViewProfile}
            >
              View profile
              <Image src={arrowLine} className={styles.arrowline} alt="tilted arrowline" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscribedTutors;

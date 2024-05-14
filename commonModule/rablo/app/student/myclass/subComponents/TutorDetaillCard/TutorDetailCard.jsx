import styles from "./style/tutordetailcard.module.css";
import profilePic from "./icons/Rectangle 890 (2).svg";
import verifyIcon from "./icons/verify.svg";
import Image from "next/image";

const TutorDetailCard = ({ unsubscribedTutorView, setType, setAbout, setIsReport }) => {
  function handleUnsubscribeTutor() {
    setType("Unsubscribe");
    setAbout("Tutor");
    setIsReport(true);
  }

  function handleReportTutor() {
    setType("Report");
    setAbout("Tutor");
    setIsReport(true);
  }

  return (
    <div className={styles.tutordetailwrapper}>
      <Image src={profilePic} className={styles.profilepic} alt="tutor image" />
      <div className={styles.tutordetailbox}>
        <div className={styles.tutordetailcontainer}>
          <div className={styles.heading}>
            <div className={styles.name}>
              Nishant Patwardhan
              <Image src={verifyIcon} className={styles.verifyIcon} alt="verified icon" />
            </div>
            <div className={styles.subscriber}>1.2k Subscribers</div>
          </div>
          <div className={styles.about}>
            I am interested in Science & Web Technology. Basic Lorem Ipsum is
            simply.
          </div>
          <div className={styles.tutorinfo}>
            <div className={styles.qualification}>
              <div className={styles.tutorinfo1}>PHD Science</div>
              <div className={styles.tutorinfo2}>Qualification</div>
            </div>
            <div className={styles.tutorinfohline}></div>
            <div className={styles.experience}>
              <div className={styles.tutorinfo1}>12 years of teaching</div>
              <div className={styles.tutorinfo2}>Experience</div>
            </div>
            <div className={styles.tutorinfohline}></div>

            <div className={styles.location}>
              <div className={styles.tutorinfo1}>Rohini, Delhi </div>
              <div className={styles.tutorinfo2}>Location</div>
            </div>
          </div>
          <div className={styles.buttons}>
            {unsubscribedTutorView ? (
              <button className={styles.requestdemobutton}>
                Request Demo Class
                <div className={styles.requestdemonumber}>3</div>
              </button>
            ) : (
              <button
                className={styles.unsubscribe}
                onClick={handleUnsubscribeTutor}
              >
                Unsubscribe
              </button>
            )}

            <button className={styles.priceline}>
              <p className={styles.price}>₹ 220 </p> Per Hour
            </button>
            {!unsubscribedTutorView && (
              <a className={styles.report} onClick={handleReportTutor}>
                Report
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailCard;
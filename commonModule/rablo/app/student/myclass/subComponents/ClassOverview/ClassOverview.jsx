import styles from "./style/classoverview.module.css";

const ClassOverview = ({ mode, setMyclassPages }) => {
  function handleLocationHere() {
    setMyclassPages(3);
  }

  return (
    <div className={styles.classOverviewContainer}>
      <p className={styles.toptext}>Class Overview</p>
      <div className={styles.classoverviewcontent}>
        <div className={styles.uls}>
          <ul>
            <li>
              <span>Grade</span>
            </li>
            <li>
              <span>Mode</span>
            </li>
            <li>
              <span>Schedule</span>
            </li>
            <li>
              <span>Time</span>
            </li>
            <li>
              <span>Subject</span>
            </li>
            <li>
              <span>Batch size</span>
            </li>
            <li>
              <span>Objective</span>
            </li>
            <li>
              <span>Outcome</span>
            </li>
            <li>
              <span>Duration</span>
            </li>
          </ul>
          <ul>
            <li>:</li>
            <li>:</li>
            <li>:</li>
            <li>:</li>
            <li>:</li>
            <li>:</li>
            <li>:</li>
            <li>:</li>
            <li>:</li>
          </ul>
          <ul>
            <li>
              <span>10th</span>
            </li>
            <li>
              <span>
                {mode === "offline" ? (
                  <>
                    Offline ,{" "}
                    <a
                      className={styles.locationhere}
                      onClick={handleLocationHere}
                    >
                      Location Here
                    </a>
                  </>
                ) : (
                  "Online"
                )}
              </span>
            </li>
            <li>
              <span>5 days/week, 1 hour/day</span>
            </li>
            <li>
              <span>4 pm - 5 pm</span>
            </li>
            <li>
              <span>Mathematics, Science +3</span>
            </li>
            <li>
              <span>20 students</span>
            </li>
            <li>
              <span>
                Master difficult math concepts and improve problem-solving
                skills
              </span>
            </li>
            <li>
              <span>
                Improved test scores, deeper understanding, and increased
                confidence,+1
              </span>
            </li>
            <li>
              <span>60 days</span>
            </li>
          </ul>
        </div>

        <div className={styles.paymentbar}>
          <p>Your Payment Per Class </p>
          <p>₹ 220 Per Hour</p>
        </div>
      </div>
    </div>
  );
};

export default ClassOverview;

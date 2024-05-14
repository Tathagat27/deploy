import styles from "./style/group.module.scss";
function Group() {
  return (
    <div className={styles.group}>
      {/* <ReadMore/> */}

      <div className={styles.image_icon}></div>
      <h2 className={styles.heading}>Namaste, John P.</h2>
      <p className={styles.subHeading}>Basic Instruction</p>
      <div className={styles.instruction_box}>
        <ul>
          <li>
            Let&apos;s get started by selecting your preferred class mode,
            timing slot, and duration.
          </li>
          <li>
            Next, choose the kind of tutor you&apos;d like, their age group
            range, and experience level.
          </li>
          <li>
            Then, select the subjects you want to study and your budget for
            tuition fees.
          </li>
          <li>
            {" "}
            Finally, fill in your personal details and submit the form to start
            your learning journey!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Group;

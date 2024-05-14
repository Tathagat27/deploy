"use client";
import styling from "./style/tutorCard.module.css";
import tutorImage from "./icons/Rectangle 890.svg";
import Image from "next/image.js";
import hindi from "./icons/हिn (1).svg";
import english from "./icons/Eng (1).svg";
import verified from "./icons/verify.svg";
import match from "./icons/matched.svg";
import diagonalArrow from "./icons/Line 245.svg";
const TutorCard = ({ items, setUnsubscribedTutorView, setMyclassPages }) => {
  function handleViewProfile() {
    setUnsubscribedTutorView(true);
    setMyclassPages(2);
  }

  return (
    <div className={styling.tutorCard}>
      <div className={styling.tutorPic}>
        <div className={styling.picture}>
          <Image src={tutorImage} alt="tutor image" />
          <Image className={styling.subPicture} src={match} alt="match percentage" />
        </div>
      </div>
      <div className={styling.tutorInfo}>
        <div className={styling.name}>
          <div>{items.name}</div>
          <div>
            <Image src={verified} className={styling.verifyicon} alt="verified icon" />
          </div>
        </div>
        <div className={styling.credentials}>
          <div className={styling.subName}>{items.degree}</div>
          <div className={styling.dot}></div>
          <div className={styling.experience}>{items.experience}</div>
          <div className={styling.dot}></div>
          <div className={styling.language}>
            <div className={styling.hindi}>
              <Image src={hindi} alt="hindi tag" />
            </div>
            <div className={styling.english}>
              <Image src={english} alt="english tag" />
            </div>
          </div>
        </div>

        <div className={styling.bottomLine}></div>

        <div className={styling.subjects}>
          <div className={styling.heading}>Subjects</div>
          <div className={styling.totalSubjects}>
            {items.subjects.map((sub, index) => (
              <>
                <div className={styling.subjectName}>{sub}</div>
                {items.subjects.length - 1 !== index && (
                  <div className={styling.reddot}></div>
                )}
              </>
            ))}
          </div>
        </div>
        <div className={styling.bottomLine}></div>
        <div></div>
        <div className={styling.aboutTutor}>
          <div className={styling.heading}>About Tutor</div>
          <div className={styling.classInfo}>
            <div className={styling.subscribers}>
              <div className={styling.left}>180</div>
              <div className={styling.right}>Subscribers</div>
            </div>

            <div className={styling.totalClasses}>
              <div className={styling.left}>03</div>
              <div className={styling.right}>Free Classes</div>
            </div>
          </div>
        </div>
        <button className={styling.viewProfilebtn} onClick={handleViewProfile}>
          View Profile
          <div>
            <Image style={{ paddingLeft: ".3vw", height: "1.1vw", width: "0.8vw" }} src={diagonalArrow} alt="tilted arrowline" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default TutorCard;
